import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/Navbar';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <home/>
  }
])

function App() {
  return (
    <>
      <Navbar/>
    </>
  );
}
export default App;