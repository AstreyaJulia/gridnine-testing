import FormProvider from "../forms/FormProvider";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {isDate, parseISO} from "date-fns";
import {useEffect, useMemo} from "react";
import {useForm} from "react-hook-form";
import TextInput from "../forms/TextInput";
import DateInput from "../forms/DateInput";

const SearchFilters = ({flights, setFlights, data}) => {
    const SearchForm = Yup.object().shape({
        departureCityUid: Yup.string(), // uid города отправления
        arrivalCityUid: Yup.string(), // uid города назначения
        departureDate: Yup.date()
            .transform((value) => {
                if (value !== "" && !isDate(value)) {
                    return parseISO(value);
                }
                if (value !== "" && isDate(value)) {
                    return value;
                }
                return null;
            })
            .required("Заполните дату вылета"), // дата вылета
        arrivalDate: Yup.date()
            .transform((value) => {
                if (value !== "" && !isDate(value)) {
                    return parseISO(value);
                }
                if (value !== "" && isDate(value)) {
                    return value;
                }
                return null;
            }), // дата прилета
        minPrice: Yup.number, // мин цена
        maxPrice: Yup.number, // макс цена
        transfersCol: Yup.array, // кол-во пересадок
        airlines: Yup.array, // перевозчики
    });

    const defaultValues = useMemo(
        () => ({
            departureCityUid: "MOW",
            arrivalCityUid: "LON",
            departureDate: "2020-08-18T06:10:00",
            arrivalDate: "2020-08-18T16:25:00",
            minPrice: 0,
            maxPrice: 999999,
            transfersCol: [0, 1],
            airlines: [],
        }),
        [],
    );

    const methods = useForm({
        resolver: yupResolver(SearchForm),
        defaultValues,
    });

    const {
        getValues,
        formState: {isSubmitting},
    } = methods;

    const getCityList = (direction) => {
        const array = data.map((flight) => flight.flight.legs.map((leg) => leg.segments.map((segment) => ({
                    id: segment[direction].uid,
                    name: segment[direction].caption
                }
            ))).flat()
        ).flat()
        // значения с уникальными id
        return array.filter((item, index) => array.findIndex(obj => obj.id === item.id) === index)
    }

    const filterCity = (direction, uid) => {
        console.log(flights)
        return flights.filter((flight) => flight.flight.legs.some((leg) => leg.segments[0][direction].uid === uid)
        )
    }

    useEffect(() => {
        //console.log(filterCity('departureCity', 'MOW'))
    }, []);

    return (
        <div className="fixed w-full bg-white border-b border-gray-200 pt-6">
            <FormProvider
                methods={methods}
                className="max-w-6xl mx-auto w-full items-center"
            >
                <div className="w-full grid grid-cols-4 items-center gap-x-4">
                    <div
                        className="w-full flex flex-col gap-y-2.5"
                    >
                        <label
                            htmlFor="departureCityUid"
                            className="flex shrink-0 text-sm text-gray-800"
                        >
                            Откуда
                        </label>
                        <select name="departureCityUid" onChange={(evt) => setFlights(filterCity('departureCity', evt.target.value))}
                                className="mb-6 block w-full rounded-lg border bg-white text-lg text-gray-800 placeholder-gray-500 shadow-sm placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-4 lg:py-1.5 lg:text-base border-gray-300 hover:border-gray-400 focus:border-brand-500 focus:ring-brand-500/25">
                            {getCityList('departureCity').map((city) =>
                                <option key={city.id}
                                        value={city.id}
                                        selected={city.id === getValues('departureCityUid')}>{city.name}</option>)}
                        </select>
                    </div>
                    <div
                        className="w-full flex flex-col gap-y-2.5"
                    >
                        <label
                            htmlFor="arrivalCityUid"
                            className="flex shrink-0 text-sm text-gray-800"
                        >
                            Куда
                        </label>
                        <select name="arrivalCityUid" onChange={(evt) => setFlights(filterCity('arrivalCity', evt.target.value))}
                                className="mb-6 block w-full rounded-lg border bg-white text-lg text-gray-800 placeholder-gray-500 shadow-sm placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-4 lg:py-1.5 lg:text-base border-gray-300 hover:border-gray-400 focus:border-brand-500 focus:ring-brand-500/25">
                            {getCityList('arrivalCity').map((city) => <option key={city.id} value={city.id}
                                                                              selected={city.id === getValues('arrivalCityUid')}>{city.name}</option>)}
                        </select>
                    </div>
                    <DateInput label="Дата вылета" name="departureDate" placeholder="Дата вылета"/>
                    <DateInput label="Дата прилета" name="arrivalDate" placeholder="Дата прибытия"/>
                </div>



            </FormProvider>
        </div>
    )
}

export default SearchFilters