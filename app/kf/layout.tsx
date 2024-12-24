import { Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
// import Nav from "./home/nav";
import Navbar from "./navigation/component/Navbar";

const lora = Lora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className + " min-h-screen flex flex-col"}>
        <Toaster />
        <div className="bg-[#004170]">
          <Navbar />
          {children}

        </div>
      </body>
    </html>
  );
}
