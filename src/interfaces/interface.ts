export interface User {
    email: string,
    password: string
}
export interface Results {
    data: SingleALbum[]
}
export interface SingleALbum {
    album:SingleALbum,
    id:                      number;
    title:                   string;
    upc:                     string;
    link:                    string;
    share:                   string;
    cover:                   string;
    cover_small:             string;
    cover_medium:            string;
    cover_big:               string;
    cover_xl:                string;
    md5_image:               Md5Image;
    genre_id:                number;
    genres:                  Genres;
    label:                   string;
    nb_tracks:               number;
    duration:                number;
    fans:                    number;
    rating:                  number;
    release_date:            string;
    record_type:             string;
    available:               boolean;
    tracklist:               string;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    contributors:            Contributor[];
    artist:                  Artist;
    type:                    string;
    // tracks:                  Tracks;
}

export interface Artist {
    id:             number;
    name:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}


export enum ArtistType {
    Artist = "artist",
    Genre = "genre",
}

export interface Contributor {
    id:             number;
    name:           string;
    link:           string;
    share:          string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    radio:          boolean;
    tracklist:      string;
    type:           ArtistType;
    role:           string;
}

export interface Genres {
    data: ArtistElement[];
}

export interface ArtistElement {
    id:         number;
    name:       string;
    picture?:   string;
    type:       ArtistType;
    tracklist?: string;
}

export enum Md5Image {
    The2E018122Cb56986277102D2041A592C8 = "2e018122cb56986277102d2041a592c8",
}



export interface Tracks {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               string;
    artist:                  string;
    type:                    string;
}

export enum PurpleType {
    Track = "track",
}
