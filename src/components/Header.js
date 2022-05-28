import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="container">
      <FontAwesomeIcon icon={ faEarthAmericas } className="icon"/>
      <h1>My Travel Journal</h1>
    </header>
  )
}

export default Header;