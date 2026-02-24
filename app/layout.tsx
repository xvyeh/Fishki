import './globals.css';

export const metadata = {
  title: "Fishki",
  description: "Learn German with flashcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}