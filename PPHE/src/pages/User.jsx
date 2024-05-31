import {useState} from 'react'

const User = () => {

    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleQuery = async () => {
      if (!file) {
        setError('Please select a file first');
        return;
      }
      setLoading(true)
  
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await fetch('http://localhost:8080/query', {
          method: 'POST',
          body: formData,
        });
        console.log("res = " , res)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await res.json();
        console.log("Final data = " ,data)
        setResponse("Final class label = " , data.label);
        console.log('Success:', data);
      } catch (error) {
        setError(error);
        console.error('Error:', error);
      }
      finally{
        setLoading(false)
      }
    };


    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };


    return (
      <div className="flex flex-col gap-6 w-full min-h-screen justify-center items-center p-2">
        <h1 className="lg:text-4xl md:text-3xl text-2xl ">Make a Query</h1>
          <form className="w-full h-1/2 md:w-1/2 p-2 md:p-8 border-4 rounded-lg border-dashed border-slate-950">
    <div className="mb-6">
      <div className="">
        <label className="block text-gray-500 font-bold " htmlFor="dataset">
          Choose the dataset: 
        </label>
      </div>
      <div className="w-auto mx-auto mt-2">
      <select
        id="dataset"
        value={selectedOption}
        onChange={handleOptionChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
      >
        <option value="" disabled selected>Select an option</option>
        <option value="iris">Iris</option>
        <option value="breast-cancer">Breast Cancer</option>
        <option value="arrhythmia">Arrhythmia</option>
      </select>
    </div>
    </div>
    <div className="flex w-full justify-start ">
      <div className="md:w-1/4 text-center justify-start items-center">
        <label className="block text-gray-500 font-bold mt-2" htmlFor="inline-password">
          Select the file:
        </label>
      </div>
      <div className="md:w-3/4">
        <input 
        onChange={handleFileChange}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-file" type="file" accept=".csv" />
      </div>
    </div>
    <div className="md:flex flex justify-center md:items-center mt-10">
      <div className="m-auto">
        <button 
        disabled={loading}
        onClick={handleQuery}
        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4  rounded" 
        type="button">
          Query
        </button>
      </div>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error.message || JSON.stringify(error)}</div>}
    </div>
  </form>
  
        
      </div>
    )
  }
  
  export default User;
  