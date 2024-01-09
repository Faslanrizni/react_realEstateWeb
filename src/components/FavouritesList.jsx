import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

export default function FavouritesList({ favourites, onRemoveFromFavourites }) {
    return (
        <section className="favourites-list">
            <div className="container favouriteList">
                <div className="row">
                    <div className="col text-center margin">
                        <h2 className="FavouriteList">Favourite Properties</h2>
                        <p>Select Your Favourite Properties</p>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {favourites.map(item => (
                    <div key={item.id} className="col mb-3">
                        <article className="property">
                            <div className="card img-container" style={{ width: '18rem' }}>
                                <img src={item.picture} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <Link to={`/rooms/${item.tenure}`} className="btn btn-primary">
                                        Read More
                                    </Link>
                                    <br />
                                    <br />
                                    <button
                                        onClick={() => onRemoveFromFavourites(item)}
                                        className="btn btn-danger"
                                    >
                                        Remove from Favourites <CiHeart />
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Property Type: {item.type}</h5>
                                    <p className="card-text">{''}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.type}</li>
                                    <li className="list-group-item">${item.price} per month</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}
