import '../App.css';
// import xiaomi from '../assets/images/xiaomi-14-banner.png';

const Home = () => {
  return (
    <>
    <div className='min-h-screen flex w-screen'>
      <div className='flex flex-col md:flex-row justify-evenly items-center w-full md:p-6 p-2 m-auto'>
        <div className='flex flex-col w-full text-center md:w-1/2 '>
          <h1 className='text-3xl md:text-4xl font-medium typing'>Welcome to Encryptix</h1>
          <h2 className='mt-3 text-lg md:text-xl font-normal'>Revolutionize Data Security in ML</h2>
          <h3 className='mt-3 text-xl md:text-lg font-normal'>Secure, Encrypt, and Analyze with Advanced Algorithms</h3>
        </div>
        <div className='flex w-full md:w-1/2 items-center justify-center'>
        <iframe src="https://lottie.host/embed/b461d52f-1580-4991-8086-13cfd7f54873/X14QYhZSYn.json" className='w-full lg:w-auto' style={{ width: '100%', height: '500px', border: 'none' }}></iframe>
        </div>
        
    
      </div>
    </div>
    </>
    
  )
}

export default Home
