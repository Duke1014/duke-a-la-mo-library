import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>("User", UserSchema);