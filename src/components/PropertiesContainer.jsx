import React, {useEffect, useState} from 'react';


import PropertisFilter from './PropertiesFilter.jsx'

import PropertiesLIst from './PropertiesList.jsx';
import {withRoomConsumer} from '../context';
import Loading from './Loading';
import favouritesList from "./FavouritesList.jsx";
import PropertiesList from "./PropertiesList.jsx";
import FavouritesList from "./FavouritesList.jsx";
import Footer from "./Footer.jsx";

function PropertiesContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    const [favourites, setFavourites] = useState([]);

    // Fetch favorite properties from local storage when the component is mounted
    useEffect(() => {
        try {
            const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
            setFavourites(storedFavourites);
        } catch (error) {
            console.error('Error accessing local storage:', error);
        }
    }, []);

    const updateLocalStorage = (updatedFavourites) => {
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };
    const addToFavourites = property => {
        if (!favourites.find(fav => fav.id === property.id)) {
            const updatedFavourites = [...favourites, property];
            setFavourites(updatedFavourites);
            updateLocalStorage(updatedFavourites);
        }
    };

    const removeFromFavourites = property => {
        const updatedFavourites = favourites.filter((fav) => fav.id !== property.id);
        setFavourites(updatedFavourites);
        updateLocalStorage(updatedFavourites);
    };

    const clearFavourites = () => {
        setFavourites([]);
        updateLocalStorage([]);
    };


    if (loading){
        return <Loading/>
    }
    return(
        <div>

            <PropertisFilter rooms={rooms}/>

            <PropertiesList rooms={sortedRooms}
                            onAddToFavourites={addToFavourites}
                            favourites={favourites}
            />
            <FavouritesList
                favourites={favourites}
                onAddToFavourites={addToFavourites}
                onRemoveFromFavourites={removeFromFavourites}
                onClearFavourites={clearFavourites}
            />
            <Footer/>
        </div>
    );

}
export default withRoomConsumer(PropertiesContainer)


