export interface ExternalUrls {
    spotify: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls2 {
    spotify: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Owner {
    display_name: string;
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Track {
    href: string;
    total: number;
}

export interface Item {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner[];
    primary_color: null;
    public: null;
    snapshot_id: string;
    tracks: Track[];
    type: string;
    uri: string;
}

export interface Playlists {
    href: string;
    items: Item[];
}

export interface FeaturedPlaylists {
    playlists: Playlists;
}