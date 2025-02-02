import React, { useEffect, useState } from 'react'
import gift from "../assets/list/gift.json"
import { Link, useParams } from 'react-router-dom';
import PATHROUTES from '../helpers/PathRoutes.helper';
import Cards from "./Cards"

function Details(gifts) {
  const {id} = useParams();
  const [giftDetails, setGiftDetails] = useState(null);

  useEffect(() => {
    const foundGift = gift.find(g => g.id === parseInt(id));
    setGiftDetails(foundGift);
  }, [id]);

  if (!giftDetails) {
    return <div>Gift not found</div>;
  } 

  return (
    <div className='flex justify-center flex-col items-center bg-slate-500 mb-8'>
      <div className='bg-red-400 rounded-lg'>
        <div className='flex bg-yellow-200'>
          <img className="h-5 w-5 text-gray-600" />
          <Link to={PATHROUTES.LANDING}><button>Volver</button></Link>
        </div>


        <div className='flex justify-center flex-col items-center bg-green-500 lg:flex-row'>

          <div>
            <img className='w-[525px] h-[525px] ' src={giftDetails.Image} alt="" />
          </div>


          <div className='w-[787px] h-[525px] '>
            <h2 className='text-left mb-4'>{giftDetails.Nombre}</h2>
            <p className='text-left mb-6'>{giftDetails.Description}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold">{giftDetails.Caracteristicas[0].FeatureName}</span>
                  </div>
                  <p className="text-gray-600 ml-7 text-left">{giftDetails.Caracteristicas[0].subcaracteristicas}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold">{giftDetails.Caracteristicas[1].FeatureName}</span>
                  </div>
                  <p className="text-gray-600 ml-7 text-left">{giftDetails.Caracteristicas[1].subcaracteristicas}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold">{giftDetails.Caracteristicas[2].FeatureName}</span>
                  </div>
                  <p className="text-gray-600 ml-7 text-left">{giftDetails.Caracteristicas[2].subcaracteristicas}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold">{giftDetails.Caracteristicas[3].FeatureName}</span>
                  </div>
                  <p className="text-gray-600 ml-7 text-left">{giftDetails.Caracteristicas[3].subcaracteristicas}</p>
                </div>
            </div>
            <div className='space-y-4">'>
                <div className='flex'>
                  <span className='text-3xl font-bold'>${giftDetails.Price}</span>
                </div>
                <a href={giftDetails.Link} target="_blank">
                <button className='w-full bg-black text-white hover:bg-gray-800'>Comprar</button>
                </a>
            </div>
          </div>


        </div>
      </div>
      {/* <div  className='bg-slate-600'>
        <h3>Opciones</h3>
        <div className='max-w-[1408px] max-h-[1480px]  bg-slate-400 flex flex-wrap justify-center'>
          {giftDetails.options && giftDetails.options.length > 0 && giftDetails.options.map(option => (
            <Cards 
              key={option.id}
              id={option.id}
              nombre={option.Nombre}
              shortDescription={option.ShortDescription}
              price={option.Price}
              image={option.Image}
            />
          ))}
        </div>
      </div> */}
      {/* <div className='max-w-[1408px] h-[380px] bg-orange-200'>
      </div> */}
    </div>
  )
}

export default Details