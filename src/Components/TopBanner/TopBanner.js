import React from 'react';
import './TopBanner.css'
import feature1 from '../../images/feature1.png'
import feature2 from '../../images/feature2.png'
import feature3 from '../../images/feature3.png'
import feature4 from '../../images/feature4.png'
import top from '../../images/top.png'

import topBannerData from '../../data/topBannerData'

const TopBanner = () => {
    return (
        <div className="bg-brand">

                <div className="container">

                    <div className="top-container my-3">
                        <img className="img-fluid  mx-auto d-block" src={top} alt="" />
                    </div>
                   

                    <div className="row">

                        {
                            topBannerData.map((data) => <div key={data.id} style={{borderRadius:"40px"}}className="col m-2 bg-white">
                                                        <img src={data.image} width="50" className="img-fluid p-2" alt="" />
                                                         <a href="/" className="text-decoration-none text-dark fw-bold ps-2">{data.name}</a>
                                            </div>)
                        }

                        {/* <div style={{borderRadius:"40px"}}className="col m-2 bg-white">
                            <img src={feature1} width="50" className="img-fluid p-2" alt="" />
                            <a href="/" className="text-decoration-none text-dark fw-bold ps-2">Free Shipping</a>
                        </div>

                        <div style={{borderRadius:"40px"}}className="col m-2 bg-white">
                            <img src={feature2} width="50" className="img-fluid p-2" alt="" />
                            <a href="/" className="text-decoration-none text-dark fw-bold ps-2">Grocery Shopping</a>
                        </div>
                        <div style={{borderRadius:"40px"}}className="col m-2 bg-white">
                            <img src={feature3} width="50" className="img-fluid p-2" alt="" />
                            <a href="/" className="text-decoration-none text-dark fw-bold ps-2">Baraz Mall</a>
                        </div>
                        <div style={{borderRadius:"40px"}}className="col m-2 bg-white">
                            <img src={feature4} width="50" className="img-fluid p-2" alt="" />
                            <a href="/" className="text-decoration-none text-dark fw-bold ps-2">Digital Sheba</a>
                        </div> */}

                    </div>

                </div>
        </div>
       
    );
};

export default TopBanner;