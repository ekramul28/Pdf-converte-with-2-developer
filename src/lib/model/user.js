import mongoose, { Schema } from "mongoose";
import { connectionToDb } from "../db";


mongoose.connect(connectionToDb)
mongoose.Promise = global.Promise

const userSchema = new Schema({
    name: String, 
    email: String,
    password: String,

}, {
    timestamps: true,
})

export const User = mongoose.models.users || mongoose.model('users', userSchema)