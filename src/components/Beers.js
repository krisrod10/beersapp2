import React from 'react';
import { useState, useEffect } from "react"


console.clear();

function Beers(props) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        console.log(isLiked);
    }, [isLiked]);

    const handleClick = () => {
        setIsLiked(!isLiked);
    }
    return (
        <ul>
            {props.beers.map((beer) => (
                <li>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>{beer.name}</p>
                    <button onClick={handleClick}>
                        {isLiked === true ? "LIKED" : "NOT LIKED"}
                    </button>
                </li>
            ))};
        </ul>
    )
}
export default Beers;