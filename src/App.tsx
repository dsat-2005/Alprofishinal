import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcMaintenancePage from './pages/AcMaintenancePage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/ac-maintenance" element={<AcMaintenancePage />} />
        <Route
          path="/services/refrigerator-maintenance"
          element={
            <PlaceholderPage
              title="صيانة الثلاجات بالفيوم – مركز Alprofishinal"
              description="فنيين محترفين لصيانة جميع أنواع الثلاجات بسرعة وضمان"
            />
          }
        />
        <Route
          path="/services/washer-maintenance"
          element={
            <PlaceholderPage
              title="صيانة الغسالات الهاف بالفيوم – مركز Alprofishinal"
              description="فنيين محترفين لصيانة جميع أنواع الغسالات بسرعة وضمان"
            />
          }
        />
        <Route
          path="/services/deep-freezer-maintenance"
          element={
            <PlaceholderPage
              title="صيانة الديب فريزر بالفيوم – مركز Alprofishinal"
              description="فنيين محترفين لصيانة جميع أنواع الديب فريزر بسرعة وضمان"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
