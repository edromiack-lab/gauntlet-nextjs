import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.thesalesgauntlet.co'),
  title: {
    default: 'The Sales Gauntlet | Real Leasing Training Under Real Pressure',
    template: '%s | The Sales Gauntlet',
  },
  description:
    'Nine training operations for leasing agents. Real timer pressure. Fair housing compliance. The Boiler Room flagship differentiator with countdown timers and prospect hangups. Built by leasing professionals for leasing professionals.',
  keywords: [
    'leasing training',
    'real estate training',
    'fair housing training',
    'apartment leasing',
    'property management training',
    'leasing agent',
    'sales training',
    'leasing gauntlet',
  ],
  authors: [{ name: 'Eames Dromiack' }],
  creator: 'The Sales Gauntlet',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thesalesgauntlet.co',
    siteName: 'The Sales Gauntlet',
    title: 'The Sales Gauntlet | Real Leasing Training Under Real Pressure',
    description:
      'Nine training operations. Real timer pressure. Fair housing compliance built in. The only leasing training with a live countdown timer and real prospect hangups.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Sales Gauntlet — Real Leasing Training Under Real Pressure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sales Gauntlet',
    description:
      'Real leasing training under real pressure. Nine operations. Timer-based scenarios. Fair housing baked in.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="gauntlet-site">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
