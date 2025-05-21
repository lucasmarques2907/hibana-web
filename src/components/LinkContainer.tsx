import { FaLink } from "react-icons/fa";

interface Props {
  nome: string;
  link: string;
  Icon?: React.ElementType;
}

const LinkContainer = ({ nome, link, Icon = FaLink }: Props) => {
  return (
    <div className="flex items-center gap-4 bg-gray-800 shadow-md outline outline-black/5 my-3 p-2 w-full max-w-2xl bg-gray-900 rounded-md">
      {/* Icone */}
      <span className="inline-flex shrink-0 rounded-full border border-blue-300 bg-blue-100 p-2 dark:border-blue-300/10 dark:bg-blue-400/10">
        <Icon className="w-4 h-4 text-blue-500" />
      </span>

      {/* Conteudo */}
      <div className="text-start">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="black mt-1 text-blue-400 hover:underline text-sm"
        >
          {nome}
        </a>
      </div>
    </div>
  );
};

export default LinkContainer;
