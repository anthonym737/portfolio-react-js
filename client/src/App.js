import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetail from './PortfolioContainer/ProjectDetail/ProjectDetail';



function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer/>
        <Routes>
          <Route path="/" exact element={<PortfolioContainer/>}/>
          <Route path="/projects/:id" exact element={<ProjectDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
