import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <h5>ARTCF</h5>
                        <p>Empowering women through sustainable development.</p>
                        <img src="https://via.placeholder.com/150x50?text=ARTCF+Logo" alt="ARTCF Logo" className="img-fluid mt-2" style={{ maxWidth: '150px' }} />
                    </div>
                    <div className="col-lg-3 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="index.html" className="text-white">Home</a></li>
                            <li className="mb-2"><a href="about.html" className="text-white">About Us</a></li>
                            <li className="mb-2"><a href="programs.html" className="text-white">Our Programs</a></li>
                            <li className="mb-2"><a href="events.html" className="text-white">Events</a></li>
                            <li className="mb-2"><a href="contact.html" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <h5>Contact Us</h5>
                        <address>
                            <p><i className="fas fa-map-marker-alt me-2"></i> 123 NGO Street, City, Country</p>
                            <p><i className="fas fa-phone me-2"></i> +1 (123) 456-7890</p>
                            <p><i className="fas fa-envelope me-2"></i> info@artcf.org</p>
                        </address>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons mt-3">
                            <a href="#" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white me-2"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-white me-2"><i className="fab fa-youtube"></i></a>
                        </div>
                        <div className="mt-4">
                            <h6>Subscribe to Newsletter</h6>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Your email" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; 2023 ARTCF. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0">
                            <a href="#" className="text-white me-3">Privacy Policy</a>
                            <a href="#" className="text-white">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;