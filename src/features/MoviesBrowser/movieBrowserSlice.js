import { createSlice } from "@reduxjs/toolkit";

const movieBrowserSlice = createSlice({
    name: "movieBrowser",
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: (state) => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (state, {payload: repositories}) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
fetchRepositories,
fetchRepositoriesSuccess,
fetchRepositoriesError,
}= movieBrowserSlice.actions;

const selectMovieBrowserState = state => state.movieBrowser;

export const selectRepositories = state => selectMovieBrowserState(state).repositories;
export const selectRepositoriesStatus = state => selectMovieBrowserState(state).status;

export default movieBrowserSlice.reducer;