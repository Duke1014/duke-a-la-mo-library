import mongoose, { Document, Schema } from "mongoose";

export interface IMedia extends Document {
    id: number;
    title: string;
    publish_year: Date;
    type: string;
    condition: string;
    // user: ObjectId;

    // constructor(
    //     id: number, 
    //     title: string, 
    //     publish_year: Date, 
    //     type: string,
    //     condition: string
    // ) {
    //     this.id = id;
    //     this.title = title;
    //     this.publish_year = publish_year;
    //     this.type = type;
    //     this.condition = condition;
    // }

    // Methods here:
}

const MediaSchema: Schema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    publish_year: { type: Date, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }
})

export default mongoose.model<IMedia>("Media", MediaSchema);