import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6 ">
   
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="w-10 h-10"/>
        <FaGithub className="w-10 h-10"/>
    </div>
  </nav>
}

export default Navbar