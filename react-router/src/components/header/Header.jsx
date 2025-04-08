import { Link } from 'react-router'; // Importação do componente Link

const Header = () => {
  return (
    // Início da barra de navegação
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo ou título da aplicação */}
        <Link className="navbar-brand" to="/">React Router</Link>

        {/* Botão para alternar o menu em telas menores */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegação */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Link para a página inicial */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* Link para a página About */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {/* Link para a página Contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // Fim da barra de navegação
  );
};

export default Header; // Exportação do componente Header