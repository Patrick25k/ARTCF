import React from 'react';

const OurPartners = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="section-heading">Our Partners</h2>
                        <p className="text-muted">We collaborate with organizations that share our vision and values.</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-2 col-4 mb-4">
                        <img src="https://via.placeholder.com/150x80" alt="Partner Logo" className="img-fluid partner-logo" />
                    </div>
                    <div className="col-md-2 col-4 mb-4">
                        <img src="https://via.placeholder.com/150x80" alt="Partner Logo" className="img-fluid partner-logo" />
                    </div>
                    <div className="col-md-2 col-4 mb-4">
                        <img src="https://via.placeholder.com/150x80" alt="Partner Logo" className="img-fluid partner-logo" />
                    </div>
                    <div className="col-md-2 col-4 mb-4">
                        <img src="https://via.placeholder.com/150x80" alt="Partner Logo" className="img-fluid partner-logo" />
                    </div>
                    <div className="col-md-2 col-4 mb-4">
                        <img src="https://via.placeholder.com/150x80" alt="Partner Logo" className="img-fluid partner-logo" />
                    </div>
                </div>
                <div className="text-center mt-4">
                    <a href="#" className="btn btn-outline-primary">Become a Partner</a>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;