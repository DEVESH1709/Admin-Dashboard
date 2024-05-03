import './Navbar.scss'
import { useState} from 'react';
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
 
  
  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);}
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg"></img>
            <span>DevAdmin</span>
        </div>
        <div className="icons"> 
        <img src="/search.svg" alt="" className='icon' onClick={handleSearchIconClick}></img>
      {isSearchOpen && (
        <div className="search-bar">
          {/* Your search bar component goes here */}
          <input type="text" placeholder="Search..." />
          {/* Additional search functionality */}
          {/* <button>Search</button> */}
        </div>
      )}
   
   
        <img src="/app.svg" alt="" className='icon'></img>
        <img src="/expand.svg" alt=""  className='icon' ></img>

        <div className="notification">
            <img src="/notifications.svg" alt=""></img>
            <span>1</span>
        </div>
        <div className="user">
            <img src="https://media.licdn.com/dms/image/D5603AQFn2DEPrEuFdA/profile-displayphoto-shrink_100_100/0/1703313243741?e=1715212800&v=beta&t=TiNJQ0B00m9J96953VItsXD_2QNADoP95ywAKg1f4Og" alt="" ></img>
            <span>Devesh</span>
        </div>
        <img src="/setting.svg" alt=""></img>

        
        
        
        
        </div>
    </div>
  )
}

export default Navbar