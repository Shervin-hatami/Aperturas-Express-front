import Footer from "@/componentes/Footer";
import BannerEmergencia from "@/componentes/Banner-emergencia";
import "./globals.css";
import GridBackground from "@/componentes/GridBackground";
import DotBackground from "@/componentes/DotBackground";
import Navbar from "@/componentes/NavBar";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen max-w-auto">
        <BannerEmergencia />
        <div className="pt-10 max-w-auto mx-auto w-full min-h-screen">
          <DotBackground className="min-h-screen">
             {children}
          </DotBackground>
         </div>
        <div className=" z-20"> 
        <Footer />
        </div>
      </body>
    </html>
  );
}
