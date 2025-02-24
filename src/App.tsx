import TopBar from './global/topbar';  // Add this import
import Create from './pages/Create';  // Add this import


function App() {
  return (
    <main style={{ paddingTop: '5vh' }}>
      <TopBar />
      <Create />
    </main>
  );
}

export default App;