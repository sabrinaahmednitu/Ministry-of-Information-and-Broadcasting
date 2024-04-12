import { createBrowserRouter } from 'react-router-dom';
import AppartmentsBook from '../Components/RentCards/AppartmentsBook/AppartmentsBook';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Login from '../Shared/Login/Login';
import Signup from '../Shared/Login/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'apartments',
        element: <AppartmentsBook></AppartmentsBook>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signin',
        element: <Signup></Signup>,
      },
    ],
  },
]);
