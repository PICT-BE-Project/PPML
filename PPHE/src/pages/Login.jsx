import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const [checked, setChecked] = useState(false);
  const [secretKey, setSecretKey] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e)=>{
    setEmail(e.target.value);
  };

  const handlePassChange = (e)=>{
    setPassword(e.target.value);
  };


  const handleKeyChange = (e)=>{
    setSecretKey(e.target.value);
}

const handleLoginSubmit = async (event) => {
  event.preventDefault();
  if(checked){
    if(secretKey === '123456'){
      try {
        const response = await axios.post('http://localhost:3839/api/login', { email, password });
        if(response)alert('Admin logged in successfully !!!');
        const user = await axios.get(`http://localhost:3839/api/get/${email}`);
        setEmail('');
        setPassword('');
        secretKey('');
        navigate('/owner');
        Cookies.set('user', encodeURIComponent(JSON.stringify(user.data.users[0])), { expires: 7 }); // Cookie expires in 7 days
        return;
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.message);
        } else {
          alert('An error occurred. Please try again.');
        }
      }
    }
    else{
      alert('Wrong secret key !!!');
      return;
    }
  }
  else{
    try {
      const response = await axios.post('http://localhost:3839/api/login', { email, password });
      if(response)alert('User logged in successfully !!!');
      const user = await axios.get(`http://localhost:3839/api/get/${email}`);
      setEmail('');
      setPassword('');
      navigate('/user');
      Cookies.set('user', encodeURIComponent(JSON.stringify(user.data.users[0])), { expires: 7 });  // Cookie expires in 7 days
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  }
};

const handleCheckedChange = (event) => {
  setChecked(event.target.checked);
};



  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg border max-w-sm lg:max-w-4xl w-full">
        <div
          className="flex w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <form className="w-full p-8 lg:w-1/2" onSubmit={handleLoginSubmit}>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              value={email}
              name="email"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              value={password}
              name="password"
              onChange={handlePassChange}
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-4 flex flex-col">
            <div className="flex justify-start text-center">
            <input
              className="text-gray-700 border mb-2 mr-4 border-gray-300 rounded py-2 px-4 block focus:outline-2 focus:outline-blue-700"
              type="checkbox" value={checked} onChange={handleCheckedChange}
            />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                IsAdmin?
              </label>
            </div>
          </div>
          {
            checked &&
            (
              <div className="mt-4 flex flex-col">
            <div className="flex justify-start text-center">
            <input
              className="text-gray-700 border mb-2 mr-4 border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password" name="secretkey" value={secretKey} placeholder="Enter secret key " onChange={handleKeyChange}
            />
            </div>
          </div>
            )
          }
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" type="submit">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="/signup"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
