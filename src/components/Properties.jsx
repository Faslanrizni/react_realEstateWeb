import React from "react";
import {Link} from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
// export default function Room({room}){
export default function Properties({room, onAddToFavourites,isFavourite}){
    const {type,price,picture,images,tenure,bedrooms} = room;
    // const imagesArray = Array.isArray(images) ? images : (picture ? [picture] : []);

    return(
        <article className={'property'}>

            <div className="card img-container" style={{ width: '18rem' }}>
                <img src={picture} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <Link to={`/rooms/${tenure}`} className="btn btn-primary ">Reed More</Link>
                    <br/>
                    <br/>
                    <button
                        onClick={() => onAddToFavourites(room)}
                        className="btn btn-danger"
                    >
                        {isFavourite ? 'Already added to Favourite' : 'Add to Favourite'} <CiHeart />
                    </button>
                </div>
                    <div className="card-body">
                        <h5 className="card-title">property Type :{type}</h5>
                        <p className="card-text">{''}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{type}</li>
                        <li className="list-group-item">${price} per month</li>
                        <li className="list-group-item">bedroom no: {bedrooms}</li>
                    </ul>

            </div>



        </article>
    );

}