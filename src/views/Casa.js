import React from 'react';
// import sections
import Header from '../components/layout/Header';
import HeroEng from '../components/sections/HeroEng';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';
import Contact from '../components/sections/Contact';

const Casa = () => {

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <HeroEng className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
       <Contact invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Casa;