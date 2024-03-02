import { useState } from "react";
import style from "./Navbar.module.css";
import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [isActive, setActive] = useState<boolean>(false);
  function handleClick(): void {
    setActive((previuous) => !previuous);
  }
  return (
    <nav style={{ color: "#fff" }} className={style.nav}>
      <div className={style.logo}>sunnyside</div>
      {isActive ? (
        <ImCross className={style.hamburger} onClick={handleClick} />
      ) : (
        <IoMenu className={style.hamburger} onClick={handleClick} />
      )}
      <ul className={`${style.manuList} ${isActive ? style.active : " "}`}>
        <li>About</li>
        <li>Service</li>
        <li>Projects</li>
        <li>
          <button className={style.button}>Conteact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
