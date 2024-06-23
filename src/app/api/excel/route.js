import { connectionToDb } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        await mongoose.connect(connectionToDb);
        const data = await req.json()
        console.log(data.File[0]);
        console.log(data.File);

        if (!data) {
            return NextResponse.error(`Service with id ${id} not found`, 404);
        }

        return NextResponse.json({ ok: "ok" });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.error("Internal Server Error", 500);
    } finally {
        mongoose.disconnect();
    }
};