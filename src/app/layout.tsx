import './globals.css';
import { Outfit } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import Footer component

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'My Next.js Project',
  description: 'A website using Next.js and Bootstrap',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="container mt-5">
          {children}
          
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
