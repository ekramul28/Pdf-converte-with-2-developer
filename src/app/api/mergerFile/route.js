import { connectionToDb } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { middleware } from "./middleware";
export const POST = async (req) => {
    try {
        middleware()
        await mongoose.connect(connectionToDb);
        const data = await req.formData()
        console.log(req.file);

        if (!data) {
            return NextResponse.error(`Service with id ${id} not found`, 404);
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.error("Internal Server Error", 500);
    } finally {
        mongoose.disconnect();
    }
};