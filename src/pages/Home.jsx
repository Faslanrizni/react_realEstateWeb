import React from "react";
import {Link} from 'react-router-dom';
// import bottom from "./bottom"
import Footer from '../components/Footer'
/*import imageScrollBar from '../components/imageScrollbar';*/
import MainBackground from "../components/MainBackground.jsx";
import Banner from "../components/Banner.jsx";
export default function Home(){




    return(

        <div>
            <MainBackground main={"mainHero"} >
                <Banner title={'Main Page'} subTitle={'rem Ipsum is simply dummy . Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an maIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'}>
                </Banner>
            </MainBackground>
            {/*   <ImageScrollbar images={images}>*/}
           {/* <section className={'section'}>
                <div className="container home-container">
                    <div className="row">
                        <div className="col-md-12 text-center ">
                            <h3 className="main-heading">Homes for sale – find your next move with us</h3>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem dolorem doloremque excepturi fugiat id illum in inventore, ipsa labore nam nemo nisi omnis pariatur quas sapiente, sed temporibus voluptatem.
                            </div>
                            <Link to={'#'} className={'btn btn-warning'}>Read More</Link>

                        </div>
                    </div>
                </div>
            </section>*/}
            <section className={'section'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center mainCss ">
                            <div className="serviceHeading">
                                <h3 className="main-heading">Services</h3>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem dolorem doloremque excepturi fugiat id illum in inventore, ipsa labore nam nemo nisi omnis pariatur quas sapiente, sed temporibus voluptatem.
                                </div>
                            </div>


                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Free home valuation</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur culpa, dolorem, doloribus eos explicabo id inventore labore nulla quidem ratione saepe, sint voluptates! Ad assumenda, consectetur corporis deserunt, distinctio ea eligendi eos facere fuga fugit id incidunt iure laboriosam obcaecati odio perferendis quaerat quibusdam rem rerum sit, vel veritatis..</p>
                                    </div>

                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Commercial property</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur consequuntur, cum eligendi exercitationem laudantium quaerat velit voluptas! Dignissimos eaque et excepturi illo laudantium molestias officia quo voluptate! Adipisci at aut blanditiis delectus ea enim ex expedita magni nostrum odio sed soluta suscipit tempore, tenetur totam ut voluptate. Autem, veniam!.</p>
                                    </div>

                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Energy efficiency</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam aperiam commodi delectus dolores ducimus ex laboriosam nemo nesciunt, obcaecati odio omnis optio pariatur perferendis quaerat quas quibusdam quidem quisquam ratione recusandae repellat saepe, soluta tenetur ut voluptas. Et, impedit reiciendis? Accusantium culpa eum, expedita impedit laborum necessitatibus reprehenderit vel..</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />


        </div>
    )
}