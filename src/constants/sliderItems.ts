// @ts-ignore
import Nature from '@/images/nature.png';
// @ts-ignore
import ExgeoSVG from '@/images/exgeo.svg';

export enum EImageSlug {
  Nature,
  Logos,
}

export interface IItems {
  slug: EImageSlug;
  title: string;
  description: string;
  imageSmall: string;
  imageMedium: string;
  imageLarge: string;
}

export const ITEMS: IItems[] = [
  {
    slug: EImageSlug.Nature,
    title: 'Nature',
    description: 'UI/UX',
    imageSmall: Nature,
    imageMedium: Nature,
    imageLarge: Nature,
  },
  {
    slug: EImageSlug.Logos,
    title: 'Logos',
    description: 'Graphic Design',
    imageSmall: ExgeoSVG,
    imageMedium: ExgeoSVG,
    imageLarge: ExgeoSVG,
  },
  {
    slug: EImageSlug.Nature,
    title: 'Nature',
    description: 'UI/UX',
    imageSmall: Nature,
    imageMedium: Nature,
    imageLarge: Nature,
  },
  {
    slug: EImageSlug.Logos,
    title: 'Logos',
    description: 'Graphic Design',
    imageSmall: ExgeoSVG,
    imageMedium: ExgeoSVG,
    imageLarge: ExgeoSVG,
  },
];
