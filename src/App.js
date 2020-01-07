import React from 'react';

import HomePage from './pages/homePage.component';
import AboutUsPage from './pages/aboutUsPage.component';
import ContactPage from './pages/contactPage.component';
import LocationPage from './pages/locationPage.component';
import OurTeamPage from './pages/ourTeamPage.component';
import Navbar from './bootstrapComponents/Navbar';
import JumbotronComponent from './bootstrapComponents/Jumbotron';



function App() {
  return (
    <div>
      <Navbar />
      <JumbotronComponent />
    </div>
  );
}

export default App;
