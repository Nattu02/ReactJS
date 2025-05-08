import { LOGO_URL } from '../utils/constants';

const Header = () =>(
    <div className="header">
        <div className="logo-container">
            <img src={LOGO_URL} className="logo" alt="Logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header; 