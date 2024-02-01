// import React from 'react';
import Properties from './Properties.jsx';
import React, {useContext, useEffect} from 'react';

import Footer from './Footer';
import MainBackground from "./MainBackground.jsx";
import Banner from "./Banner.jsx";
import {PropertyMain} from "../context.jsx";

export default function PropertiesList({ onAddToFavourites, favourites }) {

    /*==  // Access the shared state and functions from the context using useContext hook===*/
    const context = useContext(PropertyMain);

    // Destructure relevant properties from the context
    const { sortedRooms } = context;

    useEffect(() => {
        console.log('PropertiesList has re-rendered with sortedRooms:', sortedRooms);
    }, [sortedRooms]);


    /*============If there are no matching properties, display a message============*/
    if (sortedRooms.length === 0) {
        return (
            <>
                <div className={'empty-search'}>
                    <h3>no matching search</h3>
                </div>

            </>
        );
    }

    /*============If there are no matching properties, display a message============*/

    return (
        <>
            <section className="container propertiesList">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {sortedRooms.map((item) => (
                        <div key={item.id} className="col-md-4 mb-3">
                            <Properties
                                room={item}
                                onAddToFavourites={() => onAddToFavourites(item)}
                                isFavourite={favourites.some((fav) => fav.id === item.id)}
                            />
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
