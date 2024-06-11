import "./globals.css";
import MyContext from "@/Helper/Context";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
