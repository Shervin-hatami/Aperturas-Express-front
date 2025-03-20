import Footer from "@/componentes/Footer";
import NavBar from "@/componentes/NavBar";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <div className="pt-35 px-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
