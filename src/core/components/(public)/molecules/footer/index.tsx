import { menuFooter } from "@/menu";
import { Title } from "@/core/components/(public)/atoms/title";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-10 py-12 lg:px-30 2xl:px-100 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-center space-x-20">
        <ul className="font-hedvig">
          <Title
            title="Recurso"
            as="h3"
            className="font-normal! text-lg! mb-6 font-h font-poppins!"
          />
          {menuFooter.slice(0, 3).map((menu) => (
            <li
              key={menu.id}
              className="text-zinc-800 font-semibold! text-sm! my-3.5"
            >
              {menu.label}
            </li>
          ))}
        </ul>
        <ul className="font-hedvig">
          <Title
            title="Informaçao"
            as="h3"
            className="font-normal! text-lg! mb-6 font-poppins!"
          />
          {menuFooter.slice(3, 6).map((menu) => (
            <li
              key={menu.id}
              className="text-zinc-800 font-semibold! text-sm! my-3.5"
            >
              {menu.label}
            </li>
          ))}
        </ul>
        <ul className="font-hedvig">
          <Title
            title="Legal"
            as="h3"
            className="font-normal! text-lg! mb-6 font-poppins!"
          />
          {menuFooter.slice(6, 8).map((menu) => (
            <li
              key={menu.id}
              className="text-zinc-800 font-semibold! text-sm! my-3.5"
            >
              {menu.label}
            </li>
          ))}
        </ul>
        <Image
          alt="chat-footer"
          width={300}
          height={300}
          src="/chat-footer.svg"
          className="w-84"
        />
      </div>
    </footer>
  );
};

export { Footer };
