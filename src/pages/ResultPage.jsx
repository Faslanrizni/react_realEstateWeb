import React from "react";
import RoomContainer from '../components/PropertiesContainer.jsx';
import MainBackground from "../components/MainBackground.jsx";
import Banner from "../components/Banner.jsx";

const ResultPage = ()=>{
    return (
        <>

            <div className="container">
                <div className="row">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <img src="https://img.freepik.com/free-photo/modern-luxury-domestic-room-comfortable-relaxation-generative-ai_188544-12679.jpg?size=626&ext=jpg&ga=GA1.1.1313303609.1697107729&semt=sph" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-169741.jpg?size=626&ext=jpg&ga=GA1.1.1313303609.1697107729&semt=sph" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/premium-photo/modern-cozy-house-with-pool-parking-sale-rent-luxurious-style-black-white-colorsgenerative-ai_391052-12446.jpg?size=626&ext=jpg&ga=GA1.2.1313303609.1697107729&semt=sph" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>



            </div>
            <RoomContainer />

        </>
    )
}
export default  ResultPage;