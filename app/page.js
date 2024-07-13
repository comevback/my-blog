import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="bg-[url('/album/bg2.jpg')] bg-cover bg-bottom bg-no-repeat bg-blend-darken min-h-screen flex flex-col items-center justify-center">

        <div className="text-8xl font-bold text-black">Welcome</div>
        <ul className="h-88 overflow-auto flex flex-col mb-10 p-10 gap-6 text-black font-bold text-3xl rounded-lg">
          <li className="hover:text-white transition duration-300">
            <Link href="/afterlife">Afterlife</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link href="/seaburial">SeaBurial</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <a href="https://quaint-fascinator-7a3.notion.site/DSA-memos-ef3bd2078fda4d8281a406e8989215af?pvs=4">Blog</a>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-white transition duration-300">
            <Link href="/timeCheck">Time Check</Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Home;