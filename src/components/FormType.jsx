/* eslint-disable react/prop-types */

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
        value={field.label}
        onChange={handleLabelChange}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
      />
      <select
        value={field.type}
        onChange={handleTypeChange}
        className="mb-2 p-2 border border-gray-300 rounded w-full"
      >
        <option value="text">Text Input</option>
        <option value="textarea">Text Area</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio Button</option>
      </select>
    </div>
  )
}
