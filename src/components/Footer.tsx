import { FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className=" w-full py-2 px-4 text-sm backdrop-blur-md bg-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
        <p className="text-center sm:text-left">Feito com ❤️ por fãs da Ado</p>
        <div className="flex gap-4 text-xl">
          <a
            href="https://twitter.com/Redraax"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/lucasmarques2907"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
