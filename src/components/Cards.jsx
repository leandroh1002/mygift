import React from 'react'
import { Link } from 'react-router-dom'

function Cards({id, nombre,image, shortDescription, price}) {
  return (
    <div className='rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm m-2'>
      <div className='flex flex-col space-y-1.5 p-6'>
        <img className='w-full h-48 object-cover rounded-t-lg' src={image} alt="asdasd" />
        <h3 className='text-2xl font-semibold leading-none tracking-tight flex'>{nombre}</h3>
      </div>
      <div className='p-6 pt-0'>
        <p className='text-sm text-muted-foreground mb-4 flex'>{shortDescription}</p>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold'>${price}</span>
        </div>
      </div>
      <div className='flex items-center p-6 pt-0'>
        <Link to={`/detail/${id}`}>
        <button className='bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full'>Ver detalles</button></Link>
      </div>
    </div>
  )
}
 
export default Cards