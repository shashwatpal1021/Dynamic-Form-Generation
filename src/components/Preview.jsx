import React, { useEffect, useState } from 'react';

const Preview = () => {
  const [formJson, setFormJson] = useState(null);

  useEffect(() => {
    const savedFormConfig = localStorage.getItem('formConfig');
    if (savedFormConfig) {
      setFormJson(JSON.parse(savedFormConfig));
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Preview Form</h1>
      {formJson ? (
        <div className="bg-gray-100 p-4 rounded">
          {console.log("data--->",formJson)}
          <h2 className="text-xl font-bold mb-4">{formJson.name}</h2>
          {formJson.fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2 font-bold">{field.label}</label>
              {field.type === 'text' && <input type="text" className="p-2 border border-gray-300 rounded w-full" />}
              {field.type === 'textarea' && <textarea className="p-2 border border-gray-300 rounded w-full" />}
              {field.type === 'dropdown' && (
                <select className="p-2 border border-gray-300 rounded w-full">
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
              )}
              {field.type === 'checkbox' && (
                <input type="checkbox" className="p-2 border border-gray-300 rounded" />
              )}
              {field.type === 'radio' && (
                <div>
                  {field.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="block">
                      <input type="radio" name={`radio-${index}`} value={option} className="mr-2" />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No form data available. Please create and submit a form first.</p>
      )}
    </div>
  );
};

export default Preview;
