/* eslint-disable react/prop-types */

import CustomField from "./CustomField";
import { FormType } from "./FormType";

const FormField = ({ index, field, updateField, removeField }) => {

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <FormType field={field} updateField={updateField} index={index} />
      {field.type === 'dropdown' && (
        <CustomField title={"Dropdown"} field={field} updateField={updateField} index={index} removeField={removeField} />
      )}
      {field.type === 'checkbox' && (
        <CustomField title={"Check-Box"} field={field} updateField={updateField} index={index} removeField={removeField} />
      )}
      {field.type === 'radio' && (
        <CustomField title={"Radio Button"} field={field} updateField={updateField} index={index} removeField={removeField} />
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
