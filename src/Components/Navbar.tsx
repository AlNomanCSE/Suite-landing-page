import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav style={{ color: "#fff" }} className={style.nav}>
      <div className={style.logo}>sunnyside</div>
      <ul className={style.manuList}>
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
