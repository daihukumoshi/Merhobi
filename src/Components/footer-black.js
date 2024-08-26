import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';


export default function FooterBlack() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <footer>
        <Link 
          to="/community"
          onClick={() => handleClick('community')}
          className={`community-white black-component component ${activeLink === 'community' ? 'active' : ''}`}
        >
         <svg className='black-fill' width="32" data-e2e="" height="32" viewBox="0 0 48 48" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path></svg>
        <p>Community</p>
        </Link>
        <Link 
          to="/discover"
          onClick={() => handleClick('discover')}
          className={`black-component component ${activeLink === 'discover' ? 'active' : ''}`}
        ><svg
        className='black-stroke' 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="none" 
        stroke="#000" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    
            <p>Discover</p>
        </Link>
        <Link 
          to="/postswitcher"
          onClick={() => handleClick('postswitcher')}
          className={`black-component component ${activeLink === 'postswitcher' ? 'active' : ''}`}
        >
            <svg 
            className='black-stroke'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="none" 
            stroke="#000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>

            <p>Sell</p>
        </Link>
        <Link 
          to="/myprofile"
          onClick={() => handleClick('myprofile')}
          className={`black-component component ${activeLink === 'myprofile' ? 'active' : ''}`}
        >
          <div width="24" height="24" font-size="24" class="css-1jz9tkv-DivIconPaddingContainer e14l9ebt17"><svg className='balck-fill' width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"></path></svg></div>
            <p>Me</p>
        </Link>
    </footer>
  );
}
