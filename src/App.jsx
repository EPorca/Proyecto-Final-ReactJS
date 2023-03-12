import './App.css';
import { ItemListContainer, LogoComponent, NavBarComponent} from './components';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



function App() {
    return (
        <div>
            <div>
                <NavBarComponent/>
            </div>
            <div>
                <ItemListContainer/>
            </div>
        </div>
        
    )
}

export default App;
