
import { useEffect, useState } from 'react';
import FormBuilder from './components/FormBuilder';
import Preview from './components/preview';

function App() {
  const [formJson, setFormJson] = useState(null);

  useEffect(() => {
    const savedFormConfig = localStorage.getItem('formConfig');
    if (savedFormConfig) {
      setFormJson(JSON.parse(savedFormConfig));
    }
  }, []);
  return (
    <div className=" flex flex-col justify-center w-[800px] mx-auto">
      <FormBuilder setFormJson={setFormJson} />
      <Preview title={"Form Preview"} formJson={formJson} />
    </div>
  );
}

export default App;
