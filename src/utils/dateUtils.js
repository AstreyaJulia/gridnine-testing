import {differenceInMinutes, format, formatDuration, intervalToDuration, isDate, parseISO} from 'date-fns';
import ru from 'date-fns/locale/ru';
export function formatddMMMEEEEDate(date) {
    return format(
        isDate(date) ? date : parseISO(date),
        'dd MMM, eee',
        { locale: ru }
    );
}
export function getDuration(start, end){

    return formatDuration(intervalToDuration({
        start: parseISO(start),
        end: parseISO(end)
    }), { locale: ru })
}

export function getMinutes(start, end){

    return differenceInMinutes(
        parseISO(start),
        parseISO(end)
    )
}