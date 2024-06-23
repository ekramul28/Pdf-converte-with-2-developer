import fs from 'fs';
import { writeFileSync } from 'fs';
import { PDFDocument, rgb } from 'pdf-lib';
import * as XLSX from 'xlsx';

async function convertExcelToPDF(excelFilePath, pdfFilePath) {
    // Read Excel file
    const workbook = XLSX.readFile(excelFilePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Generate PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    const fontSize = 12;
    const textWidth = page.getFont('Helvetica').widthOfTextAtSize(
        excelData.map(row => row.join('\t')).join('\n'),
        fontSize
    );
    const textHeight = excelData.length * fontSize * 1.2;

    page.drawText(excelData.map(row => row.join('\t')).join('\n'), {
        x: (width - textWidth) / 2,
        y: height - textHeight - 50,
        size: fontSize,
        font: pdfDoc.getFont('Helvetica'),
        color: rgb(0, 0, 0),
    });

    // Write PDF to file
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(pdfFilePath, pdfBytes);
}

// Usage
const excelFilePath = 'path/to/excel/file.xlsx';
const pdfFilePath = 'path/to/save/pdf/file.pdf';

convertExcelToPDF(excelFilePath, pdfFilePath)
    .then(() => console.log('Conversion complete'))
    .catch(err => console.error('Error converting:', err));
