import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import "@fontsource/lexend";
import Dashboard from './dashboard';
import Guide from './guide';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path={'/dashboard'} element={<Dashboard/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
