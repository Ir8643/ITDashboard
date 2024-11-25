import 'bootstrap/dist/css/bootstrap.css'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gateways from './pages/Gateways';
import Instances from './pages/Instances';
import RouteTables from './pages/RouteTables';
import Subnets from './pages/Subnets';
import VPCs from './pages/VPCs';
import Configuration from './pages/Configuration';


function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/Gateways" element={<Gateways />} />
        <Route path="/Instances" element={<Instances />} />
        <Route path="/RouteTables" element={<RouteTables />} />
        <Route path="/Subnets" element={<Subnets />} />
        <Route path="/VPCs" element={<VPCs />} />
        <Route path='/Configuration' element={<Configuration/>}/>

      </Routes>

    </Router>
    </>
  );
}

export default App