export class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // Methods here:
}

export class Media {
    id: number;
    title: string;
    publish_year: Date;
    type: string;
    condition: string;

    constructor(
        id: number, 
        title: string, 
        publish_year: Date, 
        type: string,
        condition: string
    ) {
        this.id = id;
        this.title = title;
        this.publish_year = publish_year;
        this.type = type;
        this.condition = condition;
    }

    // Methods here:
}

export class Book extends Media {
    author: string;

    constructor(
        id: number, 
        title: string, 
        publish_year: Date,
        author: string,
        condition: string
    ) {
        super(id, title, publish_year, "book", condition);
        this.author = author;
    }

    // Methods here:
}

export class Movie extends Media {
    movie_type: "VHS" | "DVD" | "Blu-ray";

    constructor(
        id: number,
        title: string,
        publish_year: Date,
        movie_type: "VHS" | "DVD" | "Blu-ray",
        condition: string
    ) {
        super(id, title, publish_year, "movie", condition);
        this.movie_type = movie_type;
    }

    // Methods here:
}

export class Music extends Media {
    music_type: "Vinyl" | "CD" | "Digital" | "Tape";

    constructor(
        id: number,
        title: string,
        publish_year: Date,
        music_type: "Vinyl" | "CD" | "Digital" | "Tape",
        condition: string
    ) {
        super(id, title, publish_year, "music", condition);
        this.music_type = music_type;
    }
    
    // Methods here:
}

export class VideoGame extends Media {
    platform: string;

    constructor(
        id: number,
        title: string,
        publish_year: Date,
        platform: string,
        condition: string
    ) {
        super(id, title, publish_year, "video game", condition);
        this.platform = platform;
    }

    // Methods here:
}