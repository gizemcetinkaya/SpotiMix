import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFeaturedPlaylists } from "../api/featuredPlaylists";
import { getNewReleases } from "../api/newReleases";
import { getCategories } from "../api/categories";
import { Item as releasesItem } from "../types/newReleases";
import { Item as playlistsItem } from "../types/featuredPlaylists";
import { Item as categoriesItem } from "../types/categories";

interface MusicState {
    newReleases: releasesItem[];
    featuredPlaylists: playlistsItem[];
    categories: categoriesItem[];
    loading: boolean;
    error: string;
}

const initialState: MusicState = {
    newReleases: [],
    featuredPlaylists: [],
    categories: [],
    loading: false,
    error: ''
}

export const fetchNewReleases = createAsyncThunk("fetchNewReleases", async () => {
    return getNewReleases();
});

export const fetchFeaturedPlaylists = createAsyncThunk("fetchFeaturedPlaylists", async () => {
    return getFeaturedPlaylists();
});

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
    return getCategories();
});

const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewReleases.pending, (state, action) => {
            state.loading = true;
            state.error = ''
        });
        builder.addCase(fetchNewReleases.fulfilled, (state, action: PayloadAction<releasesItem[]>) => {
            state.loading = false;
            state.error = '';
            state.newReleases = action.payload;
        });
        builder.addCase(fetchNewReleases.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error fetching new releases data'
        });

        builder.addCase(fetchFeaturedPlaylists.pending, (state, action) => {
            state.loading = true;
            state.error = ''
        });
        builder.addCase(fetchFeaturedPlaylists.fulfilled, (state, action: PayloadAction<playlistsItem[]>) => {
            state.loading = false;
            state.error = '';
            state.featuredPlaylists = action.payload;
        });
        builder.addCase(fetchFeaturedPlaylists.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error fetching featured playlists data'
        });


        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true;
            state.error = ''
        });
        builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<categoriesItem[]>) => {
            state.loading = false;
            state.error = '';
            state.categories = action.payload;
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error fetching categories data'
        });
    }
});

export default musicSlice.reducer;