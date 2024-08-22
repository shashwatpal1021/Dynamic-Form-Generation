import PropTypes from 'prop-types';


export const FormType = ({ field, updateField, index }) => {
  const handleLabelChange = (e) => {
    updateField(index, { ...field, label: e.target.value });
  };

  const handleTypeChange = (e) => {
    updateField(index, { ...field, type: e.target.value, options: [] });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Field Label"
        value={field.label || ''}
        onChange={handleLabelChange}
        required
        minLength={3}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
        aria-label="Field Label"
      />
      <select
        value={field.type || 'text'}
        onChange={handleTypeChange}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
        aria-label="Field Type"
      >
        <option value="text">Text Input</option>
        <option value="textarea">Text Area</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio Button</option>
        <option value="number">Number Input</option>
        <option value="email">Email Input</option>
        <option value="tel">Telephone Input</option>
        <option value="password">Password</option>
      </select>
    </div>
  );
};

// PropTypes for type checking
FormType.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'textarea', 'dropdown', 'checkbox', 'radio', "email", "tel", "password", "number"]),
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  updateField: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default FormType;
