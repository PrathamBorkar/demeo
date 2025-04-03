import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './home.jsx';
import Contact from './contact.jsx';
import SellCarForm from './sellcar.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';
import CarList from './carlist.jsx';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/contact', element: <Contact /> }, 
  { path: '/sellcar', element: < SellCarForm/> },
  { path: '/carlist', element: <CarList /> },
]);




// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
