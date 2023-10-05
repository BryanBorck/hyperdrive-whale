export default function Footer() {
  return (
    <div className="bg-blue-color p-4 h-[280px] w-full text-center text-white">
      <p className="mb-2">© 2023 Mar Finance</p>
      <nav>
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          About Us
        </a>
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          Services
        </a>
        <a href="#" className="mx-2 text-gray-400 hover:text-white">
          Contact Us
        </a>
      </nav>
    </div>
  );
};