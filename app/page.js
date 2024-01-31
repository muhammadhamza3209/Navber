import Image from "next/image";

import { FaBars } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <nav>
        <div class="logo">brand</div>
        <input type="checkbox" id="click" />
        <label for="click">
          <FaBars className="text-2xl" />
        </label>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contect</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
