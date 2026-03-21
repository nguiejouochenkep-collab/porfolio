import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Porfolio professionnel présentant mes projets et compétences',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}