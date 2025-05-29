import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faHands, faLeaf, faUsers } from '@fortawesome/free-solid-svg-icons';

const CoreValues = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="section-heading">Our Core Values</h2>
                        <p className="text-muted">The principles that guide our decisions and actions.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faBalanceScale} className="value-icon mb-3" />
                                <h4 className="card-title">Integrity</h4>
                                <p className="card-text">We uphold the highest ethical standards in all our actions and decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faHands} className="value-icon mb-3" />
                                <h4 className="card-title">Compassion</h4>
                                <p className="card-text">We approach our work with empathy and a genuine concern for others.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faLeaf} className="value-icon mb-3" />
                                <h4 className="card-title">Sustainability</h4>
                                <p className="card-text">We create solutions that are environmentally and socially sustainable.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faUsers} className="value-icon mb-3" />
                                <h4 className="card-title">Community</h4>
                                <p className="card-text">We believe in the power of community-driven approaches to change.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;