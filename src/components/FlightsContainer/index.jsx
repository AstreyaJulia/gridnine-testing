import Button from "../Button";
import FlightCard from "../FlightCard";
import {getAmount} from "../../utils/textUtils";
import TextInput from "../forms/TextInput";

const FlightsContainer = ({data, flightsOnPage, setFlightsOnPage}) => {
    return (
        <div className="flex flex-col w-full h-screen">

            {/* <aside className="w-80 bg-white h-full">
                <div className="w-full grid grid-cols-8 items-center gap-x-4">
                    <TextInput label="От" name="minPrice" type="number"/>
                    <TextInput label="До" name="maxPrice" type="number"/>
                </div>
            </aside> */}

            <main className="mt-24 max-w-6xl w-full my-0 mx-auto flex flex-col py-6 gap-5 items-center overflow-y-auto">
                <div className="w-full flex gap-x-6">
                    <h3 className="text-xl font-bold text-gray-900">{`${flightsOnPage} ${getAmount(flightsOnPage, {
                        single: 'предложение',
                        multi: 'предложения',
                        count: "предложений"
                    })}`}</h3>
                </div>

                <div className="flex flex-col gap-y-5 w-full">
                    {data.slice(0, flightsOnPage).map((ticket, key) => <FlightCard key={key} ticket={ticket}/>)}
                </div>
                <Button label="Показать ещё" className="mt-3"
                        onClick={() => parseInt(flightsOnPage, 10) + 12 < data.length ? setFlightsOnPage(parseInt(flightsOnPage, 10) + 12) : setFlightsOnPage(data.length)}/>
            </main>
        </div>
    )
}

export default FlightsContainer