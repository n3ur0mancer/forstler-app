import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import "@fontsource/lexend";
import Dashboard from './dashboard';
import Guide from './guide';
import Home from './home';

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
