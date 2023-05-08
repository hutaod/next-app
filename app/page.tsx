import Image from 'next/image'
import ClientComp from './ClientComp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientComp data={123} />
    </main>
  )
}
