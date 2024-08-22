/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const FormField = ({ index, field, updateField, removeField }) => {
  const handleLabelChange = (e) => {
    updateField(index, { ...field, label: e.target.value });
  };

  const handleTypeChange = (e) => {
    updateField(index, { ...field, type: e.target.value, options: [] });
  };

  const handleOptionChange = (e, optionIndex) => {
    // eslint-disable-next-line react/prop-types
    const updatedOptions = field.options.map((option, i) =>
      i === optionIndex ? e.target.value : option
    );
    updateField(index, { ...field, options: updatedOptions });
  };

  const addOption = () => {
    updateField(index, { ...field, options: [...field.options, ''] });
  };

  const removeOption = (optionIndex) => {
    const updatedOptions = field.options.filter((_, i) => i !== optionIndex);
    updateField(index, { ...field, options: updatedOptions });
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
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

      {field.type === 'dropdown' && (
        <div className="mb-2">
          <h3 className="font-bold">Dropdown Options</h3>
          {field.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center mb-2">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(e, optionIndex)}
                className="p-2 border border-gray-300 rounded w-full"
              />
              <button
                onClick={() => removeOption(optionIndex)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={addOption}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Option
          </button>
        </div>
      )}

      <button
        onClick={() => removeField(index)}
        className="bg-red-500 text-white px-4 py-2 rounded mt-2"
      >
        Remove Field
      </button>
    </div>
  );
};

export default FormField;
