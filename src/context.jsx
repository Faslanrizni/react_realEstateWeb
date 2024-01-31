import React, { Component } from 'react';
import item from './data.json';



const PropertyMain = React.createContext();

class PropertyProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        bedrooms: 1,
        type: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        location: '',
        minBedrooms: 0,
        maxBedrooms: 0,
        dateFilter: '',
        images: [],
    };

    componentDidMount() {
        console.log('Items:', item);
        let rooms = this.formatData(item);
        let featuredRooms = rooms.filter((room) => room.tenure=== "Commonhold");
        let maxPrice = Math.max(...rooms.map((item) => item.price));

        let maxBedrooms = Math.max(...rooms.map((item) => item.bedrooms));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxBedrooms,
        });
        // Save the rooms to local storage
        localStorage.setItem('propertyList', JSON.stringify(rooms));
    }


    formatData(data) {
        let itemsArray = Array.isArray(data.properties) ? data.properties : [];

        let tempItems = itemsArray.map((item) => {
            let id = item.fields.id;
            let imagesMain = item.fields.picture;
            let images = item.images;
            let addedYear = item.fields.year;
            let addedMonth = parseInt(item.fields.month) /*- 1*/; // Convert to 0-based index
            let addedDate = item.fields.day;
            let room = { ...item.fields, imagesMain, id, images, addedDate, addedMonth, addedYear };
            return room;
        });

        return tempItems;
    }


    /*====================Handle input changes in the form==============*/
    handleChange = (event) => {
        const { name, value, type } = event.target;
        this.setState(
            {
                [name]: value,
            },
            () => {
                this.filterProperties();
            }
        );

        console.log(`type: ${type} ,value: ${value}, name: ${name}`);
    };

    /*====================Handle input changes in the form==============*/

    filterProperties = () => {
        let {
            rooms,
            type,
            price,
            minBedrooms,
            maxBedrooms,
            dateFilter,
            location,
        } = this.state;
        /* By destructuring properties from this.state can easily access them within the function without having to use this.state.propertyName every time*/
        let tempRooms = [...rooms];


        /*===============filter by min bedroom and max bedroom no==========*/
        minBedrooms = parseInt(minBedrooms);
        maxBedrooms = parseInt(maxBedrooms);
        tempRooms = tempRooms.filter(
            /*(room) => room.bedrooms >= minBedrooms && room.bedrooms <= maxBedrooms*/
            (room) =>{
                const roomBedrooms = parseInt(room.bedrooms);
                return roomBedrooms >= minBedrooms && roomBedrooms <= maxBedrooms;
            }



        );
        /*===============filter by min bedroom and max bedroom no==========*/

        /*===============filter by location================================*/

        if (typeof location === 'string' && location.trim() !== '') {
            tempRooms = tempRooms.filter((room) =>
                room.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        /*===============filter by location================================*/


        tempRooms = tempRooms.filter((room) => room.price <= price);

        /*===============================filter by date=============================================*/
        if (dateFilter) {
            tempRooms = tempRooms.filter((room) => {
                if (room.addedYear !== undefined && room.addedMonth !== undefined && room.addedDate !== undefined) {
                    // Subtract 1 from room.addedMonth to match JavaScript's zero-based month representation
                    const addedDate = new Date(room.addedYear, room.addedMonth , room.addedDate);

                    const filterDate = new Date(dateFilter);
                    if (isNaN(filterDate.getTime())) {
                        return false;
                    }

                    // Updated condition to include properties added on the exact selected day or after
                    return addedDate >= filterDate && addedDate.getDate() >= filterDate.getDate();
                }
                return false;
            });
        }

        /*===============================filter by date=============================================*/



        if (type !== 'all') {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }

        this.setState({
            sortedRooms: tempRooms,
        });
    };

    getProperty = (tenure) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.tenure === tenure);
        return room;
    };

    render() {
        return (
            <PropertyMain.Provider
                value={{
                    ...this.state,
                    getRoom: this.getProperty,
                    handleChange: this.handleChange,
                }}
            >
                {this.props.children}
            </PropertyMain.Provider>
        );
    }
}

const RoomConsumer = PropertyMain.Consumer;


/*============// Create a higher-order component to wrap other components with the consumer================*/
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {(value) => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}

/*============// Create a higher-order component to wrap other components with the consumer================*/

export { PropertyProvider, RoomConsumer, PropertyMain };
