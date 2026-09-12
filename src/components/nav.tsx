
import logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="container mx-auto h-16 bg-blue-100 px-4 flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-28 sm:w-32"
        />

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-4">
          <li className="rounded-2xl p-2 text-black font-bold hover:bg-blue-300 cursor-pointer">
            Home
          </li>

          <li className="rounded-2xl p-2 text-black font-bold hover:bg-blue-300 cursor-pointer">
            Technologies
          </li>

          <li className="rounded-2xl p-2 text-black font-bold hover:bg-blue-300 cursor-pointer">
            Projects
          </li>

          <li className="rounded-2xl p-2 text-black font-bold hover:bg-blue-300 cursor-pointer">
            About
          </li>

          <li className="rounded-2xl p-2 text-black font-bold hover:bg-blue-300 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-1 sm:gap-2 items-center">
          <button className="border-2 border-fuchsia-600 rounded-2xl px-2 sm:px-3 py-2 text-sm sm:text-base text-black font-bold hover:bg-red-300">
            Sign In
          </button>

          <button className="bg-red-400 border-2 border-fuchsia-600 rounded-2xl px-2 sm:px-3 py-2 text-sm sm:text-base text-white font-bold hover:bg-red-300">
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
}
