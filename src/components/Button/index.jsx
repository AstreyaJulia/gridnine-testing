import PropTypes from "prop-types";
import clsx from "clsx";
import React from "react";

const Button = ({
  size = "default",
  variant = "default",
  shape = "default",
  leftIcon = null,
  rightIcon = null,
  label = null,
  className = "",
  isLoading,
  children = null,
  groupIndex = -1,
  totalItems = -1,
  ...props
}) => {
  const sizes = {
    small: ` ${
      shape === "square"
        ? "py-3.5 lg:py-2 px-3 lg:px-2"
        : "py-2.5 lg:py-1 px-4.5 lg:px-4"
    } text-base lg:text-sm`,
    default: ` ${
      shape === "square"
        ? "py-4.5 lg:py-2.5 px-4.5 lg:px-2.5"
        : "py-3.5 lg:py-1.5 px-8 lg:px-5"
    } text-lg lg:text-base`,
  };

  const variants = {
    primary: clsx(
      "shadow-sm border border-brand-700 bg-brand-600 text-white fill-white hover:bg-brand-700 hover:border-brand-800 focus:ring-4 focus:ring-brand-300/50 disabled:bg-brand-200 disabled:border-brand-300 disabled:hover:bg-brand-200 disabled:text-gray-100 disabled:fill-gray-100",
    ),
    default: clsx(
      "shadow-sm border border-gray-300 bg-white text-gray-800 fill-gray-800 hover:text-gray-900 hover:fill-gray-900 hover:bg-gray-50 hover:border-gray-400 focus:ring-4 focus:ring-gray-300/50 disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:border-gray-100 disabled:hover:border-gray-100 disabled:text-gray-300 disabled:fill-gray-300",
    ),
    destructive: clsx(
      "shadow-sm border border-red-400 bg-red-100 text-red-700 fill-red-700 hover:bg-red-200 hover:border-red-500 focus:ring-4 focus:ring-red-300/50 disabled:bg-red-50 disabled:hover:bg-red-50 disabled:border-red-100 disabled:hover:border-red-100 disabled:text-red-300 disabled:fill-red-300",
    ),
    tertiary: clsx(
      "bg-transparent text-gray-600 fill-gray-600 hover:text-gray-800 hover:fill-gray-800 focus:ring-4 focus:ring-gray-300/50 disabled:text-gray-200 disabled:fill-gray-200 disabled:text-gray-300 disabled:fill-gray-300",
    ),
    link: clsx(
      "bg-transparent text-brand-600 fill-brand-600 hover:text-brand-800 hover:fill-brand-800 focus:ring-4 focus:ring-brand-300/50 disabled:text-brand-200 disabled:fill-brand-200 disabled:text-brand-300 disabled:fill-brand-300",
    ),
  };

  const loaderFill = {
    primary: {
      ring: "stroke-brand-400/30",
      spinner: "fill-brand-700/30",
    },
    default: {
      ring: "stroke-gray-400/30",
      spinner: "fill-gray-700/30",
    },
    destructive: {
      ring: "stroke-red-400/30",
      spinner: "fill-red-700/50",
    },
    tertiary: {
      ring: "stroke-gray-400/30",
      spinner: "fill-gray-700/30",
    },
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center focus:outline-none",
        sizes[size],
        variants[variant],
        parseInt(groupIndex, 10) === 0 ? "rounded-l-lg" : "-ml-px",
        parseInt(groupIndex, 10) !== -1 &&
          parseInt(groupIndex, 10) === parseInt(totalItems, 10) - 1
          ? "rounded-r-lg"
          : "",
        parseInt(groupIndex, 10) !== -1
          ? "focus:z-10 hover:z-10"
          : "rounded-lg",
        className,
      )}
      disabled={isLoading || props.disabled}
      title={props.title}
      aria-label={props.title}
      type={props.type || "button"}
      {...props}
    >
      <span className="relative flex items-center gap-2">
        {leftIcon ? (
          <span className={size === "small" ? "mt-0.5 h-4 w-4" : "h-5 w-5"}>
            {leftIcon}
          </span>
        ) : (
          ""
        )}

        {isLoading ? (
          <svg
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              "absolute inset-1/3 inset-y-0 animate-spin-slow",
              size === "small" ? "h-5 w-5" : "h-6 w-6",
            )}
          >
            <circle
              cx="22"
              cy="22"
              r="19"
              className={loaderFill[variant].ring}
              strokeWidth="6"
            />
            <path
              d="M22 2.85984C22 1.2804 23.2857 -0.0191305 24.8519 0.185615C27.905 0.58477 30.8515 1.62199 33.495 3.24192C36.9544 5.36185 39.7602 8.39714 41.6021 12.0122C43.4441 15.6273 44.2505 19.6813 43.9322 23.7261C43.6889 26.8169 42.7962 29.8103 41.3245 32.515C40.5696 33.9023 38.7625 34.1787 37.4847 33.2503C36.2069 32.3219 35.95 30.5406 36.6407 29.1202C37.5276 27.2966 38.0697 25.3156 38.2301 23.2773C38.4657 20.2841 37.869 17.2841 36.5059 14.6089C35.1428 11.9337 33.0665 9.68753 30.5064 8.11875C28.7632 7.05046 26.8418 6.32462 24.8452 5.97023C23.2901 5.69419 22 4.43929 22 2.85984Z"
              className={loaderFill[variant].spinner}
            />
          </svg>
        ) : (
          ""
        )}

        {label && label !== "" ? label : ""}

        {rightIcon ? (
          <span className={size === "small" ? "h-4 w-4" : "h-5 w-5"}>
            {rightIcon}
          </span>
        ) : (
          ""
        )}
      </span>
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Размер кнопки.
   *
   * default - стандартный. По-умолчанию.
   *
   * small - маленький.
   */
  size: PropTypes.oneOf(["small", "default"]),

  /** Вариант кнопки.
   *
   * default - стандартная кнопка. По-умолчанию.
   *
   * primary - основная кнопка. Только 1 на экране.
   *
   * tertiary - кнопка 3-го уровня
   *
   * link - кнопка в виде ссылки. Переход на другие страницы.
   *
   * destructive - обозначает деструктивное действие - удаление и т.д.
   */
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "destructive",
    "tertiary",
    "link",
  ]),

  /** Форма кнопки.
   *
   * default - удлиненная, для текста, текст + значок. По-умолчанию.
   *
   * square - квадратная. Отступ внутри одинаковый по 4 сторонам. Для кнопок со значком, без текста.
   */
  shape: PropTypes.oneOf(["default", "square"]),

  /** Значок слева от текста.
   * svg, png и т.д.
   */
  leftIcon: PropTypes.node,

  /** Значок справа от текста.
   * svg, png и т.д.
   */
  rightIcon: PropTypes.node,

  /** Текст на кнопке.
   */
  label: PropTypes.string,

  /** Дополнительный класс.
   */
  className: PropTypes.string,

  /** Дополнительные элементы.
   */
  children: PropTypes.node,

  /** Индекс текущего элемента в группе кнопок.
   */
  groupIndex: PropTypes.number,

  /** Кол-во элементов в группе кнопок.
   */
  totalItems: PropTypes.number,
};

export default Button;
