import Image from 'next/image'
import React from 'react'

const ErrorFetch = () => {
  return (
    <div className='flex justify-center flex-col'>
         <Image src='../assets/igle.webp' alt="" width={300} height={300}/>
        <h2>Запрашиваемая страница временно не доступна. Попробуйте обновить или зайти позже</h2>
        <h2>The page you looking for is temporarily unavailable. Please try again later</h2>
    </div>
  )
}

export default ErrorFetch