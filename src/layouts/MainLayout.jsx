import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
