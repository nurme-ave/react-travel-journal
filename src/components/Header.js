import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header-container">
      <FontAwesomeIcon icon={ faEarthAmericas } className="header-icon"/>
      <h1>My Travel Journal</h1>
    </header>
  )
}

export default Header;