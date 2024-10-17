import { Inter, Lusitana,Dancing_Script,Amatic_SC,Josefin_Slab } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const dancing = Dancing_Script({
  weight:['400','500','600'],
  display: 'swap',
  subsets:['latin']
});

export const amatic = Amatic_SC({
  weight:'700',
  subsets:['latin']
});

export const josefin = Josefin_Slab({
  weight:'500',
  subsets:['latin']
});