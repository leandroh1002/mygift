import asd from "../assets/Icons/gift.png"

function Presentacion() {
  return (
    <div>
      <div className="mt-11 mb-11">
        <h1>🎁 My Gifts</h1>
      </div>
      <div className="flex justify-center mb-10 flex-col items-center">
      {/* <div className="w-[1360px] flex justify-center mb-10 flex-col items-center"> */}
        <div className="mb-11">
        {/* <div className="mr-32"> */}
          <img className="w-[350px] h-[350px] bg-slate-400 rounded-full" src={asd} alt="" />
        </div>
        <div className="max-w-[632px] flex flex-col text-center">
          <h2 className="mb-6 text-3xl">Encuentra el Regalo Perfecto</h2>
          <p className="mb-6">En Regalos Mágicos, entendemos que cada ocasión especial merece un regalo único y memorable. Nuestra cuidadosa selección de presentes está diseñada para sorprender y emocionar, convirtiendo cada celebración en un momento inolvidable. </p>
          <div className="flex flex-col items-center">
          <ol className="mb-6 text-left">
            <li>❤ Regalos personalizados para cada ocasión</li>
            <li>⭐ Amplia variedad de opciones exclusivas</li>
            <li>🖊 Experiencias únicas y memorables</li>
          </ol>
          <button className='bg-black text-white rounded-md text-sm px-4 py-2 w-40 h-12'>Ver detalles</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentacion