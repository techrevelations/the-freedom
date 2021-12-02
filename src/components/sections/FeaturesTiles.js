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
const FeaturesTiles = ({
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
    title: 'Orgulho de ser diferente',
    paragraph: 'Apoiamos pais, educadores  e familiares que valorizam a comunidade, a independência e a aprendizagem através do jogo. Para dar à criança confiança, habilidades e recursos que eles precisam para terem sucesso. Experimente uma de nossas sessões semanais ou nos envie uma mensagem para saber mais.'
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
                  Bebês falam com Sinais
                    </h4>
                  <p className="m-0 text-sm">
                  Cientificamente comprovado que aumenta a inteligência do bebê a curto e a longo prazo,  o uso da linguagem de sinais com o bebê cria um vínculo único de compreensão entre você e seu bebê
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
                  Pequenos Exploradores
                    </h4>
                  <p className="m-0 text-sm">
                  Descubra as maravilhas e belezas do nosso ambiente natural através da exploração guiada, atividades e jogos. Muitas aventuras e surpresas do ar livre
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
                  Inglês para Negócios
                    </h4>
                  <p className="m-0 text-sm">
                  Aulas particulares de inglês com professor nativo. Adaptadas para atender seus objetivos pessoais e profissionais
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
                  Pequena Universidade
                    </h4>
                  <p className="m-0 text-sm">
                  Histórias cativantes em inglês a cada semana ajudam as crianças a interagir, aprender e a amar a leitura e desenvolver as competências essenciais de literacia na primeira infância
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
                  Massagem de Bebê
                    </h4>
                  <p className="m-0 text-sm">
                  Desperte os sentidos de seu bebê com uma gama única de descobertas sensoriais. Aprenda a acalmar as rotinas de dormir através de uma massagem
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
                  Hora de Cantar
                    </h4>
                  <p className="m-0 text-sm">
                  Canções infantis em Inglês para cantar, dançar e brincar. Atividades repletas de diversão que ajudam no desenvolvimento da fala, habilidades auditivas e aquisição linguística
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;