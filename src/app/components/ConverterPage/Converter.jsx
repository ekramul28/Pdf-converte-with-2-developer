"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import JpgToPdf from "../JpgToPdf";
import WordToPdf from "../WordToPdf";
import MergePdf from "../MergePdf";
import PdfToPowerPoint from "../PdfToPowerPoint";
import PageNumbering from "../PageNumbering";
import Pdf2Word from "../Pdf2Word";
import Pdf2Excel from "../Pdf2Excel";
import Excel2Pdf from "../Excel2Pdf";
import Pdf2Jpg from "../Pdf2Jpg";
import Sign2Pdf from "../Sign2Pdf";


const Converter = ({ File, conversionType }) => {
    console.log(conversionType);
    const file = File[0]
    const [url, seturl] = useState({})
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
        e.preventDefault()
        const data = fileReader.result
        seturl(data)
        // console.log(data);
    }
    fileReader.readAsDataURL(file)

    switch (conversionType) {
        case "wordtopdf":
            return <WordToPdf />
        case "jpgtopdf":
            return <JpgToPdf url={url} />
        case "mergePdf":
            return <MergePdf File={File} url={url} />
        case "PdfToPowerPoint":
            return <PdfToPowerPoint url={url} />
        case "pageNumbering":
            return <PageNumbering url={url} />
        case "pdf2Word":
            return <Pdf2Word url={url} />
        case "pdf2Excel":
            return <Pdf2Excel url={url} />
        case "excel2Pdf":
            return <Excel2Pdf file={File} />
        case "pdf2Jpg":
            return <Pdf2Jpg url={url} />
        case "sign2Pdf":
            return <Sign2Pdf url={url} />
    }

};

export default Converter;
{/* <embed src={url} type="application/pdf" width="100%" height="600px" /> */ }

{/* <Image
    src={url}
    width={400}
    height={60}
    alt="img">
</Image> */}