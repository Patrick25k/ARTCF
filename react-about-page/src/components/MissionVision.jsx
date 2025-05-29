import React from 'react';

const MissionVision = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="section-heading">Our Mission & Vision</h2>
                        <p className="text-muted">Guiding principles that drive our work every day.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">
                                    <i className="fas fa-bullseye me-2"></i> Our Mission
                                </h3>
                                <p className="card-text">To empower communities through education, healthcare, and sustainable development initiatives that address their unique needs and challenges.</p>
                                <p className="card-text">We believe in working alongside communities, respecting their knowledge and experiences, and co-creating solutions that lead to lasting change.</p>
                                <p className="card-text">Our mission is fulfilled through collaborative partnerships, innovative approaches, and a deep commitment to equity and inclusion.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">
                                    <i className="fas fa-eye me-2"></i> Our Vision
                                </h3>
                                <p className="card-text">A world where all communities have equal access to resources and opportunities for growth, where individuals can reach their full potential regardless of their circumstances.</p>
                                <p className="card-text">We envision societies where education is accessible to all, healthcare is a right not a privilege, and development is sustainable and equitable.</p>
                                <p className="card-text">Our vision guides us toward creating a more just and compassionate world for current and future generations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;