import './App.css';
import React , {useState} from "react";
import RatingPage from "./components/RatingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RatingAutho from "./components/RatingAutho";
import AdminAutho from "./components/AdminComponents/AdminAutho";
import AdminRegister from "./components/AdminComponents/AdminRegister";
import RestaurantRegister from "./components/AdminComponents/RestaurantRegister";
import AdminPanel from "./components/AdminComponents/AdminPanel";
import QrCodePage from "./components/QrCodePage";
import SubscriptionPage from "./components/SubscriptionComponent/SubscriptionPage";
import FeedbacksPage from "./components/FeedbacksComponent/FeedbacksPage";
import RatingSmsAccess from "./components/RatingSmsAccess";
import Gratitude from "./components/ Gratitude";
import NoMatch from "./components/NoMatch";
import Settings from "./components/Settings/Settings";
import ProFunctions from "./components/ProFunctions/ProFunctions";
import Questions from "./components/Questions/Questions";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
    const [QrSrc , setQrSrc] = useState('http://localhost:3000')
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/Rating" element={
                    <RatingPage/>}>
                </Route>
                <Route path="/RatingAutho" element={
                    <RatingAutho/>}>
                </Route>
                <Route path="/" element={
                    <AdminAutho/>}>
                </Route>
                <Route path="/AdminRegister" element={
                    <AdminRegister/>}>
                </Route>
                <Route path="/RestaurantRegister" element={
                    <RestaurantRegister/>}>
                </Route>
                <Route path="/AdminPanel" element={
                    <AdminPanel/>}>
                </Route>
                <Route path="/QrPage" element={
                    <QrCodePage text ={QrSrc}/>}>
                </Route>
                <Route path="/Subscription" element={
                    <SubscriptionPage/>}>
                </Route>
                <Route path="/Feedbacks" element={
                    <FeedbacksPage/>}>
                </Route>
                <Route path="/SmsAccess" element={
                    <RatingSmsAccess/>}>
                </Route>
                <Route path="/Gratitude" element={
                    <Gratitude/>}>
                </Route>
                <Route path="/AboutUs" element={
                    <AboutUs/>}>
                </Route>
                <Route path="/Questions" element={
                    <Questions/>}>
                </Route>
                <Route path="/ProFunctions" element={
                    <ProFunctions/>}>
                </Route>
                <Route path="/Settings" element={
                    <Settings/>}>
                </Route>
                <Route path="*" element={
                    <NoMatch/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
