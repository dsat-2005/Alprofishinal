import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcMaintenancePage from './pages/AcMaintenancePage';
import RefrigeratorMaintenancePage from './pages/RefrigeratorMaintenancePage';
import WasherMaintenancePage from './pages/WasherMaintenancePage';
import DeepFreezerMaintenancePage from './pages/DeepFreezerMaintenancePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/ac-maintenance" element={<AcMaintenancePage />} />
        <Route path="/services/refrigerator-maintenance" element={<RefrigeratorMaintenancePage />} />
        <Route path="/services/washer-maintenance" element={<WasherMaintenancePage />} />
        <Route path="/services/deep-freezer-maintenance" element={<DeepFreezerMaintenancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
