import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import "@fontsource/lexend";
import Dashboard from './views/Dashboard';
import Guide from './views/Guide';
import Home from './views/Home';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path={'/dashboard'} element={<Dashboard/>}/>
                  <Route path={'/guide'} element={<Guide/>}/>
                  <Route path={'/home'} element={<Home/>}/>
                  <Route path={'/'} element={<Home/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
