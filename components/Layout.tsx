import { Header } from './etc/Header/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="full-screen overflow-auto no-scrollbar bg-[#EFEFE8]">
      <Header />
      {children}
    </main>
  )
}
