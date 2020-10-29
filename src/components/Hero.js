import React from "react"
import { Link } from "gatsby"
// import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline">
              <h1>Hi! I'm Pooja</h1>
              <h4>I'm an enthusiastic Web Developer</h4>
              <Link to="/contact" className="btn">
                Contact
              </Link>
              {/* <SocialLinks /> */}
            </div>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
