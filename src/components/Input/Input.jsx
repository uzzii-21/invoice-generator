import PropTypes from 'prop-types';

const Input = ({
  labelText,
  type,
  id,
  name,
  onChange,
  onBlur,
  value,
  isValid
}) => (
  <>
    <label htmlFor={id} className="block text-sm font-medium">
      {labelText}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        autoComplete="true"
        className="input"
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
    {isValid && (
      <p className="text-[10px] mt-2 text-red-400">
        {' '}
        {labelText} {isValid}
      </p>
    )}
  </>
);

Input.defaultProps = {
  isValid: null
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.string
};

export default Input;
