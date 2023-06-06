import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const gameid = location.pathname.split("/")[2]; // array of strings
  
    // load the data and add it to the redux state
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);

    // get that data back from the redux state
    const {popular, newGames, upcoming, searched} = useSelector((state) => state.games);

    return (
        <StyledGameList>
                <AnimatePresence>
                    {gameid && <GameDetail gameid={gameid} /> }
                </AnimatePresence>
                { searched.length ?
                <div className="searched">
                    <h2>Searched Games:</h2>
                    <StyledGames>
                        {searched.map(game => (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                id={game.id.toString()}
                                key={game.id}
                                image={game.background_image}
                            />
                        ))}
                    </StyledGames>
                </div>
                : ''
                }
                <h2>Upcoming Games:</h2>
                <StyledGames>
                    {upcoming.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id.toString()}
                            key={game.id}
                            image={game.background_image}
                        />
                    ))}
                </StyledGames>
                <h2>Popular Games:</h2>
                <StyledGames>
                    {popular.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id.toString()}
                            key={game.id}
                            image={game.background_image}
                        />
                    ))}
                </StyledGames>
                <h2>New Games:</h2>
                <StyledGames>
                    {newGames.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id.toString()}
                            key={game.id}
                            image={game.background_image}
                        />
                    ))}
                </StyledGames>
        </StyledGameList>
    );
};

const StyledGameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;