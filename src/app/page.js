'use client'
import { useEffect, useState } from 'react';
import { Loader } from '@/components/loader/loader'
import { Game } from '@/components/game/game'
import { ErrorMessage } from '@/components/error-message/errorMessage'

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        locale: 'fr-FR'
      }).toString()
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        setError(true);
      });
  }, []);

  if (!data && !error) {return <Loader />}
  return (
    <>
      {error == true ? <ErrorMessage /> : < Game word={data.word} />}
    </>
  )
}