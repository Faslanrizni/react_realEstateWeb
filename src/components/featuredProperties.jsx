import React, { Component } from 'react';
import { PropertyMain } from '../context';
import Properties from './Properties.jsx';
import Loading from '../components/Loading';

class FeaturedProperties extends Component {
    static contextType = PropertyMain;

    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map((room) => {
            return (
                <div key={room.id} className="col-md-4 mb-3">
                    <Properties key={room.id} room={room} />
                </div>
            );
        });

        return (
            <section className={'container featured-rooms'}>
                <h4 className={'featured-rooms-h4 text-center'}>Featured Properties</h4>
                <div className={'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'}>
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedProperties;
