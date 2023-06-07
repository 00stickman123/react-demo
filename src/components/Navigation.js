import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Navigation() {  
  const { theme, toggle, dark } = useContext(ThemeContext)
    return (     
      <div className='nav-bar' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <nav >
          <ul style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
              <li><a style={{color: theme.color }} className='active' href='#home'>Home</a></li>
              <li><a style={{color: theme.color }} href='#news'>News</a></li>
              <li><a style={{color: theme.color }} href='#about'>About</a></li>
              <li><a style={{color: theme.color }} href='#contact'>Contact</a></li>
              <li>
                <div className='switch-mode-button'>
                <a className='switch-mode' href='#1' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none',
            textDecoration: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
         </li>
</ul>

         
      
      </nav>
      </div>
  )

    
}