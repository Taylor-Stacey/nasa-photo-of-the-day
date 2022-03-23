import React from "react";

const dummyData = {
    date: "2021-12-23",
    explanation: "still looking",
    hdurl: "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
    title: "Three Planets and a Comet"
}

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
            <p className="explanation">{props.photo.explanation}</p>

        </div>
    )
}

export default NasaPhoto;