import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Desktop } from './screens/Desktop/Desktop';
import { ProgramList } from './screens/Programs/ProgramList';

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Desktop />}>
          <Route path="/programs/:category" element={<ProgramList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
