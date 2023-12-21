import React from "react";
import '../css/set.css';

const Set = (props) => {
    return (
        <div className="poster">
            <img src={props.image}
                className='card-img-top'
                alt="Set Image"
                width='350'
            ></img>
            <div className="setdescription">
                <p>{props.name}</p>
                <p>{props.type}</p>
            </div>
            <a href={props.link} target="_blank">
                <button>View</button>
            </a>
        </div>
    );
}

export default Set;