import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';

const index = () => {
    return (
        <Fragment>
        <footer className="site-footer">
            <div className="container">
                <div className="row">

                <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
                    <h1 className="text-white" data-aos="fade-up" data-aos-delay="100">All new and remix version album songs are <strong>available</strong></h1>
                </div>

                <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
                    <h4 className="my-4">Contact Info</h4>
        {/*
                    <p className="mb-1">
                    <i className="fa fa-phone mr-2 footer-icon"></i> 
                    +99 080 070 4224
                    </p>
        */}
                    <p>
                    <Link to="#">
                        <i className="fa fa-envelope mr-2 footer-icon"></i>
                        hello@company.com
                    </Link>
                    </p>
                </div>

                <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
                    <h4 className="my-4">Our Studio</h4>

                    <p className="mb-1">
                    <i className="fa fa-home mr-2 footer-icon"></i> 
                    Available soon on, Chennai
                    </p>
                </div>

                <div className="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
                    <p className="copyright-text">Copyright &copy; 2021 Music World </p>
                </div>

                <div className="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
                    
                    <ul className="footer-link">
                    <li><Link to="#">Stories</Link></li>
                    <li><Link to="#">Work with us</Link></li>
                    <li><Link to="#">Privacy</Link></li>
                    </ul>
                </div>

                <div className="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                    <ul className="social-icon">
                    <li><Link to="#" className="fa fa-instagram"></Link></li>
                    <li><Link to="#" className="fa fa-twitter"></Link></li>
                    <li><Link to="#" className="fa fa-facebook"></Link></li>
                    <li><Link to="#" className="fa fa-linkedin"></Link></li>
                    </ul>
                </div>

                </div>
            </div>
    </footer>
        </Fragment>
    )
}

export default index;