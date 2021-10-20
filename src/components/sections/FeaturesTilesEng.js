import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Icon1 from './../../assets/images/feature-tile-icon-01.svg';
import Icon2 from './../../assets/images/feature-tile-icon-02.svg';
import Icon3 from './../../assets/images/feature-tile-icon-03.svg';
import Icon4 from './../../assets/images/feature-tile-icon-04.svg';
import Icon5 from './../../assets/images/feature-tile-icon-05.svg';
import Icon6 from './../../assets/images/feature-tile-icon-06.svg';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTilesEng = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Proud To Be Different',
    paragraph: 'We support parents, practitionors and care givers who value community, independence and freedom. To give them the confidence, skill and resources they need to facilitate happy and healthy environments for our children. Try one of our weekly sessions or message us to find out more.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon1}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Baby Signing
                    </h4>
                  <p className="m-0 text-sm">
                    Scientifically proven to increase intelligence. Baby sign language creates a unique bond and shared understanding between you and your baby.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon2}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Forest School
                    </h4>
                  <p className="m-0 text-sm">
                    Discover the wonders and beauty of our natural environment through guided exploration, activities and games. Fresh air adventures and surprises every time.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon3}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Baby Yoga
                    </h4>
                  <p className="m-0 text-sm">
                    Exercise together with your baby. Peaceful stretching which supports post natal recovery, core strength building and lifts your energy through the whole day. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon4}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tiny Talk
                    </h4>
                  <p className="m-0 text-sm">
                    Learn English, German or Spanish through role playing, slap stick fun and games. Inspire children with sing songs and nursary rhymes, a little bit of everything really.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon5}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sensory Baby Massage
                    </h4>
                  <p className="m-0 text-sm">
                    Awaken your babies senses with a unique range of sensory pleasures. Learn calming bedtime routines through the joys of practicing massage. Guarenteed to make you smile.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon6}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Messy Play
                    </h4>
                  <p className="m-0 text-sm">
                    A space to let kids go wild without the stressful cleanup. Capture moments of their creative flair as they explore their senses and imaginations. 
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTilesEng.propTypes = propTypes;
FeaturesTilesEng.defaultProps = defaultProps;

export default FeaturesTilesEng;