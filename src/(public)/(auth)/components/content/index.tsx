import Image from "next/image";

const Content = () => {
  return (
    <main className="flex-1 flex items-center justify-between">
      <div></div>
      <Image
        alt="chat-auth"
        src="/chat-auth.svg"
        width={300}
        height={300}
        quality={100}
        loading="lazy"
        className="w-142"
      />
    </main>
  );
};

export { Content };
