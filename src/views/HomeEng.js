import React from 'react';
// import sections
import HeaderEng from '../components/layout/HeaderEng';
import HeroEng from '../components/sections/HeroEng';
import FeaturesTilesEng from '../components/sections/FeaturesTilesEng';
import FeaturesSplitEng from '../components/sections/FeaturesSplitEng';
import TestimonialEng from '../components/sections/TestimonialEng';
import CtaEng from '../components/sections/CtaEng';


const HomeEng = () => {

  return (
    <>
      <HeaderEng navPosition="right" className="reveal-from-bottom" />
      <HeroEng className="illustration-section-01" />
      <FeaturesTilesEng />
      <FeaturesSplitEng invertMobile topDivider imageFill className="illustration-section-02" />
      <TestimonialEng topDivider />
      <CtaEng split />
  
    </>
  );
}

export default HomeEng;