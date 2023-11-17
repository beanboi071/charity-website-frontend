import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { decodeToken } from "react-jwt";

export const Navbar = () => {
  const [userType, setUserType] = useState();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const decodedToken = decodeToken(localStorage.getItem("token"));
    setUserType(decodedToken.UserType);
  }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/Login");
  };

  const handleMouseDown = (event) => {
    if ( ref1.current && ref2.current && !ref1.current.contains(event.target) && !ref2.current.contains(event.target)) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div>
      <div className="Navbar z-50 fixed top-0 flex w-full h-[7vh] bg-lime-200 flex items-center justify-between">
        <div>
          {/* Your search bar code here if needed */}
        </div>
        <div className="navItems h-full w-1/2 mr-[20px] flex justify-end items-center">
          <div className="w-[80px] flex justify-center">
            <Link className="text-darkText" to={(userType === 0) ? "/Donor/Home" : "/NGO/Home"}>Home</Link>
          </div>
          {userType === 0 && (
            <div className="w-[100px] flex justify-center">
              <Link className="text-darkText" to={"/Home"}>Non-profits</Link>
            </div>
          )}
          {userType === 0 ?
            <div className="w-[80px] flex justify-center">
              <Link className="text-darkText" to={"/Donor/Projects"}>Projects</Link>
            </div>
            :
            <div className="w-[100px] flex justify-center">
              <Link className="text-darkText" to={"/NGO/MyProjects"}>My Projects</Link>
            </div>
          }
          <div className="mr-3 hover:cursor-pointer" onClick={() => setIsShown(!isShown)} ref={ref1}>
            <IconContext.Provider value={{ size: 30 }}>
              <FaRegUserCircle className="text-darkText" />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="mb-[50px]"></div>
      {isShown && (
  <div className="bg-lime-200 z-10 py-1 w-48 border-solid border-l-2 transition ease-in-out duration-200 border-b-2 right-0 fixed border-quaternary" ref={ref2}>
    <p className="w-full py-2 text-center hover:cursor-pointer">
      {userType === 0 ?
      <Link className="text-darkText" to={"/Donor/Profile"}>Profile</Link>:
      <Link className="text-darkText" to={"/NGO/Profile"}>Profile</Link>
    }
      
    </p>
    <p className="w-full py-2 text-center hover:cursor-pointer">
      <Link className="text-darkText" to={"/ChangePassword"}>Change Password</Link>
    </p>
    <p onClick={() => logOut()} className="w-full py-2 text-center hover:cursor-pointer">Log Out</p>
  </div>
)}
    </div>
  );
};
