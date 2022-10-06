import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { AboutPage } from './pages/AboutPage';
import { ProguctsPage } from './pages/ProguctsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProguctsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>

  )
}

export default App;
