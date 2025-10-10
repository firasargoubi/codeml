import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';
import ContainerHeading from '../common/container-heading';
import { Sponsor, SPONSORS_2025 } from './sponsors-data';
import './sponsors.scss';

const generateLogos = (xs: number, md: number, logos: Sponsor[]) => (
    <Row xs={xs} md={md} className="parters-center">
        {logos.map((sponsor: Sponsor, index: number) => {
            const key = `${sponsor.name}-${index}`;
            const sizeClass = sponsor.size ? `size-${sponsor.size}` : 'size-md';
            return (
                <Col key={key} className={`center-logos ${sizeClass}`}>
                    {sponsor.website ? (
                        <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={sponsor.name}
                        >
                            <img src={sponsor.imgPath} alt={sponsor.name} loading="lazy" />
                        </a>
                    ) : (
                        <img src={sponsor.imgPath} alt={sponsor.name} loading="lazy" />
                    )}
                </Col>
            );
        })}
    </Row>
);

const Partners: FunctionComponent = () => {
    const { t } = useTranslation();
    const sponsors = SPONSORS_2025;
    const hasSponsors = sponsors.length > 0;

    return (
        <div className="partners-section" id="partners">
            <ContainerHeading title={t('Partners.title')} />
            <div className="parters-center">
                <div className="partners-logos-container">
                    {hasSponsors && generateLogos(2, 6, sponsors)}
                    {!hasSponsors && (
                        <div className="partners-overlay">{t('Partners.comingSoon')}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Partners;
