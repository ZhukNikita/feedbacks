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

function App() {
    const [rating , setRating] = useState(null)
    const [QrSrc , setQrSrc] = useState('http://localhost:3000')
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/Rating" element={
                    <RatingPage rating = {rating} setRating ={setRating}/>}>
                </Route>
                <Route path="/RatingAutho" element={
                    <RatingAutho rating = {rating} setRating ={setRating}/>}>
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
                <Route path="*" element={
                    <NoMatch/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
