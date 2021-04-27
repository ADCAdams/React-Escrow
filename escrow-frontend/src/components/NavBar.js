import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/contracts' style={{paddingRight: '20px'}}>Contracts  </Link>
      <Link to='/contracts/new'> Add Contract</Link>
    </div>

  )
}

export default NavBar