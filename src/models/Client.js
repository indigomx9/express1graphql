import mongoose from "mongoose";

const ClientSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
});

export const Client = mongoose.model("Client", ClientSchema);


