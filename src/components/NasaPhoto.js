import React from "react";
import styled, { keyframes } from 'styled-components';

// const dummyData = {
//     date: "2021-12-23",
//     explanation: "still looking",
//     hdurl: "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
//     title: "Three Planets and a Comet"
// }

const kf = keyframes`
70% {
    opacity: .7;
}
100% {
    opacity: 1;
    transform: scale(1) rotateZ(0)
}
`
const StyledDetails = styled.div`
transform: scale(5) rotateZ(360deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  background-color: grey;
`

const StyledText = styled.p`
:hover { 
    background-color: lemonchiffon;
    padding: 1.4rem;
    line-height: 2rem;
}
`

const NasaPhoto = (props) => {
    return (
        <StyledDetails className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <StyledText className="explanation">{props.photo.explanation}</StyledText>
        </StyledDetails>
    )
}

export default NasaPhoto;