import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-indigo-900 text-white pl-4 pr-4">
      <div className="logo_img">
        <img
          src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
          alt=""
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      <ul className="flex gap-4 hover:bg-fuchsia-600 duration-300 hover:text-black">
        <li>Home</li>
        <li>Your Tasks</li>
      </ul>
      <div className="button">
      <button className="bg-black p-2 rounded">BUTTON</button>
      </div>
    </nav>
  );
}

export default Navbar;
