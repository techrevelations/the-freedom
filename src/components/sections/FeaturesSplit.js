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

const FeaturesSplit = ({
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
    title: 'Aprendendo Brincando',
    paragraph: 'Os alunos conseguem melhores resultados através de atividades projetadas para serem alegres, imaginativas e lúdicas. Elas ajudam a desenvolver habilidades sociais e cognitivas, maturidade emocional e ganhar a autoconfiança necessária para se engajar em novas atividades e novos ambientes.'
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
                Parentalidade Generativa
                  </div>
                <h3 className="mt-0 mb-12">
                Compartilhando Experiencias
                  </h3>
                <p className="m-0">
                A relação que criamos com nossos filhos agora será a base para nossa relação com eles quando adultos. As aulas ajudam você a se engajar no desenvolvimento do seu filho dentro e fora da classe.

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
                Abordagem Multidisciplinar
                  </div>
                <h3 className="mt-0 mb-12">
                Conexão e Comunicação

                  </h3>
                <p className="m-0">
                A exposição precoce ao aprendizado de idiomas ajuda você a entender as necessidades, pensamentos e ideias do seu filho. As aulas auxiliam a criar confiança na criança e no estímulo do seu desenvolvimento emocional e intelectual.
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
                Uma Arte e Uma Ciência
                  </div>
                <h3 className="mt-0 mb-12">
                Sobressaia-se No Que Desejar
                  </h3>
                <p className="m-0">
                Dominar uma habilidade requer determinação, resiliência, auto motivação, concentração e confiança. Com base nas mais recentes informações científicas e métodos internacionais, as aulas são projetadas exclusivamente para nutrir a paixão pela aprendizagem.
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

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;