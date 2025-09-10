import { supabase } from "../utility/supabaseClient"

export class Media {
    id?: number;
    title: string;
    publish_year: Date;
    type: string;
    condition: string;

    constructor(title: string, publish_year: Date, type: string, condition: string) {
        this.title = title,
        this.publish_year = publish_year,
        this.type = type,
        this.condition = condition
    }
    
    // Methods here:

    async addMedia(title: string, publish_year: Date, type: string, condition: string) {
        const {data: Media, error: mediaError} = await supabase
        .from('media')
        .insert({
            title: title, 
            publish_year: publish_year, 
            type: type, 
            condition: condition
        })
        .select("id")
        .single() 

        if (mediaError) throw mediaError;

        return Media.id;
   
    }
    
}