import React from 'react';
// import sections
// import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import Contact from '../components/sections/Contact';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import { Link } from "react-router-dom";

const About = () => {

  return (
    <Link to="/about">
      {/* <Hero className="illustration-section-01" /> */}
      {/* <FeaturesTiles /> */}
      <Contact invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </Link>
  );
}

export default About;