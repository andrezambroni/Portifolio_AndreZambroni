import "./style.css";
import "../global.css";

// import LogoAZ from "../svg/logoAZ.js";

export function Header() {
  return (
    <header>
      <nav>
        <div className="header_left">
        <button type="button" id="hamburger-menu">
        <i class="fas fa-bars"></i>
      </button>
          <p>GitHub</p>
          <p>Linkedin</p>
          <p>Outros Links</p>
        </div>

        <div className="header_right">
          <ul className="menu">
            <li>
              <a href="#">Sobre Mim</a>
            </li>
            <li>
              <a href="#">Experiencia</a>
            </li>
            <li>
              <a href="#">Habilidades</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Currículo</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
