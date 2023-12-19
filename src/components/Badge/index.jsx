import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Badge = ({
  size = "default",
  color = 'blue',
  children = null,
  shape = "default",
  className = "",
  variant = "soft",
  ...props
}) => {
  const BadgeSize = {
    default: {
      small: "px-2 py-0.5 text-xs leading-4",
      default: "px-2.5 py-0.5 text-sm leading-5",
      large: "px-3.5 py-1 text-base leading-6",
    },
    square: {
      small: "p-0.5 text-xs leading-4",
      default: "p-0.5 text-sm leading-5",
      large: "p-1 text-base leading-6",
    },
  };

  const BadgeColor = {
    transparent: {
      gray: "bg-transparent text-gray-700",
      blue: "bg-transparent text-blue-700",
      teal: "bg-transparent text-teal-700",
      violet: "bg-transparent text-violet-700",
      red: "bg-transparent text-red-700",
      amber: "bg-transparent text-amber-700",
      green: "bg-transparent text-green-700",
      slate: "bg-transparent text-slate-600",
      cyan: "bg-transparent text-cyan-700",
      sky: "bg-transparent text-sky-700",
      indigo: "bg-transparent text-indigo-700",
      pink: "bg-transparent text-pink-700",
      rose: "bg-transparent text-rose-700",
      orange: "bg-transparent text-orange-700",
    },
    white: {
      gray: "bg-white/80 text-gray-700",
      blue: "bg-white/80 text-blue-700",
      teal: "bg-white/80 text-teal-700",
      violet: "bg-white/80 text-violet-700",
      red: "bg-white/80 text-red-700",
      amber: "bg-white/80 text-amber-700",
      green: "bg-white/80 text-green-700",
      slate: "bg-white/80 text-slate-600",
      cyan: "bg-white/80 text-cyan-700",
      sky: "bg-white/80 text-sky-700",
      indigo: "bg-white/80 text-indigo-700",
      pink: "bg-white/80 text-pink-700",
      rose: "bg-white/80 text-rose-700",
      orange: "bg-white/80 text-orange-700",
    },
    soft: {
      gray: "bg-gray-100 text-gray-700",
      blue: "bg-blue-100 text-blue-700",
      teal: "bg-teal-100 text-teal-700",
      violet: "bg-violet-100 text-violet-700",
      red: "bg-red-100 text-red-700",
      amber: "bg-amber-100 text-amber-700",
      green: "bg-green-100 text-green-700",
      slate: "bg-slate-100 text-slate-600",
      cyan: "bg-cyan-100 text-cyan-700",
      sky: "bg-sky-100 text-sky-700",
      indigo: "bg-indigo-100 text-indigo-700",
      pink: "bg-pink-100 text-pink-700",
      rose: "bg-rose-100 text-rose-700",
      orange: "bg-orange-100 text-orange-700",
    },
    solid: {
      gray: "bg-gray-600 text-gray-50",
      blue: "bg-blue-600 text-blue-50",
      teal: "bg-teal-600 text-teal-50",
      violet: "bg-violet-600 text-violet-50",
      red: "bg-red-600 text-red-50",
      amber: "bg-amber-500 text-white",
      green: "bg-green-600 text-green-50",
      slate: "bg-slate-400 text-white",
      cyan: "bg-cyan-600 text-cyan-50",
      sky: "bg-sky-600 text-sky-50",
      indigo: "bg-indigo-600 text-indigo-50",
      pink: "bg-pink-600 text-pink-50",
      rose: "bg-rose-600 text-rose-50",
      orange: "bg-orange-600 text-orange-50",
    },
  };

  const BadgeShapes = {
    rounded: "rounded-md",
    default: "rounded-full",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-medium",
        variant === "solid" || variant === "soft" ? "shadow-sm" : "",
        shape.includes("square")
          ? BadgeSize.square[size]
          : BadgeSize.default[size],
        BadgeColor[variant][color],
        BadgeShapes[shape.includes("default") ? "default" : "rounded"],
        className,
        { ...props },
      )}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  /**  Данные */
  children: PropTypes.node.isRequired,

  /**  Размер бейджа */
  size: PropTypes.oneOf(["small", "default", "large"]),

  /**  Вариант дизайна
   *
   * `transparent` - прозрачный фон, темный текст
   *
   * `soft` - светлый фон, темный текст
   *
   * `white` - полупрозрачный белый фон, просвечивает подложку, темный текст. Для использования поверх темных элементов, например, внутри бейджей.
   *
   * `solid` - темный фон, светлый текст.
   */
  variant: PropTypes.oneOf(["transparent", "white", "soft", "solid"]),

  /**  Цвет бейджа */
  color: PropTypes.oneOf([
    "gray",
    "blue",
    "teal",
    "violet",
    "red",
    "amber",
    "green",
    "slate",
    "cyan",
    "sky",
    "indigo",
    "pink",
    "rose",
    "orange",
  ]),

  /**  Форма бейджа
   *
   * `default` - круглый. По-умолчанию.
   *
   * `rounded` - со скругленными углами.
   *
   * `default-square` - круглый, отступ внутри одинаковый по 4 сторонам, для квадратной формы бейджа (без текста, только значок).
   *
   * `rounded-square` - со скругленными углами, отступ внутри одинаковый по 4 сторонам, для квадратной формы бейджа (без текста, только значок).
   */
  shape: PropTypes.oneOf([
    "rounded",
    "default",
    "rounded-square",
    "default-square",
  ]),

  /** Доп. класс/ы для бейджа */
  className: PropTypes.string,
};

export default Badge;
