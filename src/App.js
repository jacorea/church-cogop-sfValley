import React from 'react';

import HomePage from './pages/homePage.component';
import AboutUsPage from './pages/aboutUsPage.component';
import ContactPage from './pages/contactPage.component';
import LocationPage from './pages/locationPage.component';
import OurTeamPage from './pages/ourTeamPage.component';
import Navbar from './bootstrapComponents/navbar/Navbar.component';
import JumbotronComponent from './bootstrapComponents/jumbotron/Jumbotron.component';



function App() {
  return (
    <div>
      <Navbar />
      <JumbotronComponent />
    </div>
  );
}

export default App;
