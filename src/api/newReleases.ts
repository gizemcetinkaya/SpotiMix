import { NewReleases } from "../types/newReleases";
import axiosInstance from "./axiosInstance";

export const getNewReleases = async () => {
    const response = await axiosInstance.get<NewReleases>('browse/new-releases');
    return response.data.albums.items;
}