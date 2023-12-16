import './App.css';
import Survey from './Survey';
import ThanksPage from './ThanksPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/response" element={<ThanksPage />} />
      </Routes>
  );
}

export default App;
