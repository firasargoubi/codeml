import LOGO_IVADO from '../sponsors/img/ivado.png';
import LOGO_SEMLA from '../sponsors/img/semla_logo.png';
import LOGO_ANTIDOTE from './img/2025/Logo-Antidote.svg';
import LOGO_BNC from './img/2025/Logo-BNC.png';
import LOGO_IRUI from './img/2025/Logo-IRUI.png';
import LOGO_PACTOLE from './img/2025/Logo-Pactole.png';
import LOGO_POLY from './img/2025/Logo-Poly.png';
import LOGO_PROPOLYS from './img/2025/Logo-Propolys.png';
import LOGO_TAILED from './img/2025/Logo-Tailed.png';
import LOGO_VIDENS from './img/2025/Logo-Videns.jpg';

export interface Sponsor {
  name: string;
  imgPath: string;
  website?: string;
}

export const SPONSORS_2025: Sponsor[] = [
  {
    name: 'IVADO',
    imgPath: LOGO_IVADO,
    website: 'https://ivado.ca/en/',
  },
  {
    name: 'SEMLA',
    imgPath: LOGO_SEMLA,
    website: 'https://semla.quebec/en/',
  },
  {
    name: 'Antidote',
    imgPath: LOGO_ANTIDOTE,
  },
  {
    name: 'Banque Nationale',
    imgPath: LOGO_BNC,
  },
  {
    name: 'IRUI',
    imgPath: LOGO_IRUI,
  },
  {
    name: 'Pactole',
    imgPath: LOGO_PACTOLE,
  },
  {
    name: 'Polytechnique Montréal',
    imgPath: LOGO_POLY,
  },
  {
    name: 'Propolys',
    imgPath: LOGO_PROPOLYS,
  },
  {
    name: 'Tailed',
    imgPath: LOGO_TAILED,
  },
  {
    name: 'Videns',
    imgPath: LOGO_VIDENS,
  },
];
