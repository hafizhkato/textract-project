import TopBar from './global/topbar';  // Add this import
import Create from './pages/Create';  
import { Routes, Route } from "react-router-dom";// Add this import


function App() {
  return (
    <div className='app'>
      <main className='content' style={{ paddingTop: '5vh' }}>
      <TopBar />
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
    </main>
    </div>
    
  );
}

export default App;