import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-5 md:pl-20 pb-5 md:pb-20 flex flex-col gap-3 md:gap-5 z-10 max-w-screen-md">
          <h1 className="text-lg md:text-2xl text-white font-semibold">
            Illuminate the Future with Innovative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Electronics Solutions
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <Link
              href="/my-skills"
              className="rounded-full group relative bg-blue-500 hover:bg-blue-400 px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-full group relative bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[200px]"
            >
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-full group relative bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[200px]"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-5 md:bottom-10 z-20 right-5 flex-col gap-3 md:gap-5">
        <Link
          href="/my-skills"
          className="rounded-full group bg-blue-500 px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-full group bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-full group bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-30">
        <Image
          src="/rr.png"
          alt="horse"
          height={150}
          width={150}
          className="absolute right-5 bottom-5 md:bottom-10"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>
      <div className="absolute bottom-0 z-10 w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={150}
        width={150}
        className="absolute top-0 left-0 z-20"
      />
    </main>
  );
}
