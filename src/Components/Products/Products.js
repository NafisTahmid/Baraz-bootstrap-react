import React from 'react';


import './Products.css'


const Products = (props) => {
    const products = props.products;
    const title = props.title;
    return (

        <div className="bg-brand">
        <div className="container py-3">
            <h2 className="fs-5">{title}</h2>
            <div className="d-flex flex-wrap flashsale-container">

            {
                        products.map(products =>  <div key={products.id} className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img className="img-fluid" src={products.image} alt="flashsale-products" />
                        <p className="card-title">{products.name}</p>
                        <h3 className="card-price">৳{products.price}</h3>
                        <h4 className="card-text"><strike className="text-muted">৳{products.prevPrice}</strike> {products.discountPercentage}</h4>
                    </div>)
                }
             
                    {/* <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img className="img-fluid" src={f2} alt="flashsale-products" />
                        <p className="card-title">Vivo/Oppo/MI in Earphone Good Bass... </p>
                        <h3 className="card-price">৳135</h3>
                        <h4 className="card-text"><strike className="text-muted">৳200</strike> -33%</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img className="img-fluid" src={f3} alt="flashsale-products" />
                        <p className="card-title">TWS i7s Double Dual Mini Earphone With Power Case...</p>
                        <h3 className="card-price">৳248</h3>
                        <h4 className="card-text"><strike className="text-muted">৳700</strike> -65%</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img className="img-fluid" src={f4} alt="flashsale-products" />
                        <p className="card-title">Vivo In Ear Earphone Best sound quality for any...</p>
                        <h3 className="card-price">৳131</h3>
                        <h4 className="card-text"><strike className="text-muted">৳200</strike> -35%</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img className="img-fluid" src={f5} alt="flashsale-products" />
                        <p className="card-title">01 Pcs Anti Rfd Card Holder NFC Blocking...</p>
                        <h3 className="card-price">৳26</h3>
                        <h4 className="card-text"><strike className="text-muted">৳66</strike> -35%</h4>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img className="img-fluid" src={f6} alt="flashsale-products" />
                        <p className="card-title">Electric Hot Water Bag pain remover [Multicolor]</p>
                        <h3 className="card-price">৳163</h3>
                        <h4 className="card-text"><strike className="text-muted">৳650</strike> -70%</h4>
                    </div>  */}
    

            </div>

        </div>
        
    </div>

    );
};

export default Products;