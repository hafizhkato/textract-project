import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import TopBar from './global/topbar';  // Add this import
import Create from './pages/Create';  // Add this import

const client = generateClient<Schema>();

function App() {
  return (
    <main style={{ paddingTop: '5vh' }}>
      <TopBar />
      <Create />
    </main>
  );
}

export default App;