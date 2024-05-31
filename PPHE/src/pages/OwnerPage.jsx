

const OwnerPage = () => {
    return (
      <div className="flex flex-col gap-6 w-full min-h-screen justify-center items-center p-2">
        <h1 className="lg:text-4xl md:text-3xl text-2xl ">Add a Dataset</h1>
          <form className="w-full h-1/2 md:w-1/2 p-2 md:p-8 border-4 rounded-lg border-dashed border-slate-950">
    <div className="mb-6 md:flex flex justify-center md:items-center mt-10">
      <div className="m-auto">
        <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4  rounded" type="button">
          Generate keys
        </button>
      </div>
    </div>
    {/* <div className="mb-6">
      <div className="">
        <label className="block text-gray-500 font-bold " htmlFor="dataset">
          Choose the dataset: 
        </label>
      </div>
      <div className="w-auto mx-auto mt-2">
      <select
        id="dataset"
        // value={value}
        // onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
      >
        <option value="" disabled selected>Select an option</option>
        <option value="iris">Iris</option>
        <option value="breast-cancer">Breast Cancer</option>
        <option value="arrhythmia">Arrhythmia</option>
      </select>
    </div>
    </div> */}
    <div className="flex w-full justify-start ">
      <div className="md:w-1/4 text-center justify-start items-center">
        <label className="block text-gray-500 font-bold mt-2" htmlFor="inline-password">
          Select the key size:
        </label>
      </div>
      <div className="md:w-3/4">
      <select
        id="dataset"
        // value={value}
        // onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
      >
        <option value="" disabled selected>Select an option</option>
        <option value="512">512</option>
        <option value="1024">1024</option>
      </select>
      </div>
    </div>
    <div className="md:flex flex justify-center md:items-center mt-10">
      <div className="m-auto">
        <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4  rounded" type="button">
          Encrypt
        </button>
      </div>
    </div>
  </form>
  
        
      </div>
    )
  }
  
  export default OwnerPage;
  