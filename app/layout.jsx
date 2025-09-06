import './globals.css'

export const metadata = {
  title: 'Tales of the Cake',
  description: 'Handcrafted cakes and biscuits'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
