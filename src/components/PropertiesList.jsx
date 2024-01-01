import React from 'react';
import Properties from './Properties.jsx';

export default function PropertiesList({ rooms, onAddToFavourites, favourites }) {
    if (rooms.length === 0) {
        return (
            <>
                <div className={'empty-search'}>
                    <h3>No matching search</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <section className={'container propertiesList'}>
                <div className={'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'}>
                    {rooms.map((item) => (
                        <div key={item.id} className="col mb-3">
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
