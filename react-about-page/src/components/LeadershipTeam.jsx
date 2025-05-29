import React from 'react';

const LeadershipTeam = () => {
    const teamMembers = [
        {
            name: "Dr. Emily Chen",
            title: "Founder & Executive Director",
            description: "With over 20 years of experience in international development, Dr. Chen leads our strategic vision.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Michael Rodriguez",
            title: "Director of Programs",
            description: "Michael oversees the development and implementation of all our programs worldwide.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "Sarah Okonkwo",
            title: "Chief Financial Officer",
            description: "Sarah ensures financial transparency and responsible stewardship of our resources.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            name: "David Patel",
            title: "Director of Partnerships",
            description: "David builds and maintains our global network of partners and supporters.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ];

    return (
        <section className="py-5">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="section-heading">Our Leadership Team</h2>
                        <p className="text-muted">Meet the dedicated individuals guiding our organization.</p>
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <img src={member.image} className="card-img-top team-member-img" alt={member.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="text-muted">{member.title}</p>
                                    <p className="card-text">{member.description}</p>
                                    <div className="social-icons mt-3">
                                        <a href="#" className="text-primary me-2"><i className="fab fa-linkedin"></i></a>
                                        <a href="#" className="text-primary"><i className="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <a href="#" className="btn btn-outline-primary">View Full Team</a>
                </div>
            </div>
        </section>
    );
};

export default LeadershipTeam;