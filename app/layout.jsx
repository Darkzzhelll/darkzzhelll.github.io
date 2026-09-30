import './globals.css';

export const metadata = {
  metadataBase: new URL('https://darkzzhelll.github.io'),
  title: 'Ryan Sutawijaya — UI/UX Designer',
  description: 'Portofolio Ryan Sutawijaya, UI/UX Designer di Risada Damai Sejahtera. Pengalaman, proyek, dan CV dalam satu tempat.',
  openGraph: {
    title: 'Ryan Sutawijaya — UI/UX Designer',
    description: 'Pengalaman UI/UX, proyek pilihan, dan CV Ryan Sutawijaya.',
    type: 'website',
    images: ['/assets/ryan-portrait.png'],
  },
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="id"><body className="antialiased">{children}</body></html>;
}
