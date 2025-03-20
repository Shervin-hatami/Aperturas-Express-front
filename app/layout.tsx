import Footer from "@/componentes/Footer";
import NavBar from "@/componentes/NavBar";
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
        <NavBar />
        <div className="pt-20 ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
