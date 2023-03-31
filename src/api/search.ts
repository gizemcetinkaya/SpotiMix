import { Search } from "../types/search";
import axiosInstance from "./axiosInstance";

export const getAlbumsByName = async (searchKey: string) => {
    const response = await axiosInstance.get<Search>(`search?q=${searchKey}&type=track`);
    return response.data.tracks.items;
}