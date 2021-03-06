import React, {useContext} from 'react'
// import {firebaseAuth} from '.../Provider/AuthProvider'
import Select from 'react-select'
import './navbar.css'

const Navbar = ({option, handleChange}) => {

    const options = [
        { value: 'hardware_store', label: 'Hardware Shops' },
        { value: 'electronics_store', label: 'Electronics' },
        { value: 'furniture_store', label: 'Furniture Shops' },
        { value: 'plumber', label: 'Plumber' },
        { value: 'painter', label: 'Painter' },
        { value: 'roofing_contractor', label: 'Roofing Contractor' },
      ]; 

     // Destructure Sign out
    // const {signout,} = useContext(firebaseAuth)
      

    return(
        <div className='navbar'>
            <div className="header">
                <h4 className='logo'>constiFinder </h4>
                <Select className='dd-wrapper'
                    value={option}
                    onChange={handleChange}
                    options={options}
                />
                <nav>
                    <ul className='nav_links'>
                        <li><a href='/'>Help</a></li>
                        <li><a href='/'>Logout</a></li>
                    </ul>
                </nav>
                {/* <a href='/'><button>User</button></a> */}
            </div>
        </div>
     )
    console.log(option)
}
export default Navbar