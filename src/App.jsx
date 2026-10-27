import Header from './components/layout/header/Header';
import HomePage from './pages/home/HomePage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}
