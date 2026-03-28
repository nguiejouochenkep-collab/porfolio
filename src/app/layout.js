import './globals.css';

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Porfolio professionnel présentant mes projets et compétences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
