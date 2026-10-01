import './globals.css';

export const metadata = {
  metadataBase: new URL('https://darkzzhelll.github.io'),
  title: 'Ryan Sutawijaya — Desain, Produk & Vibe Coding',
  description: 'Portofolio Ryan Sutawijaya: desain produk, koordinasi, front-end, vibe coding, cerita proyek, dan CV.',
  openGraph: {
    title: 'Ryan Sutawijaya — Desain, Produk & Vibe Coding',
    description: 'Pengalaman, cerita proyek, dan CV Ryan Sutawijaya.',
    type: 'website',
    images: ['/assets/ryan-portrait.png'],
  },
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="id"><body className="antialiased">{children}</body></html>;
}
