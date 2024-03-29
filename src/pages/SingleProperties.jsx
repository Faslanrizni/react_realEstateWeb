import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { PropertyMain } from "../context.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function SingleProperties() {
    const { tenure } = useParams();
    const { getRoom } = useContext(PropertyMain);
    const room = getRoom(tenure);

    if (!room) {
        return (
            <div className={'error'}>
                <h3>not found</h3>
                <Link to={'/rooms'} className={'btn btn-primary'}>Back to home</Link>
            </div>
        );
    }

    const { type, description, bedrooms, price, location, picture, images, addedDate, addedYear, addedMonth, url } = room;
    const imagesArray = Array.isArray(images) ? images : [images];

    return (
        <>
            <Tabs>
                <TabList className="nav nav-tabs d-flex justify-content-center">
                    <Tab>Images</Tab>
                    <Tab>Details</Tab>
                </TabList>

                <TabPanel>
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col">
                                <ImageSlider images={imagesArray} />
                            </div>
                        </div>
                    </div>
                    <section className={'single-property'}>
                        <div className={'container-fluid justify-content-center'}>
                            <div className="row">
                                {imagesArray.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 mb-3">
                                        <img
                                            src={item}
                                            alt={type}
                                            className="img-fluid rounded mx-3 my-3"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </TabPanel>



                <TabPanel>
                    <div className=" container-fluid single-property-info">
                        <article className={'description'}>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>

                        {/*========================map===============================*/}
                        <iframe
                            src={url} className={'locationMap'}
                            width="400" height="300"  allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                        {/*========================map===============================*/}
                        <article className={' container propertyInfo'}>
                            <h3>Extra Informations</h3>
                            <p>price: ${price}</p>
                            <p>Property Type: {type}</p>
                            <p>bedroom No: {bedrooms}</p>
                            <p>location: {location}</p>
                            <p> Added Date : {addedDate} th {addedMonth + 1} {addedYear}</p>
                        </article>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
}
