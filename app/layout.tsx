import type { Metadata } from 'next'
import '@/styles/tailwind.css'
import { Header } from '@/components'
import { iranYekan } from '@/styles/fonts'
import { cn } from '@/utils'
import { MuiThemeProvider } from '@/context/mui-theme'
import { QueryProvider } from '@/context/react-query'

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
      <body className={cn(iranYekan.className, 'text-common-black m-0')}>
        <MuiThemeProvider>
          <QueryProvider>
            <div className="flex flex-col h-screen">
              <Header title="لیست سوالات" />
              <main className="grow bg-secondary-lightest py-8 px-14">
                {children}
              </main>
            </div>
          </QueryProvider>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
