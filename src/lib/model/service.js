import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: String,
    image: String,
    feature: String,
    benefit: String
});

export const Service = mongoose.models.services || mongoose.model('services', serviceSchema)