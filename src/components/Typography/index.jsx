import clsx from "clsx";
import PropTypes from "prop-types";

const Typography = ({
  variant,
  className = "",
  children = null,
  textColor = "",
  textSize = "",
  ...props
}) => {
  const typographySettings = {
    h1: {
      element: (
        <h1
          className={clsx(
            "font-bold",
            textSize || "text-6xl",
            textColor || "text-gray-900",
            className || "",
          )}
          {...props}
        >
          {children}
        </h1>
      ),
    },
    h2: {
      element: (
        <h2
          className={clsx(
            "font-bold",
            textSize || "text-5xl",
            textColor || "text-gray-900",
            className || "",
          )}
          {...props}
        >
          {children}
        </h2>
      ),
    },
    h3: {
      element: (
        <h3
          className={clsx(
            "font-bold",
            textSize || "text-4xl",
            textColor || "text-gray-900",
            className || "",
          )}
          {...props}
        >
          {children}
        </h3>
      ),
    },
    h4: {
      element: (
        <h4
          className={clsx(
            "font-bold",
            textSize || "text-3xl",
            textColor || "text-gray-900",
            className || "",
          )}
          {...props}
        >
          {children}
        </h4>
      ),
    },
    h5: {
      element: (
        <h5
          className={clsx(
            "font-bold",
            textSize || "text-xl",
            textColor || "text-gray-900",
            className || "",
          )}
          {...props}
        >
          {children}
        </h5>
      ),
    },
    h6: {
      element: (
        <h5
          className={clsx(
            "font-bold",
            textSize || "text-lg",
            textColor || "text-gray-900",
            className || "",
          )}
          {...props}
        >
          {children}
        </h5>
      ),
    },
    label: {
      element: (
        <p
          className={clsx(
            textSize || "text-sm",
            textColor || "text-gray-800",
            className || "",
          )}
          {...props}
        >
          {children}
        </p>
      ),
    },
    caption: {
      element: (
        <p
          className={clsx(
            textSize || "text-sm",
            textColor || "text-gray-500",
            className || "",
          )}
          {...props}
        >
          {children}
        </p>
      ),
    },
    "card-title": {
      element: (
        <h5
          className={clsx(
            "font-semibold",
            textSize || "text-lg",
            textColor || "text-gray-800",
            className || "",
          )}
          {...props}
        >
          {children}
        </h5>
      ),
    },
    "card-subtitle": {
      element: (
        <p
          className={clsx(
            "font-medium uppercase",
            textSize || "text-sm",
            textColor || "text-gray-500",
            className || "",
          )}
          {...props}
        >
          {children}
        </p>
      ),
    },
    "text-main": {
      element: (
        <p
          className={clsx(
            textSize || "text-base",
            textColor || "text-gray-800",
            className || "",
          )}
          {...props}
        >
          {children}
        </p>
      ),
    },
    "text-secondary": {
      element: (
        <p
          className={clsx(
            textSize || "text-base",
            textColor || "text-gray-500",
            className || "",
          )}
          {...props}
        >
          {children}
        </p>
      ),
    },
  };

  return typographySettings[variant].element;
};

Typography.propTypes = {
  /** Вариант текста */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "label",
    "caption",
    "card-title",
    "card-subtitle",
    "text-main",
    "text-secondary",
  ]).isRequired,

  /** Класс для цвета текста. */
  textColor: PropTypes.string,

  /** Дочерние элементы  */
  children: PropTypes.node,

  /** Доп. классы */
  className: PropTypes.string,
};

export default Typography;
