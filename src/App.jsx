import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import HomePage from './pages/home/HomePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}