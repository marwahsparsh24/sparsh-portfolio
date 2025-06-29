import { Link } from "react-scroll";

function Navbar() {
  const navItems = ["About", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center">
      {/* Clickable Name to Scroll to Top */}
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        className="text-orange-500 font-bold text-lg cursor-pointer hover:text-orange-400"
      >
        Sparsh Marwah
      </Link>

      {/* Navigation Labels */}
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active-link"
            className="text-orange-400 font-bold hover:text-orange-300 transition cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
