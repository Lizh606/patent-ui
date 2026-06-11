import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Patent EvidenceFlow | workbench Dashboard',
  description: 'Attorneys-review-ready patent risk assess workpapers and evidence flows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="bg-bg-page text-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
