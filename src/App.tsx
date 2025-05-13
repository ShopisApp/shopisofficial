import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FeaturesPage from './pages/FeaturesPage';
import StatsPage from './pages/StatsPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="community" element={<CommunityPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;