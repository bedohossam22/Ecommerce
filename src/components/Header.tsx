import { Link } from 'react-router-dom';
import logo from "../ASSETS/frontend/assets/logo.svg"
import Navbar from './Navbar';
import { useContext, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import user from "../ASSETS/frontend/assets/user.svg"
import { NavLink } from 'react-router-dom';

import { FaOpencart } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';
function header() {
const [menuOpened, setMenuOpened] = useState(false);
const toggleMenu = () => setMenuOpened(!menuOpened);
const {getTotalCartItems} = useContext(ShopContext); 
/*   */
  return (
   
    <header className=' fixed top-0 left-0 m-auto   w-full bg-white ring-1 ring-slate-900/5 z-40'>
      <div className='px-4 flexBetween py-3 max-xs:px-2 max_padd_container'>
          <div>
            <Link><img src={logo} alt='' height={66} width={88}></img></Link>
          </div>
          <Navbar containerStyle={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
          <Navbar containerStyle = {`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>
          <div className='flexBetween  sm:gap-x-2 bold-16'>
            {!menuOpened? (
              <MdMenu className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggleMenu}/>
            ) : ( 
              <MdClose className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggleMenu}/>
            )}
            <div className='flexBetween sm:gap-x-6'>
              <NavLink to={"cart-page"} className={"flex"}><FaOpencart className='p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full'/><span className='relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2'>{getTotalCartItems()}</span></NavLink>
        {/*   <NavLink to={'logout'} className={"btn_secondary_rounded flexCenter rounded-2xl gap-x-2 medium-16"}><img src={logout} alt='logoutIcon' height={19} width={19}></img>Logout</NavLink> */}
          <NavLink to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 rounded-2xl"}><img src={user} height={19} width={19}></img>Login</NavLink>
            </div>
          </div>
      </div>
    </header>
   
  )
}

export default header
