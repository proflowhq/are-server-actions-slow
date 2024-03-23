import { Button } from './Button'

export const runtime = 'edge'
export const preferredRegion = ['fra1']
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-xl font-medium">What&apos;s your server response time?</h1>
        <br />
        <Button />
        <br />
        <br />
        <small className="text-sm">(Check your network requests...)</small>
      </div>
    </main>
  )
}
