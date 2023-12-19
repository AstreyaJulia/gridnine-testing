import {format, getTime, parseISO} from "date-fns";
import {formatddMMMEEEEDate, getDuration, getMinutes} from "../../../utils/dateUtils";
import {getAmount} from "../../../utils/textUtils";
import TimeMeter from "./TimeMeter";

const FlightElement = ({item, carrier, key}) => {
    const elementKey = key
    return (
        <article className="py-3 flex flex-col w-full gap-y-5">
            <p className="text-gray-900 font-medium text-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="M8.5 22v-1.5l2-1.5v-5.5L2 16v-2l8.5-5V3.5q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5V9l8.5 5v2l-8.5-2.5V19l2 1.5V22L12 21z"/>
                </svg>
                {carrier}
            </p>
            <div className="flex justify-between gap-y-6">
                <div className="flex flex-col gap-5 w-52">
                    <time
                        className="text-4xl text-gray-900 font-semibold text-left">{format(parseISO(item.segments[0].departureDate), "HH:mm")}</time>

                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500 text-left">{item.segments[0].departureCity.caption}</p>
                        <p className="text-sm text-gray-900 text-left">{item.segments[0].departureAirport.caption}</p>
                        <p className="text-sm text-gray-500 text-left">{formatddMMMEEEEDate(item.segments[0].departureDate)}</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-y-3">

                    <div className="w-full flex items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500">
                            <path fill="currentColor"
                                  d="M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1m1.57-9.36c-.22-.8-1.04-1.27-1.84-1.06L14.92 10L8.46 3.98a1.06 1.06 0 0 0-1.02-.25c-.68.19-1 .97-.65 1.58l3.44 5.96l-4.97 1.33l-1.57-1.24c-.25-.19-.57-.26-.88-.18l-.33.09c-.32.08-.47.45-.3.73l1.88 3.25c.23.39.69.58 1.12.47L21 11.48c.8-.22 1.28-1.04 1.07-1.84"/>
                        </svg>
                        <p className="text-sm text-gray-700 shrink-0">~ {getDuration(item.segments[0].departureDate, item.segments[item.segments.length - 1].arrivalDate)} в
                            пути</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500">
                            <path fill="currentColor"
                                  d="M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1M3.51 11.61l15.83 4.24c.8.21 1.62-.26 1.84-1.06c.21-.8-.26-1.62-1.06-1.84l-5.31-1.42l-2.58-8.45a1.08 1.08 0 0 0-.75-.73c-.68-.18-1.35.33-1.35 1.04v6.88L5.15 8.95L4.4 7.09a.991.991 0 0 0-.67-.59l-.33-.09a.495.495 0 0 0-.63.48v3.75c0 .46.3.85.74.97"/>
                        </svg>
                    </div>

                    <TimeMeter segments={item.segments}/>

                    <div className="relative w-full h-5">
                        {item.segments.length === 1 ?
                            <><span
                                className="absolute z-0 top-0 text-sm font-semibold text-gray-500"
                                style={{width: "50%", left: "0%"}}>{item.segments[0].departureAirport.uid}</span>
                                <span className="absolute z-0 top-0 text-sm font-semibold text-gray-500 text-right"
                                      style={{
                                          width: "50%",
                                          left: "50%"
                                      }}>{item.segments[0].arrivalAirport.uid}</span></> :
                            <>
                                <span
                                    className="absolute z-0 top-0 text-sm font-semibold text-gray-500"
                                    style={{
                                        width: "50%",
                                        left: "0%"
                                    }}>{elementKey === 0 ? item.segments[0].arrivalAirport.uid : item.segments[0].departureAirport.uid}</span>
                                <span className="absolute z-0 top-0 text-sm font-semibold text-gray-500 text-right"
                                      style={{
                                          width: "50%",
                                          left: "50%"
                                      }}>{item.segments[item.segments.length - 1].arrivalAirport.uid}</span></>}


                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        {item.segments.length > 1 &&
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20">
                                <g fill="currentColor">
                                    <path
                                        d="M5.254 14.596a.5.5 0 0 1 .707-.707A5.5 5.5 0 0 0 15.35 10a.5.5 0 0 1 .999.001a6.5 6.5 0 0 1-11.096 4.596"/>
                                    <path d="M13.131 12.416a.5.5 0 0 1-.555-.832l3-2a.5.5 0 1 1 .555.832z"/>
                                    <path
                                        d="M18.266 12.723a.5.5 0 1 1-.832.554l-2-3a.5.5 0 0 1 .832-.554zm-3.912-7.518a.5.5 0 0 1-.708.707a5.5 5.5 0 0 0-9.389 3.89a.5.5 0 0 1-1-.001a6.5 6.5 0 0 1 11.097-4.596"/>
                                    <path d="M6.476 7.385a.5.5 0 0 1 .555.832l-3 2a.5.5 0 1 1-.555-.832z"/>
                                    <path d="M1.341 7.078a.5.5 0 1 1 .832-.554l2 3a.5.5 0 0 1-.832.554z"/>
                                </g>
                            </svg>}
                        {item.segments.length === 1 ? "Прямой рейс" : `${item.segments.length - 1} ${getAmount(item.segments.length - 1, {
                            single: "пересадка",
                            multi: "пересадки",
                            count: "пересадок"
                        })}`}
                    </p>
                </div>

                <div className="flex flex-col gap-5 w-52">
                    <time
                        className="text-4xl text-gray-900 font-semibold text-right">{format(parseISO(item.segments[item.segments.length - 1].arrivalDate), "HH:mm")}</time>

                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500 text-right">{item.segments[item.segments.length - 1].arrivalCity ? item.segments[item.segments.length - 1].arrivalCity.caption : ''}</p>
                        <p className="text-sm text-gray-900 text-right">{item.segments[item.segments.length - 1].arrivalAirport.caption}</p>
                        <p className="text-sm text-gray-500 text-right">{formatddMMMEEEEDate(item.segments[item.segments.length - 1].arrivalDate)}</p>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default FlightElement