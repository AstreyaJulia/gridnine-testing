import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { isDate, parseISO } from "date-fns";
import ru from "date-fns/locale/ru";
import clsx from "clsx";
import Typography from "../Typography";
import {
  CalendarIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import DatePicker, { registerLocale } from "react-datepicker";

registerLocale("ru", ru);
const DateInput = ({
  name,
  label,
  hideLabel = false,
  placeholder = "",
  layout = "vertical",
  dateFormat = "dd.MM.yyyy",
  showTimeSelect = false,
  isClearable = false,
  className = "",
  labelClassName = "",
  ...props
}) => {
  const { control } = useFormContext();

  const getDate = (date) => {
    if (date !== "" && !isDate(date)) {
      return parseISO(date);
    }
    if (date !== "" && isDate(date)) {
      return date;
    }
    return null;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div
          className={clsx(
            "w-full",
            layout === "horizontal"
              ? "grid grid-cols-3 gap-x-4"
              : "flex flex-col gap-y-2.5",
          )}
        >
          <label
            htmlFor={name}
            className={clsx(
              hideLabel ? "sr-only" : "",
              "flex shrink-0",
              layout === "horizontal" ? "mt-2.5 justify-end" : "",
              labelClassName ? labelClassName : "",
            )}
          >
            <Typography variant="label">{label}</Typography>
          </label>
          <div id={name} className="col-span-2 relative">
            <DatePicker
              selected={getDate(value)}
              dateFormat={dateFormat}
              showTimeSelect={showTimeSelect}
              onChange={(date) => onChange(date)}
              isClearable={isClearable}
              showIcon
              icon={<CalendarIcon className="h-5 w-5 text-gray-500" />}
              locale="ru"
              className={clsx(
                "block w-full rounded-lg border bg-white lg:pl-10 lg:px-10 py-3.5 text-lg text-gray-800 placeholder-gray-500 shadow-sm placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-4 lg:py-1.5 lg:text-base",
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                  : "border-gray-300 hover:border-gray-400 focus:border-brand-500 focus:ring-brand-500/25",
              )}
              placeholderText={placeholder}
              todayButton="Сегодня"
              {...props}
            />
            {error && (
              <ExclamationCircleIcon className="pointer-events-none absolute right-8 top-2 flex h-5 w-5 items-center text-red-500" />
            )}
            <p className="mt-1 flex h-5 w-full flex-wrap items-center text-sm text-red-500">
              {error && error?.message}
            </p>
          </div>
        </div>
      )}
    />
  );
};

DateInput.propTypes = {
  /** Имя поля ввода.
   *
   * Должно совпадать с именем поля из схемы resolver react-hook-form
   */
  name: PropTypes.string.isRequired,

  /** Метка (описание) поля
   *
   * Обязательна, даже отображение не требуется - для доступности.
   */
  label: PropTypes.string.isRequired,

  /** Скрыть метку поля в разметке
   */
  hideLabel: PropTypes.bool,

  /** Плейсхолдер поля ввода
   * если не задать, будет пустым
   */
  placeholder: PropTypes.string,

  /** Расположение метки относительно поля ввода
   *
   * horizontal - метка слева
   * vertical - метка сверху
   */
  layout: PropTypes.oneOf(["horizontal", "vertical"]),

  /** Доп. класс для поля ввода
   */
  className: PropTypes.string,

  /** Доп. класс для метки
   */
  labelClassName: PropTypes.string,
};

export default DateInput;
