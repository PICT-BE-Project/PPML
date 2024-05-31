import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    // { title: 'Services', url: '/services' },
    { title: 'Query', url: '/user' },
    { title: 'Login', url: '/login' }
];

const iconList = [
    { icon: <FaUser /> },
];

const bgColor = 'bg-gray-950';
const modalColor = 'bg-gray-950';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loc, setLoc] = useState();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const location = useLocation();




    const currentUser = ()=>{
        console.log(loc);
        const userCookie = Cookies.get('user'); // Get the cookie value
        if(!userCookie)
        {  if(loc !== '/login' || loc !== '/signup')
           { 
              setLoggedIn(false); 
            }
        }
        const newUser = userCookie ? JSON.parse(decodeURIComponent(userCookie)) : null; // Decode and parse the JSON string
        setUser(newUser);
        setLoggedIn(true);
    }

    const deleteCookie = (cookieName) => {
        Cookies.remove(cookieName);
        console.log(`${cookieName} cookie has been deleted.`);
    };

    const logoutUser = () => {
        deleteCookie('user'); // Delete the 'user' cookie
        navigate('/'); // Redirect to login page
        setLoggedIn(false);
      };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };

    useEffect(()=>{
        setLoc(location.pathname);
        currentUser();
        const intervalId = setInterval(currentUser, 5000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
    },[]);

    return (
        <>
            {!isMobile ? (
                // Laptop Navbar Code Here
                <nav className={`h-auto ${bgColor} py-4`}>
                    <div className="flex justify-between mx-auto items-center py-4 px-24">
                        <div className="text-white flex flex-row items-center font-bold text-3xl"><iframe src="https://lottie.host/embed/81edd3a1-b563-4cd5-b86f-c84ec1424cbe/3eiAg4BFP8.json" style={{ width: '30%',marginRight:"-10px", height: '50px', border: 'none' }}></iframe>Encryptix</div>
                        <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                            {navLinks.map((link, index) => (
                                (link.title !== 'login') ? (
                                <NavLink 
                                key={index} 
                                to={link.url} 
                                className={({ isActive }) => isActive ? "text-white text-sm active" : "text-white text-sm"}
                              >
                                <li className='hover:border-y-slate-200 hover:border-b-2'>{link.title}</li>
                              </NavLink>
                                ):
                                ((loggedIn == true) ? (<NavLink 
                                    key={index} 
                                    to={'/'} 
                                    className={({ isActive }) => isActive ? "text-white text-sm active" : "text-white text-sm"}
                                  >
                                    <li className='hover:border-y-slate-200 hover:border-b-2' onClick={logoutUser}>Logout</li>
                                  </NavLink>):
                                  (<NavLink 
                                    key={index} 
                                    to={'/login'} 
                                    className={({ isActive }) => isActive ? "text-white text-sm active" : "text-white text-sm"}
                                  >
                                    <li className='hover:border-y-slate-200 hover:border-b-2'>Login</li>
                                  </NavLink>))

                            ))}
                        </ul>
                        <ul className="flex text-white gap-2 items-center cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index}>{item.icon}</div>
                            ))}
                            <span className='text-slate-50 font-medium text-lg'>{user?.firstname}</span>
                        </ul>
                    </div>
                </nav>
            ) : (
                // Mobile Navbar Code Here
                <nav className={`h-auto ${bgColor} py-6 px-4`}>
                    <div className="mx-auto flex justify-between items-center ">
                        <div className="text-white font-bold text-2xl">PPHE</div>
                        <div className="flex justify-end items-center gap-2 text-white cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index}>{item.icon}</div>
                            ))}
                            <span className='text-slate-50 font-normal text-lg mr-2'>{user?.firstname}</span>
                            <FaBars onClick={handleBarsIconClick} className="text-white cursor-pointer" />
                        </div>
                        
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 flex justify-center items-center">
                            <div className={`absolute inset-0 ${modalColor}`} />
                            <FaTimes
                                className="absolute m-2 top-6 right-4 text-white cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            />
                            <div className="relative bg-gray-950 w-full">
                                <div className="flex flex-col gap-8 items-center justify-center h-full">
                                    {navLinks.map((link, index) => (
                                        <NavLink 
                                key={index} 
                                to={link.url} 
                                className={({ isActive }) => isActive ? "text-white font-light text-2xl cursor-pointer active" : "text-white text-2xl"}
                              >
                                <li onClick={toggleModal} className='list-none hover:border-y-slate-200 hover:border-b-2'>{link.title}</li>
                              </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}

export default Navbar;

