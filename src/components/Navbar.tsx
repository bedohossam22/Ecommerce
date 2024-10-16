
import { NavLink } from 'react-router-dom'
import { MdHomeFilled, MdCategory , MdContacts , MdShop2} from 'react-icons/md'
  const Navbar = ({containerStyle} : any) => {
  return (
    <nav className={`${containerStyle}`}>
        <NavLink to={'/'}    className={({isActive} : any) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdHomeFilled/>Home</div></NavLink>
        <NavLink to={'/mens'}   className={({isActive} : any) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdCategory/>Men's</div></NavLink>
        <NavLink to={'/womens'}  className={({isActive} : any) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdShop2/>Women's</div></NavLink>
        <NavLink to={'/kids'} className={({isActive} : any) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdContacts/>kid's</div></NavLink>
    </nav>
  )
}


export default Navbar