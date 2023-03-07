import { Categories } from "../types/categories";
import axiosInstance from "./axiosInstance";

export const getCategories = async () => {
    const response = await axiosInstance.get<Categories>('browse/categories');
    return response.data.categories.items;
}