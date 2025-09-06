import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContainerHeading from '../common/container-heading';
import './ressources.scss';

type Link = {
  link: string;
  helperText: string;
};

const Ressources = () => {
  const { t } = useTranslation();
  const ressourcesLinks: Link[] = t('Ressources.links', {
    returnObjects: true,
  });
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="ressources">
      <ContainerHeading title="Ressources" />
      <div>
        <p className="ressources-text">{t('Ressources.text')}</p>
        <Slider {...settings} className="ressources-slider">
          {ressourcesLinks.map((item, index) => (
            <div key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="resource-card">{item.helperText}</div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ressources;
