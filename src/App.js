import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Aboutme from './Pages/Aboutme'
import EducationalBackground from './Pages/EducationalBackground'
import MyExperiences from './Pages/MyExperiences'
import MyProjects from './Pages/MyProjects'
import MainNavigation from './Components/layouts/mainNavigation'
function App() {
    return (
        <div>
            <MainNavigation />
            <Routes>
                <Route path="/" element={<Aboutme />} />
                <Route path="/EducationalBackground" element={<EducationalBackground />} />
                <Route path="/MyExperiences" element={<MyExperiences />}/>
                <Route path="/MyProjects" element={<MyProjects />}/>
            </Routes>
        </div>

        )
      
 
}

export default App;
