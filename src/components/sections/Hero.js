import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Placeholder from './../../assets/images/video-placeholder.jpg';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              The Freedom <span className="text-color-primary">Sanctuary</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              The Freedom Sanctuary é um espaço educativo dedicado às famílias de Búzios. Oferecemos aulas semanais, meetups, baby groups, terapias entre outros. Temos como objetivo fortalecer a conexão entre pais e filhos e possibilitar que cada criança atinja seu maior potencial cognitivo e emocional para crescerem com auto confiança, autonomia e auto disciplina.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup >
                  
                      <Button tag="a" color="primary" wideMobile
                        href="https://wa.me/5521998442012?text=I'm%20inquiring%20about%20the%20classes%20listed%20on%20your%20website"
                      >
                    WhatsApp
                    </Button>
               
              {/* <div wideMobile> */}
                      {/* <Link to="eng" > */}
                    <Button tag="a" color="dark" wideMobile
                  href="/eng"
                      >
                  English Site
                    </Button>
                      {/* </Link> */}
                {/* </div> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/624482250?h=f04fcde7d5;app_id=58479"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={Placeholder}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/624482250?h=f04fcde7d5;app_id=58479"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;