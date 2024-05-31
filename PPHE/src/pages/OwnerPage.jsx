import { useState } from "react";

const OwnerPage = () => {



  const [errorMessage1, setErrorMessage1] = useState(null);
  const [errorMessage2, setErrorMessage2] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [keysGenerated, setKeysGenerated] = useState(false);

  const handleGenerateKeys = async () => {
    console.log("In handle generate keys")
    console.log("keysize = ", keysize)

    const formData = new FormData();
    formData.append('keysize', keysize.toString());

    try {
      const response = await fetch('http://localhost:5000/generate_keys', {
        method: 'POST',
        body: formData
        // You can add headers or body if needed
      });
      if (response.ok) {
        // Success: display toast message and disable button
        alert('Keys successfully generated');
        setKeysGenerated(true);
      } else {
        // Error: display error message
        setErrorMessage1('Something went wrong while generating keys');
      }
    } catch (error) {
      console.error('Error generating keys:', error);
      setErrorMessage1('Something went wrong while generating keys');
    }
  };


  const handleEncrypt = async () => {
    setLoading2(true);

    const formData = new FormData();
    formData.append('dataset', selectedDataset.toString());
    try {
      // Perform your encryption logic here
      // For demonstration purposes, sending a POST request to an endpoint
      const response = await fetch('http://localhost:5000/encrypt', {
        method: 'POST',
        body : formData
        // Add headers or body as needed
      });

      if (response.ok) {
        // Success: display alert
        alert('Encryption successful');
      } else {
        // Error: display error message
        setErrorMessage2('Encryption failed');
      }
    } catch (error) {
      console.error('Error encrypting:', error);
      setErrorMessage2('Encryption failed');
    } finally {
      setLoading2(false);
    }
  };



  const [keysize, setKeySize] = useState(''); // State to hold the selected key size

  const handleKeySizeChange = (event) => {
    setKeySize(event.target.value);
  };


  const [selectedDataset, setSelectedDataset] = useState('');

  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };


  return (
    <div className="flex flex-col gap-6 w-full min-h-screen justify-center items-center p-2">
      <h1 className="lg:text-4xl md:text-3xl text-2xl ">Add a Dataset</h1>
      <div className="w-full h-1/2 md:w-1/2 p-2 md:p-8 border-4 rounded-lg border-dashed border-slate-950">

        <div className="flex w-full justify-start ">
          <div className="md:w-1/4 text-center justify-start items-center">
            <label className="block text-gray-500 font-bold mt-2" htmlFor="inline-password">
              Select the key size:
            </label>
          </div>
          <div className="md:w-3/4">
            <select
              id="keysize"
              value={keysize}
              onChange={handleKeySizeChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            >
              <option value="" disabled selected>Select an option</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
            </select>
          </div>
        </div>



        <div className="mb-6 md:flex flex justify-center md:items-center mt-10">
          <div className="m-auto">
            {errorMessage1 && <div>Error: {errorMessage1}</div>}
            {!keysGenerated && (
              <button
                onClick={handleGenerateKeys}
                disabled={keysGenerated}
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4  rounded" type="button">
                Generate keys
              </button>
            )
            }
          </div>
        </div>

        <div className="mb-6">
          <div className="">
            <label className="block text-gray-500 font-bold " htmlFor="dataset">
              Choose the dataset:
            </label>
          </div>
          <div className="w-auto mx-auto mt-2">
            <select
              id="dataset"
              value={selectedDataset}
              onChange={handleDatasetChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            >
              <option value="" disabled selected>Select an option</option>
              <option value="iris">Iris</option>
              <option value="breast-cancer">Breast Cancer</option>
              <option value="arrhythmia">Arrhythmia</option>
            </select>
          </div>
        </div>


        <div className="md:flex flex justify-center md:items-center mt-10">
          <div className="m-auto">
            {errorMessage2 && <div>Error: {errorMessage2}</div>}
            <button
              onClick={handleEncrypt}
              disabled={loading2}
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4  rounded" type="button">
              Encrypt
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default OwnerPage;
