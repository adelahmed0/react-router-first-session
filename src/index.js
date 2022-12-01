import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.css";
import Root from "./routes/Root";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import Index from "./routes/Index";
import ErrorPage from "./routes/ErrorPage";
import UserRoot from "./routes/UserRoot";
import UserEdit from "./routes/UserEdit";
import UserInfo from "./routes/UserInfo";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: 'faq',
                element: <Faq/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    },
    {
        path: '/user',
        element: <UserRoot/>,
        children: [
            {index: true, element: <div>Index</div>},
            {
                path: 'info',
                element: <UserInfo/>,
            },
            {
                path: ':userId/edit',
                element: <UserEdit/>,
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
