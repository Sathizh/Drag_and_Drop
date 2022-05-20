import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';

function Routings() {
  return (
  <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} >
              <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}
function App() {
  return (
    <div className="App">
      <Routings />      
    </div>
  );
}

export default App;
