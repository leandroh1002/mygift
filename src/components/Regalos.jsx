import Cards from "./Cards"
import gift from "../assets/list/gift.json"

function Regalos() {
  return (
    <div className="flex justify-center flex-wrap">
      {gift.map((gifts) => (
        <Cards
          key={gifts.id}
          id={gifts.id}
          nombre={gifts.Nombre}
          shortDescription={gifts.ShortDescription}
          price={gifts.Price}
          image={gifts.Image}
        />
      ))}
    </div>
  )
}

export default Regalos