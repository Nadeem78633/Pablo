import React from "react";
import All from "./Components/1.Page/All";

// React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import AllTask from "./Components/AllTask";
import DomManipulation from "./Components/4.Dom Manipulation/DomManipulation";
import EventHandling from "./Components/5.Javascript_Event_handling/EventHandling";
import Weather from "./Components/6.AjaxAndApiIntegration/Weather";
import FormValidation from "./Components/7.FormValidation/FormValidation";
import Layout from "./Components/2.CssLayoutTechniques/Layout";
import Animation from "./Components/3.CssAnimation/Animation";
import Performance from "./Components/9.PerformanceOptimization/Performance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<AllTask />} />
      <Route path="page" element={<All />} />
      <Route path="layout" element={<Layout/>}/>
      <Route path="animation" element={<Animation/>}/>
     
      <Route path="dom" element={<DomManipulation/>}/>
      <Route path="gallery" element={<EventHandling/>}/>
      <Route path="weather" element={<Weather/>}/>
      <Route path="validation" element={<FormValidation/>}/>
      <Route path="performance" element={<Performance/>}/>
     
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
