import React from 'react';

const Reports = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="section-heading">Annual Reports & Financials</h2>
                        <p className="text-muted">We are committed to transparency and accountability.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-file-pdf text-danger mb-3" style={{ fontSize: '3rem' }}></i>
                                <h5 className="card-title">Annual Report 2022</h5>
                                <p className="card-text">Our comprehensive report detailing our activities, impact, and financial information for the year 2022.</p>
                                <a href="#" className="btn btn-outline-primary mt-3">Download PDF</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-file-pdf text-danger mb-3" style={{ fontSize: '3rem' }}></i>
                                <h5 className="card-title">Annual Report 2021</h5>
                                <p className="card-text">A detailed overview of our programs, achievements, and financial statements from 2021.</p>
                                <a href="#" className="btn btn-outline-primary mt-3">Download PDF</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-chart-line text-success mb-3" style={{ fontSize: '3rem' }}></i>
                                <h5 className="card-title">Financial Statements</h5>
                                <p className="card-text">Audited financial statements demonstrating our commitment to responsible stewardship.</p>
                                <a href="#" className="btn btn-outline-primary mt-3">View Financials</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reports;