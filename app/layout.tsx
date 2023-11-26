import type { Metadata } from 'next'
import '@/styles/tailwind.css'
import { Header, MuiThemeProvider } from '@/components'
import { iranYekan } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'QA',
  description: 'Question/Answering task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranYekan.className}>
        <MuiThemeProvider>
          <div className="flex flex-col h-screen">
            <Header title="لیست سوالات" />
            <main className="grow bg-secondary-lightest py-8 px-14">
              {children}
            </main>
          </div>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
