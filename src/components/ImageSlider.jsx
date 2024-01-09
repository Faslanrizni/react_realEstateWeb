import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    return (
        <>
            <div className="container imgSlider my-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === currentImage ? 'active' : ''}`}
                                    >
                                        <img
                                            src={image}
                                            className="d-block w-100 img-fluid max-img-width"
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target=".carousel"
                                data-bs-slide="prev"
                                onClick={prevSlide}
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target=".carousel"
                                data-bs-slide="next"
                                onClick={nextSlide}
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageSlider;
