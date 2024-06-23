import { connectionToDb } from "@/lib/db"
import { Service } from "@/lib/model/service"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {

    await mongoose.connect(connectionToDb)
    const data = await Service.find()
    return NextResponse.json(data)
}