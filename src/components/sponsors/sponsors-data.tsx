import LOGO_ANTIDOTE from './img/2025/Logo-Antidote.svg';
import LOGO_BNC from './img/2025/Logo-BNC.png';
import LOGO_IRUI from './img/2025/Logo-IRUI.png';
import LOGO_PACTOLE from './img/2025/Logo-Pactole.png';
import LOGO_POLY from './img/2025/Logo-Poly.png';
import LOGO_PROPOLYS from './img/2025/Logo-Propolys.png';
import LOGO_TAILED from './img/2025/Logo-Tailed.png';
import LOGO_VIDENS from './img/2025/Logo-Videns.jpg';
import LOGO_IVADO from './img/ivado.png';
import LOGO_SEMLA from './img/semla_logo.png';

export interface Sponsor {
  name: string;
  imgPath: string;
  website?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm';
}

export const SPONSORS_2025: Sponsor[] = [
  { name: 'IVADO', imgPath: LOGO_IVADO, website: 'https://ivado.ca/en/', size: 'xl' },
  { name: 'SEMLA', imgPath: LOGO_SEMLA, website: 'https://semla.quebec/en/', size: 'xl' },
  { name: 'Polytechnique Montréal', imgPath: LOGO_POLY, size: 'xl' },
  { name: 'Videns', imgPath: LOGO_VIDENS, size: 'lg' },
  { name: 'IRUI', imgPath: LOGO_IRUI, size: 'md' },
  { name: 'Banque Nationale', imgPath: LOGO_BNC, size: 'sm' },
  { name: 'Pactole', imgPath: LOGO_PACTOLE, size: 'sm' },
  { name: 'Druide', imgPath: LOGO_ANTIDOTE, size: 'sm' },
  { name: 'Tail\'ed', imgPath: LOGO_TAILED, size: 'sm' },
  { name: 'Propolys', imgPath: LOGO_PROPOLYS, size: 'sm' },
];
