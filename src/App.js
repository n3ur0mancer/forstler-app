import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './dashboard';
import Guide from './guide';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path={'/dashboard'} element={<Dashboard/>}/>
                  <Route path={'/guide'} element={<Guide/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
