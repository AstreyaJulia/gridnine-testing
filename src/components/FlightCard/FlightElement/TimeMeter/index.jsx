import {getMinutes} from "../../../../utils/dateUtils";

const TimeMeter = ({segments}) => {

    const totalTime = segments.reduce(function (sum, segment, index) {
        return sum + getMinutes(segments[index].arrivalDate, segments[index].departureDate) + (index === segments.length - 1 ? 0 : getMinutes(segments[index + 1].arrivalDate, segments[index].departureDate))
    }, 0)

    return (
        <div className="flex items-center w-full h-0.5 bg-brand-300 rounded-full">
            {
                segments.map((segment, key) => <>
                            <span key={key} className="h-1 bg-brand-500 rounded-full"
                                  style={{
                                      width: `${Math.round(getMinutes(segment.arrivalDate, segment.departureDate) / (totalTime / 100))}%`
                                  }}/>
                    {key !== segments.length - 1 &&
                        <span className="h-0.5 bg-brand-300 rounded-full"
                              style={{
                                  width: `${Math.round(getMinutes(segments[key + 1].arrivalDate, segment.departureDate) / (totalTime / 100))}%`
                              }}/>}</>)
            }
        </div>
    )
}

export default TimeMeter