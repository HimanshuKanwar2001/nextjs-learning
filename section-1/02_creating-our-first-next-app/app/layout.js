export const metadata = {
  title: {
    default:"Techincal Agency",
    template:"%s | Techincal Agency",
  },
  description: "Hello World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 antialiased`}>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
