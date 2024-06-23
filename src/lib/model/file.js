import mongoose, { Schema } from "mongoose";
import { connectionToDb } from "../db";


mongoose.connect(connectionToDb)
mongoose.Promise = global.Promise

const fileSchema = new Schema({
    object

}, {
    timestamps: true,
})

export const User = mongoose.models.file || mongoose.model('file', fileSchema)