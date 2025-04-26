import React from 'react'
import './Header.css'
import headerImg from '../../assets/header_img.png' // Import the image properly

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolorem dolores minus nam quia accusantium reiciendis aperiam porro commodi. A autem praesentium libero, corrupti soluta ratione quis esse dolorum temporibus minima voluptatibus fugit inventore! Quo error perspiciatis consequatur qui aliquam.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header