import React from "react";
import FeaturedProperties from '../components/featuredProperties';
import Footer from '../components/Footer';
import Banner from "../components/Banner.jsx";
import MainBackground from "../components/MainBackground.jsx";

const SearchPage = ()=>{
    return (
        <>
            <div className="card bg-dark text-white">
                <MainBackground main={"featuredProperties"} >
                    <Banner title={'Feature properties'} subTitle={'rem Ipsum is simply dummy . Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an maIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'}>
                    </Banner>
                </MainBackground>

            </div>
            <FeaturedProperties/>
            <Footer/>

        </>
    );
}
export default  SearchPage;