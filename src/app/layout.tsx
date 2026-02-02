import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conte Cargo Admin",
  description: "Administration du site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}