import PropTypes from 'prop-types'

const Input = ({ labelText, type, id, name, onChange, onBlur, value }) => {
  return (
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
      {/* <p className='text-xs mt-1 text-red-400'>{labelText} is Required</p> */}
    </>
  )
}

Input.defaultProps = {
  onBlur: undefined
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired
}

export default Input
