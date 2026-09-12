import logo from "../assets/logo-text.png";

export default function Nav() {
  return (
    <header className="w-full fixed top-0 z-50">
      <nav className= "container mx-auto bg-blue-100 h-16 px-4 flex justify-between items-center">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-32"
        />

        {/* Menu */}
        <ul className="flex gap-4 items-center">
          <li className="  rounded-2xl p-2 text-black font-bold hover hover:bg-blue-300">Home</li>
          <li className="  rounded-2xl p-2 text-black font-bold hover hover:bg-blue-300">Technologies</li>
          <li className="  rounded-2xl p-2 text-black font-bold hover hover:bg-blue-300">Projects</li>
          <li className=" rounded-2xl p-2 text-black font-bold hover hover:bg-blue-300">About</li>
          <li className=" rounded-2xl p-2 text-black font-bold hover hover:bg-blue-300">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-2 items-center">
          <button className=" border border-2 border-fuchsia-600 rounded-2xl p-2 text-black font-bold hover hover:bg-red-300">Sign In</button>
          <button className=" bg-red-400 border border-2 border-fuchsia-600 rounded-2xl p-2 text-white font-bold hover hover:bg-red-300">Sign Up</button>
        </div>

      </nav>
    </header>
  );
}