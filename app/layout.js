import { Hind_Siliguri, Poppins } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: " SkillJobs Learning",
  description: "Skill Jobs Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
