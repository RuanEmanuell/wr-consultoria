import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WR Consultoria', 
  description: 'Melhore os resultados da sua empresa agora, de onde você estiver.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-default.png" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;