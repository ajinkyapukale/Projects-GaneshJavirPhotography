import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between bg-gray-800 text-yellow-500 text-xl">
        <div className=" font-bold">
          <img
          className="w-60 h-40  -my-10 pb-6 "
          src='https://i.postimg.cc/L5nzphdk/Logo-2.png'
          />
        </div>
        <div >
            <ul className="flex flex-wrap m-4 p-2 font-semibold">
                <li className="mx-3 hover:text-blue-300"><Link to="/">HOME</Link></li>
                <li className="mx-3 hover:text-blue-300"> <Link to="/portfolio"> PORTFOLIO </Link></li>
                <li className="mx-3 hover:text-blue-300"> <Link to="/about"> ABOUT US</Link></li>
                <li className="mx-3 hover:text-blue-300"> <Link to="/contact">CONTACT US </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;