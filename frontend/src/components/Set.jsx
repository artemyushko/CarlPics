import React from "react";
import '../css/set.css';

const Set = (props) => {
    return (
        <div className="poster">
            <img src={props.pictures.student5.picture}
                className='card-img-top'
                alt="Set Image"
                width='350'
            ></img>
            <div className="setdescription">
                <p>{props.title}</p>
                <p>{props.years}</p>
            </div>
            <a href={props.link} target="_blank">
                <button>View</button>
            </a>
        </div>
    );
}

export default Set;