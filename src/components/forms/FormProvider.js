import PropTypes from "prop-types";
import { FormProvider as Form } from "react-hook-form";

export default function FormProvider({
  children,
  onSubmit = () => null,
  methods,
  className = "",
  ...props
}) {
  return (
    <Form {...methods}>
      <form
        onSubmit={onSubmit}
        className={className ? className : ""}
        {...props}
      >
        {children}
      </form>
    </Form>
  );
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};
