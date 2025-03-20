import Footer from "@/componentes/Footer";
import BannerEmergencia from "@/componentes/Banner-emergencia";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <BannerEmergencia />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
