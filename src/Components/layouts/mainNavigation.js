import { Link } from 'react-router-dom'
import './style.css'
function MainNavigation() {
    return (
        <header className="header">
            <div>
                Muhammad Hannan Raja
        </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to='/EducationalBackground'> Educational Background </Link>
                   </li>
                    <li><Link to='/'>About me</Link>
                </li>
                    <li><Link to='/MyExperiences'> My Experiences</Link>
                </li>
                    <li><Link to='/MyProjects'> My Projects</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;