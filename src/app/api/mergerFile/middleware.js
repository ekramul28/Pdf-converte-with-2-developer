import { NextResponse } from "next/server";
import multer from "multer";
const upload = multer({ dest: './files' })

export function middleware(request) {
    upload.single("file")
    return NextResponse.next()
}