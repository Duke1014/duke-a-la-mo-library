export interface User extends Document {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
