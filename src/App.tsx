
import Header from './components/Header';
import ReadData from './components/ReadData';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store.tsx';
import AddEditProduct from './components/AddEditProduct.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ReadData />,
      },
      {
        path: "/addProduct",
        element: <AddEditProduct />,
      },
      {
        path: "/update/:id",
        element: <AddEditProduct />,
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default App;
