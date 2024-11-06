import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
import { InteractiveInvertedCurvedLine } from "./components/InteractiveCurvedLine";

export const metadata = {
  title: "FEMMECRAFT Podcast",
  description: "Empowering BIPOC women",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>

        <InteractiveInvertedCurvedLine className="hidden md:block" />
      </body>
    </html>
  );
}
