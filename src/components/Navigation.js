import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize';
import { useContext } from 'react'; 
import { ThemeContext } from './ThemeContext';

export default function Navigation() {  
  const { theme, toggle, dark } = useContext(ThemeContext)
    return (   
      
      <Navbar className='menu'
      alignLinks="right"
      brand={<span className="brand-logo">Player Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      >
            <ul>
            <li><Link to='/'><Icon left></Icon> Home</Link></li>
            <li to='/about'><Link to='/about'><Icon left></Icon> About</Link></li>
            <li to='/news'><Link to='/news'><Icon left></Icon> News</Link></li>
            <li to='/contact'><Link to='/contact'><Icon left ></Icon> Contact</Link></li>
        
            </ul>
      </Navbar>

//       <div className='nav-bar' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//       <nav >
//           <ul style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//               <li><a style={{color: theme.color }} className='active' href='#home'>Home</a></li>
//               <li><a style={{color: theme.color }} href='#news'>News</a></li>
//               <li><a style={{color: theme.color }} href='#about'>About</a></li>
//               <li><a style={{color: theme.color }} href='#contact'>Contact</a></li>
//               <li>
//                 <div className='switch-mode-button'>
//                 <a className='switch-mode' href='#1' onClick={toggle}
//           style={{
//             backgroundColor: theme.backgroundColor,
//             color: theme.color,
//             outline: 'none',
//             textDecoration: 'none'
//           }} data-testid="toggle-theme-btn"
//         >
//           Switch Nav to {!dark ? 'Dark' : 'Light'} mode
//          </a>
//          </div>
//          </li>
// </ul>



//       </nav>
//       </div>
  )

    
}