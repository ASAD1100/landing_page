import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navLogo">EV-olution</div>
      <ul className="navMenu">
        <li>home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
      
    </div>
  )
}

export default Navbar
