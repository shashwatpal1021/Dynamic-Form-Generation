import PropTypes from 'prop-types';



const Preview = ({ title, formJson }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {formJson ? (
        <div className="bg-gray-100 p-4 rounded">

          <h2 className="text-xl font-bold mb-4 capitalize">{formJson.name}</h2>
          {formJson.fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2 font-bold capitalize">{field.label}</label>
              {field.type === 'text' && (
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded w-full"
                  aria-label={field.label}
                />
              )}
              {field.type === 'textarea' && (
                <textarea
                  className="p-2 border border-gray-300 rounded w-full"
                  aria-label={field.label}
                />
              )}
              {field.type === 'dropdown' && (
                <select
                  className="p-2 border border-gray-300 rounded w-full"
                  aria-label={field.label}
                >
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {field.type === 'checkbox' && (
                <div>
                  {field.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="block">
                      <input
                        type="checkbox"
                        name={`checkbox-${index}`}
                        value={option}
                        className="mr-2"
                        aria-label={option}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {field.type === 'radio' && (
                <div>
                  {field.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="block">
                      <input
                        type="radio"
                        name={`radio-${index}`}
                        value={option}
                        className="mr-2"
                        aria-label={option}
                      />
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

// Adding PropTypes for better type checking

Preview.propTypes = {
  title: PropTypes.string.isRequired,
  formJson: PropTypes.shape({
    name: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        type: PropTypes.oneOf(['text', 'textarea', 'dropdown', 'checkbox', 'radio']),
        options: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
};

export default Preview;
