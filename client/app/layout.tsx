import type { Metadata } from 'next';
import './app.scss';
import AppProvider from '@/components/AppProvider/AppProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
export const metadata: Metadata = {
  title: 'Schrek',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app">
        <Navbar/>
          {children}
          <Footer/>
          </div>
      </body>
    </html>
  );
}
