import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { sizedImage } from "../util";

const Game = ({name, released, id, image}) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }
    return (
        <StyledGame layoutId={id} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img 
                layoutId={`image ${id}`}
                src={sizedImage(image, 1280)} 
                alt={name} 
            />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 25vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.25);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game;