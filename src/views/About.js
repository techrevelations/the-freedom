import React from 'react';
// import sections
// import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import Contact from '../components/sections/Contact';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const About = () => {

  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      {/* <FeaturesTiles /> */}
      <Contact invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default About;