import FlightsContainer from "./components/FlightsContainer";
import mockData from "./@mock/flights.json"
import {useState} from "react";
import SearchFilters from "./components/SearchFilters";

function App() {

    const sortSettings = [
        {name: 'По возрастанию цены', sort: 'priceAsc'},
        {name: 'По убыванию цены', sort: 'priceDesc'},
        {name: 'По возрастанию времени в пути', sort: 'timeAsc'},
        {name: 'По убыванию времени в пути', sort: 'timeDesc'},
    ]

    const [flights, setFlights] = useState(mockData.result.flights); // предложения
    const [flightsOnPage, setFlightsOnPage] = useState(12); // к-во отображаемых предложений
    const [sorting, setSorting] = useState(sortSettings[0]); // текущая сортировка
    const [filters, setFilters] = useState({price: {min: 0, max: 0}, transfers: [0, 1], airlines: []}); // текущие фильтры {price: {min: 'мин. цена', max: 'макс. цена'}, transfers: [к-во пересадок, 0 - нет и т.д.], airlines: [массив авиакомпаний - name - название, min - мин. цена]}

    return (
        <div className="flex flex-col w-full h-screen">
            <SearchFilters flights={flights} setFlights={setFlights} data={mockData.result.flights} filters={filters} setFilters={setFilters}/>
            <FlightsContainer flightsOnPage={flightsOnPage} setFlightsOnPage={setFlightsOnPage}
                              data={flights}/>
        </div>
    );
}

export default App;
