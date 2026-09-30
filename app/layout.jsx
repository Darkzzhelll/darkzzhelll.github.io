import './globals.css';

export const metadata = {
  metadataBase: new URL('https://darkzzhelll.github.io'),
  title: 'Ryan Sutawijaya — UI/UX Designer',
  description: 'Ryan Sutawijaya — UI/UX Designer yang mengeksplorasi desain, front-end, dan vibe coding. Sebuah profil, cara berpikir, dan ruang untuk karya yang terus bertumbuh.',
  openGraph: {
    title: 'Ryan Sutawijaya — UI/UX Designer',
    description: 'Mendesain pengalaman yang terasa manusiawi, sambil terus belajar membangunnya.',
    type: 'website',
    images: ['/assets/ryan-portrait.png'],
  },
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="id"><body className="antialiased">{children}</body></html>;
}
