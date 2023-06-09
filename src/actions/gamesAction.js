import axios from "axios";
import { newGamesURL, popularGamesURL, upcomingGamesURL, searchGameURL } from "../api";

export const loadGames = () => async (dispatch) => {

    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingData.data.results,
        },
    });

};



export const fetchSearched = (game_name) => async (dispatch) => {

    const searchedData = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedData.data.results,
        },
    });

};