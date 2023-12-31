import '@/app/global.css';
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Devfinder',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><main className="container">{children}</main></body>
    </html>
  )
}
