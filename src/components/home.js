import React from 'react';
import { FaBars} from 'react-icons/fa';
import './home.css';
import { useGlobalContext } from '../context';

const Home =() => {
  const {openSidebar,openModal} = useGlobalContext();

  
  return (
    <>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars />
     
    </button>

   
    </>
  )
}

export default Home;