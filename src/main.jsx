
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import About from './Components/About.jsx';
import ContactUs  from './Components/ContactUs.jsx';
import Home from './Components/Home.jsx'
import { RouterProvider } from 'react-router-dom';




const appRouter = createBrowserRouter([
  {
    path:"/" ,
    element:<App/>,
    children:[
      {
       path:"/",
       element:<Home/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      }
    ]
  
    
  },
  ])

  
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




