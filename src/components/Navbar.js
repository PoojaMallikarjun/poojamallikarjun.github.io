import React from "react"
import { GrList } from "react-icons/gr"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <h1>Pooja Mallikarjun</h1> */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <GrList></GrList>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
