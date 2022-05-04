import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import ProfilePage from './components/ProfilePage/ProfilePage.jsx'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import ResultsPage from './components/ResultsPage/ResultsPage';



function App() {

  const loggedUser = { userName: 'Popino' }
  // const loggedUser = undefined



  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/details/:project_id' element={<ProjectDetails />} />
        <Route path='/resultados' element={<ResultsPage />} />
        <Route path='/mi-perfil' element={<ProfilePage loggedUser={loggedUser} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
