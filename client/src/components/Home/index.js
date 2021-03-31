import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';

const index = () => {
    return (
        <Fragment>
            <section className="hero hero-bg d-flex justify-content-center align-items-center">
               <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div className="hero-text">

                                   <h1 className="text-white" data-aos="fade-up">Listen your favorite album songs only on <strong>Music World</strong></h1>

                                   <Link to="contact.html" className="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">GET STARTED</Link>
                              </div>
                        </div>

                        <div className="col-lg-6 col-12">
                          <div className="hero-image" data-aos="fade-up" data-aos-delay="300">

                            <img src="images/working-girl.png" className="img-fluid" alt="working girl" />
                          </div>
                        </div>

                    </div>
               </div>
     </section>

        </Fragment>
    )
}

export default index;