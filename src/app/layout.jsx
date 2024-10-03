import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Şah Telecom",
  description: "Tv və İnternet",
  icon: "/image/logo.png", // Burada favicon'u ekledik
};

export default function RootLayout({ children }) {
  const bgStyle = {
    backgroundImage: "url('/image/bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  };

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={metadata.icon} /> {/* Logo ekleme */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`antialiased font-playfair`}>
        <div style={bgStyle}>
          <Navbar />
        </div>

        {children}
        
        <div style={bgStyle}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
