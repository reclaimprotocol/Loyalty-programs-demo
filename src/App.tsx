import { Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Desktop } from './screens/Desktop/Desktop';
import { ProgramList } from './screens/Programs/ProgramList';
import { Success } from './pages/Success';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Desktop />}>
          {/* Redirect root to airlines */}
          <Route index element={<Navigate to="/programs/airlines" replace />} />
          {/* Program routes */}
          <Route path="/programs/:category" element={<ProgramList />} />
        </Route>
        {/* Success page - standalone route */}
        <Route path="/success" element={<Success />} />
      </Routes>
      <Analytics />
    </>
  );
};

export default App;
