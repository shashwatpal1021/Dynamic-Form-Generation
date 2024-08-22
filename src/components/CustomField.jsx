/* eslint-disable react/prop-types */

const CustomField = ({ title, field, updateField, index }) => {
  const addOption = () => {
    updateField(index, { ...field, options: [...field.options, ''] });
  };

  const removeOption = (optionIndex) => {
    const updatedOptions = field.options.filter((_, i) => i !== optionIndex);
    updateField(index, { ...field, options: updatedOptions });
  };

  const handleOptionChange = (e, optionIndex) => {
    const updatedOptions = field.options.map((option, i) =>
      i === optionIndex ? e.target.value : option
    );
    updateField(index, { ...field, options: updatedOptions });
  };

  return (

    <div className="mb-2">
      <h3 className="font-bold">{title}</h3>
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

  )
}

export default CustomField