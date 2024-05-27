import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/lucas-viola1/", "_blank");
  };

  const handleClickGitHub = () => {
    window.open("https://github.com/Lucas-vla", "_blank");
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="#" onClick={handleClickLinkedIn}>
          <FaLinkedin className="w-10 h-10" />
        </a>

        <a href="#" onClick={handleClickGitHub}>
          <FaGithub className="w-10 h-10" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
