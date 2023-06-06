//Base URL
const base_url = "https://api.rawg.io/api/";
const key_param = "key=12e2e2879fae4574abb98523245614e0";

const curryr = new Date();
const currentDate = curryr.toISOString().substring(0, 10);
const lastYear = new Date( curryr.getFullYear()-1, curryr.getMonth(), curryr.getDate() ).toISOString().substring(0, 10);
const nextYear = new Date( curryr.getFullYear()+1, curryr.getMonth(), curryr.getDate() ).toISOString().substring(0, 10);

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}&${key_param}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}&${key_param}`;
export const newGamesURL = () => `${base_url}${new_games}&${key_param}`;
export const gameDetailsURL = (gameId) => `${base_url}games/${gameId}?${key_param}`;
export const gameScreenshotsURL = (gameId) => `${base_url}games/${gameId}/screenshots?${key_param}`;
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9&${key_param}`;

// console.log(popularGamesURL());
// console.log(upcomingGamesURL());
// console.log(newGamesURL());
// console.log(gameScreenshotsURL(303576));