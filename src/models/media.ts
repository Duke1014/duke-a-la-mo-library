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