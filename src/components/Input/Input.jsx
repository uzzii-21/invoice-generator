import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

const Input = ({ labelText, type, id, name }) => (
  <>
    <label htmlFor={id} className="block text-sm font-medium">
      {labelText}
      <Field
        type={type}
        name={name}
        id={id}
        autoComplete="true"
        className="input"
      />
    </label>
    <ErrorMessage name={name}>
      {(msg) => (
        <p className="text-[10px] mt-2 text-red-400">
          {labelText} {msg}
        </p>
      )}
    </ErrorMessage>
  </>
);

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
