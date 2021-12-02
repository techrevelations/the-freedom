import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Feat_Image1 from './../../assets/images/group2.jpg';
import Feat_Image2 from './../../assets/images/baby3.jpg';
import Feat_Image3 from './../../assets/images/fun2.jpg';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplitEng = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Learning Through Play',
    paragraph: 'Learners achieve better outcomes through focussed activities designed to be joyful, imaginative and playful. These help to develop social and cognitive skills, emotional maturity and gain the self confidence required to engage in new experiences and environments'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                A Shared Experience
                  </div>
                <h3 className="mt-0 mb-12">
                Transformative Parenting
                  </h3>
                <p className="m-0">
                The relationship we create with our children now will be the foundation for our relationship with them as adults. Classes help you to engage in your child's development inside and out of the class.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={Feat_Image1}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                A Multidisciplinary Approach
                  </div>
                <h3 className="mt-0 mb-12">
                Connect and Communicate
                  </h3>
                <p className="m-0">
                  Early exposure to language learning helps you to understand your child's needs, thoughts and ideas.
                  Classes assist in building confidence and stimulating their emotional and intellectual development.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={Feat_Image2}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  An Art And A Science
                  </div>
                <h3 className="mt-0 mb-12">
                  Excel at Anything
                  </h3>
                <p className="m-0">
                  Mastering a skill requires determination, resilience, self motivation, concentration and confidence. Based on the latest scientific information and international methods, classes are uniquely designed to nurture the passion for learning.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={Feat_Image3}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplitEng.propTypes = propTypes;
FeaturesSplitEng.defaultProps = defaultProps;

export default FeaturesSplitEng;