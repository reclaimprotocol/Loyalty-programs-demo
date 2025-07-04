import { Routes, Route } from 'react-router-dom';
import { Desktop } from './screens/Desktop/Desktop';
import { AirlinesProgram } from './screens/Programs/AirlinesProgram';
import { EmptyState } from './components/ui/EmptyState';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Desktop />}>
        <Route index element={<EmptyState onRequestProgram={() => {}} />} />
        <Route path="/programs/airlines" element={<AirlinesProgram />} />
        {/* Add other program routes as they become available */}
      </Route>
    </Routes>
  );
};

export default App;
