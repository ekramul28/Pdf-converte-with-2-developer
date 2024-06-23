import { connectionToDb } from "@/lib/db";
import { Service } from "@/lib/model/service";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export const GET = async (req, res) => {
    try {
        await mongoose.connect(connectionToDb);
        const id = req.url.split("/services/")[1];
        const ObjectId = new mongoose.Types.ObjectId(id);

        const result = await Service.findOne({ _id: ObjectId });

        if (!result) {
            return NextResponse.error(`Service with id ${id} not found`, 404);
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.error("Internal Server Error", 500);
    } finally {
        mongoose.disconnect(); 
    }
};
