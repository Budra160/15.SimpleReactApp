import {Button} from "./button.jsx"

export function Card({proizvod, onDelete, deleteFrom})
{
    return (
        <div className="card" >
            <h3>
                {proizvod.title}
            </h3>

            <p style={{overflow:"hidden"}}>Rating: {(proizvod.rating)}...</p>
            <p>Price: {proizvod.price} $</p>
            <p>Stock: {proizvod.stock}</p>

            <Button onClick={() => {onDelete(proizvod); deleteFrom(proizvod.id);}}>Obriši</Button>
        </div>
    )
}

export default Card;


