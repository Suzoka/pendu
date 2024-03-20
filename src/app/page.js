import { Game } from '@/components/game/game';
export const dynamic = 'force-dynamic';

const getDatas = async () => {
  const res = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      locale: 'fr-FR'
    }).toString()
    })

  if (res.ok) {
    return res.json()
  }

  throw new Error('Erreur')

}

export default async function Home() {
  const data = await getDatas()

  return (
    < Game word={data.word} />
  )
}