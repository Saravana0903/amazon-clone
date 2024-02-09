import React from 'react'
import './Header.css'
//import SearchIcon from "@material-ui/icons/Search"
//import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import { auth } from "./firebase"

function Header() {
  const [{basket,user}, dispatch] = useStateValue()
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  const searchProduct = (event) => {
      dispatch({
       type:"SEARCH_PRODUCT",
       item: event.target.value
     })
  }

  return (
    <div className='header'>
      <Link to="/">
      <img className="header__logo"
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
       alt="amazon"
       />
       </Link>

<div className="header__search">
        <input className="header__searchInput" type="text" onChange={searchProduct}/>
        {/*<SearchIcon className="header__searchIcon" />*/}
      </div>

      <div className="header__nav">
        <Link to={!user ? '/login' : '/'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Add to</span>
          <span className="header__optionLineTwo">Cart</span>
        </div>

        
         <Link to="/checkout">
          <div className="header__optionBasket">
            {/*<ShoppingBasketIcon />*/}
            <span className="header__optionLineTwo header__basketCount">
              {basket&&basket.length}
            </span>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Header
