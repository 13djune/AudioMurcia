import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import AvisoLegal from './pages/AvisoLegal.jsx';
import Productos from './pages/Productos.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/productos" element={<Layout><Productos /></Layout>} />
      <Route path="/aviso-legal" element={<Layout><AvisoLegal /></Layout>} />
    </Routes>
  );
}

export default App;
