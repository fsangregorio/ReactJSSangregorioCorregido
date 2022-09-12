import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../logo1.jpg';
import CartWidget from '../components/CartWidget.jsx';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src={logo1} alt="Logo" width = '10%'/>
          <Link to="/">Inicio</Link>
          <br />
          <Link to="/categoria/picada">Picadas</Link>
          <br />
          <Link to="/categoria/cerveza">Cervezas</Link>
          <br />
        <div>
          <CartWidget/>
        </div>
        </Container>
      </Navbar> 
    </>
);
}
export default NavBar;