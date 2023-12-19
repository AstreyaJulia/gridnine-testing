import FlightElement from "./FlightElement";
import Button from "../Button";

const FlightCard = ({ticket}) => {

    return (
        <a className="w-full  grid grid-cols-4 items-center bg-white rounded-lg shadow hover:shadow-lg divide-x divide-gray-200">
            <div className="flex col-span-3 px-5 py-2 flex-col divide-y divide-gray-200">
                {ticket.flight.legs.map((item, key)=><FlightElement key={key} item={item} carrier={ticket.flight.carrier.caption} />)}
            </div>
            <div className="flex flex-col w-full h-full p-5">
                <p className="text-3xl text-gray-900 font-bold text-right">{`${ticket.flight.price.total.amount } ₽`}</p>
                <p className="text-sm text-gray-900 text-right">Без багажа, за одного</p>
                <Button label="Выбрать" variant="primary" className="mt-3"/>
            </div>
        </a>
    )
}

export default FlightCard