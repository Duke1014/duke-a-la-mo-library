import { Media } from "./media"
import { supabase } from "../utility/supabaseClient"

export class Game extends Media {

    media_id?: number;
    system: string;

    constructor(title: string, publish_year: Date, system: string, condition: string) {
        super(title, publish_year, "game", condition);
        this.system = system;
    }
    
    static async addGame(title: string, publish_year: Date, system: string, condition: string){
        const {data: Media, error: mediaError} = await supabase
        .from('media')
        .insert({title: title, publish_year: publish_year, system: system, condition: 'condition'})
        .select("id")
        .single() 

        if (mediaError) throw mediaError;

        const { error: gameError } = await supabase
        .from('games')
        .insert({id: Media.id, system: system})

        if (gameError) throw gameError;

        return Media.id;
    }
}