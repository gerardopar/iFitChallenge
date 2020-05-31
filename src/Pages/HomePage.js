// importing modules
import React from 'react';
// importing components
import Hero from '../components/Hero/Hero';
import MediaSlider from '../components/MediaSlider/MediaSlider';
import DesktopLibrary from '../components/DesktopLibrary/DesktopLibrary';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import EquipmentList from '../components/Equipment/EquipmentList';
import Footer from '../components/Footer/Footer';

const HomePage = () => (
    <div>
        <Hero />
        <MediaSlider />
        <DesktopLibrary />
        <SectionTitle />
        <EquipmentList />
        <Footer />
    </div>
);

export default HomePage;
