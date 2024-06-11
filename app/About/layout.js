

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        welcome to about page{children}</body>
    </html>
  );
}
