import {Link, NavLink } from 'react-router-dom'
import './index.scss'
import MyLogoS from '../../assets/images/MyLogoS.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub,faTwitter,} from '@fortawesome/free-brands-svg-icons'



const TopBar = () => (
    <div className='mynav-bar'>
        <Link className="MyLogo" to="/">
            <img src={MyLogoS} alt="MyLogo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome}  color="red" />
            </NavLink>
           
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser}  color="red" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" >
                <FontAwesomeIcon icon={faFolderOpen}  color="red" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/S0deinde/">
                    <FontAwesomeIcon icon={faLinkedin} color="red"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/S0DEINDE">
                    <FontAwesomeIcon icon={faGithub} color="red"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/s0deinde">
                    <FontAwesomeIcon icon={faTwitter} color="red"/>
                </a>
            </li>
        </ul>

    </div>
)

export default TopBar;