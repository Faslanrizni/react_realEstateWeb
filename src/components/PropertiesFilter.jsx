import React, { useContext } from 'react';
import { PropertyMain } from '../context';

/*===============get all unique values==============*/

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

/*===============get all unique values==============*/

export default function PropertiesFilter({ rooms }) {
    const context = useContext(PropertyMain);
    // console.log(context)
    const {
        handleChange,
        type,
        price,
        bedrooms,
        minPrice,
        maxPrice,
        minBedrroms,
        maxBrdrooms,
        location,
        dateFilter,
    } = context;

    /*============get unique types============*/
    let types = getUnique(rooms, 'type');

    /*adding types*/
    types = ['all', ...types];

    /*==========mapping to jsx========*/
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {' '}
                {item}
            </option>
        );
    });

    let bedroomNO = getUnique(rooms, 'bedrooms');
    bedroomNO = bedroomNO.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });

    return (
        <section className={'container filter-container'}>

            <form className={'filter-form getCenterForm'}>
                {/*==select type=*/}
                <div className="form-group">
                    <label htmlFor="type">Property type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className={'form-control'}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*==select type=*/}

                {/*==select for bedroom number type=*/}
                <div className="form-group">
                    <label htmlFor="bedrooms">Bedroom number</label>
                    <select
                        name="bedrooms"
                        id="bedrooms"
                        value={bedrooms}
                        className={'form-control'}
                        onChange={handleChange}
                    >
                        {bedroomNO}
                    </select>
                </div>
                {/*==select bedroom number type=*/}
                {/*==============room price==========*/}
                <div className="form-group">
                    <label htmlFor="price">Property price ${price}</label>
                    <input
                        type="range"
                        name={'price'}
                        min={minPrice}
                        max={maxPrice}
                        id={'price'}
                        value={price}
                        onChange={handleChange}
                        className={'form-control'}
                    />
                </div>
                {/*==============room price==========*/}

                <div className="form-group">
                    <label htmlFor="dateFilter">Filter by Date</label>
                    <input
                        type="date"
                        name="dateFilter"
                        id="dateFilter"
                        value={dateFilter}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
            </form>
        </section>
    );
}
