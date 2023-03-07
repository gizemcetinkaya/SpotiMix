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

export interface Icons {
    height: number;
    url: string;
    width: number;
}

export interface Item {
    href: string;
    icons: Icons[];
    id: string;
    name: string;
}

export interface CategoriesType {
    href: string;
    items: Item[];
}

export interface Categories {
    categories: CategoriesType;
}