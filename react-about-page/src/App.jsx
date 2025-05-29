import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import OurStory from './components/OurStory';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import LeadershipTeam from './components/LeadershipTeam';
import OurPartners from './components/OurPartners';
import Reports from './components/Reports';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navigation />
            <Header />
            <OurStory />
            <MissionVision />
            <CoreValues />
            <LeadershipTeam />
            <OurPartners />
            <Reports />
            <Footer />
        </div>
    );
}

export default App;