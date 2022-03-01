import PropTypes from 'prop-types'

const Input = ({ labelText, type, id, name }) => (
  <label htmlFor={id} className="block text-sm font-medium">
    {labelText}
    <input
      type={type}
      name={name}
      id={id}
      autoComplete="true"
      className="input"
    />
  </label>
)

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Input
