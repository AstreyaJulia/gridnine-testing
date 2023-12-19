import { Controller, useFormContext } from "react-hook-form";
import clsx from "clsx";
import PropTypes from "prop-types";
import Typography from "../Typography";
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Badge from "../Badge";

const TextInput = ({
  name,
  label,
  hideLabel = false,
  placeholder = "",
  layout = "vertical",
  className = "",
  numberControlPosition = "right",
  labelClassName = "",
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
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

          <div className="col-span-2 relative w-full">
            <input
              {...field}
              type={props.type || "text"}
              name={name}
              id={name}
              className={clsx(
                "block w-full rounded-lg border bg-white text-lg text-gray-800 placeholder-gray-500 shadow-sm placeholder:text-base placeholder:font-normal focus:outline-none focus:ring-4 lg:py-1.5 lg:text-base",
                props.type && props.type !== "text" && props.type !== "number"
                  ? "lg:pl-10"
                  : "lg:pl-3",
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/25"
                  : "border-gray-300 hover:border-gray-400 focus:border-brand-500 focus:ring-brand-500/25",
                className ? className : "",
              )}
              style={{
                paddingRight: `${
                  !props.maxLength
                    ? "0.75"
                    : props.maxLength.toString().length + 0.5
                }rem`,
              }}
              placeholder={placeholder}
              aria-invalid={!!error}
              aria-describedby={`${name}-error`}
              {...props}
            />
            {props.type === "tel" && (
              <PhoneIcon className="w-5 h-5 text-gray-500 absolute lg:left-3 lg:top-2" />
            )}
            {props.type === "email" && (
              <AtSymbolIcon className="w-5 h-5 text-gray-500 absolute lg:left-3 lg:top-2" />
            )}
            {props.type === "url" && (
              <LinkIcon className="w-5 h-5 text-gray-500 absolute lg:left-3 lg:top-2" />
            )}
            {props.maxLength && (
              <Badge
                color="slate"
                shape="rounded"
                size="small"
                variant="soft"
                className="absolute right-3 top-2.5"
              >
                {parseInt(props.maxLength, 10) - field.value.length}
              </Badge>
            )}
            {props.type === "number" ? (
              <div className="absolute right-px top-0 h-[38px] grid grid-rows-2 divide-y divide-gray-200">
                <button
                  type="button"
                  title="Больше"
                  onClick={() => field.onChange(parseInt(field.value, 10) + 1)}
                  className="py-px px-1 border-l border-gray-200 rounded-l-sm rounded-tr-md text-gray-500 hover:text-gray-800 shrink-0 focus:outline-0 focus:ring-2 focus:ring-brand-300/50"
                >
                  <ChevronUpIcon className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  title="Меньше"
                  onClick={() => field.onChange(parseInt(field.value, 10) - 1)}
                  className="py-px px-1 border-l border-gray-200 rounded-l-sm rounded-br-md text-gray-500 hover:text-gray-800 shrink-0 focus:outline-0 focus:ring-2 focus:ring-brand-300/50"
                >
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
              </div>
            ) : (
              ""
            )}
            {error && (
              <ExclamationCircleIcon
                style={{
                  right: `${
                    !props.maxLength
                      ? "0.75"
                      : props.maxLength.toString().length + 1
                  }rem`,
                }}
                className="pointer-events-none absolute top-2 flex h-5 w-5 items-center text-red-500"
              />
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

TextInput.propTypes = {
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

export default TextInput;
