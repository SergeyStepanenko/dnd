// @ts-ignore
import Nature from '@/images/nature.png';
// @ts-ignore
import Exgeo1x from '@/images/exgeo-1x.png';
// @ts-ignore
import Exgeo2x from '@/images/exgeo-2x.png';
// @ts-ignore
import Exgeo3x from '@/images/exgeo-3x.png';

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
    imageSmall: Exgeo1x,
    imageMedium: Exgeo2x,
    imageLarge: Exgeo3x,
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
    imageSmall: Exgeo1x,
    imageMedium: Exgeo2x,
    imageLarge: Exgeo3x,
  },
];
