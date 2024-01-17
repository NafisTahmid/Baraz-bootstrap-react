import React from 'react';
import './Navbar.css'
import navbarData from '../../data/navbarData';

const Navbar = () => {

    console.log(navbarData);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">

                        {
                             navbarData.map(data => <li key={data.id} className="nav-item">
                                <a className="nav-link" href="/">{data.item}</a>

                            </li>)
                        }

                       
                        
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">SAVE MORE ON APP</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">SELL ON BARAZ</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">CUSTOMER CARE</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">TRACK MY ORDER</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">SIGNUP / LOGIN</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">BARAZ AFFILIATE PROGRAM</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">ভাষা</a>
                        </li> */}
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;