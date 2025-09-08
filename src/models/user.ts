export interface IUser extends Document {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
