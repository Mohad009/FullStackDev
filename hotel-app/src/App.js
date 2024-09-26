import Home from './components/Home';
import SearchByCategory from "./components/SearchByCategory";
import {Link,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="container w-50">
      <div>
        <nav className="nav bg-light justify-content-center mb-2">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/search" className="nav-item nav-link">
            Search Room
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchByCategory />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
