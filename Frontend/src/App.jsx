import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/Home';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router = {appRouter}/>
    </>
  );
}
export default App;