import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { User } from "@/lib/model/user";


export async function POST(req) {
    try {
        const body = await req.json()
        const userData = body.formData
        // confirm data exists
        if (!userData?.email || !userData?.password) {
            return NextResponse.json({ message: 'All Fields are required' }, { status: 400 })
        }
        // checking for duplicates
        const duplicate = await User.findOne({ email: userData.email }).lean().exec()
        if (duplicate) {
            return NextResponse.json({ message: 'Duplicate Email' }, { status: 409 })
        }
        const hashPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashPassword

        await User.create(userData)
        return NextResponse.json({ message: 'User Created' }, { status: 201 })


    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}