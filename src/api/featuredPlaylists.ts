import { FeaturedPlaylists } from "../types/featuredPlaylists";
import axiosInstance from "./axiosInstance";

export const getFeaturedPlaylists = async () => {
    const response = await axiosInstance.get<FeaturedPlaylists>('browse/featured-playlists');
    return response.data.playlists.items;
}