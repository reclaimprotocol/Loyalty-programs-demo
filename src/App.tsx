import { Routes, Route } from 'react-router-dom';
import { Desktop } from './screens/Desktop/Desktop';
import { ProgramList } from './screens/Programs/ProgramList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Desktop />}>
        <Route path="/programs/:category" element={<ProgramList />} />
      </Route>
    </Routes>
  );
};

export default App;
