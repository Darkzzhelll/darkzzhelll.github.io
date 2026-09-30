import './globals.css';

export const metadata = {
  metadataBase: new URL('https://darkzzhelll.github.io'),
  title: 'Ryan Sutawijaya — UI/UX Designer',
  description: 'Ryan Sutawijaya adalah UI/UX Designer yang sedang belajar front-end, API, dan vibe coding. Lihat profil, proyek, dan cara menghubunginya.',
  openGraph: {
    title: 'Ryan Sutawijaya — UI/UX Designer',
    description: 'Website profil Ryan Sutawijaya: UI/UX Designer yang sedang belajar membuat web.',
    type: 'website',
    images: ['/assets/ryan-portrait.png'],
  },
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="id"><body className="antialiased">{children}</body></html>;
}
