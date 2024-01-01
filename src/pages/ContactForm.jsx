import Footer from "../components/Footer.jsx";

const contactForm = () =>{
    return(
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
            <div className="contact-section">
                <div className="info">
                    <img src="https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-310.jpg?size=626&ext=jpg&ga=GA1.1.1313303609.1697107729&semt=sph" alt=""/>
                </div>
                <div className="formClass">
                    <form className="contact" action="" method="post">
                        <input type="text" name="name" className="text-box" placeholder="Name" required />
                        <input type="email" name="email" className="text-box" placeholder="email" required />
                        <textarea name="message" placeholder="Get in touch" required></textarea>
                        <input type="submit" name="submit" className="btn" value="Send" />
                    </form>

                </div>


            </div>



            <Footer/>
        </>
        )

};
export default contactForm;