
import { Montserrat } from 'next/font/google'
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import type { Metadata } from 'next';

const montserrat = Montserrat({
  subsets:["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Antigravity | Immersive Experience',
  description: 'A cinematic scroll journey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <SmoothScroll>
          <Loader />
          <Header />
          <button className='fixed z-[9999] right-[-60px] top-[40%] translate-x-[-50%] px-[30px] py-[10px] rotate-[-90deg] origin-right bg-[#1B4485] cursor-pointer rounded rounded-sm'>Enquire Now</button>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
