
import { useState } from 'react';
import FormField from './FormField';
import PropTypes from 'prop-types';


const FormBuilder = ({ setFormJson }) => {
  const [fields, setFields] = useState([]);
  const [formName, setFormName] = useState('');

  const addField = () => {
    setFields([...fields, { label: '', type: 'text', options: [] }]);
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const updateField = (index, updatedField) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? updatedField : field
    );
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formConfig = {
      name: formName,
      fields,
    };

    localStorage.setItem('formConfig', JSON.stringify(formConfig));
    setFormJson(formConfig);

    setFields([]);
    setFormName('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Dynamic Form Builder</h1>
      <input
        type="text"
        placeholder="Form Name"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
        className="mb-4 p-2 border w-full border-gray-300 rounded"
      />
      <div className="mb-4">
        {fields.map((field, index) => (
          <FormField
            key={index}
            index={index}
            field={field}
            updateField={updateField}
            removeField={removeField}
          />
        ))}
      </div>
      <div className='flex justify-between'>
        <button
          onClick={addField}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Field
        </button>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded "
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

// PropTypes for type checking
FormBuilder.propTypes = {
  setFormJson: PropTypes.func.isRequired,
};
export default FormBuilder;
