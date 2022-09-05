import './App.css';
import React , {useState} from "react";
import RatingPage from "./components/RatingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RatingAutho from "./components/RatingAutho";
import AdminAutho from "./components/AdminAutho";
import AdminRegister from "./components/AdminRegister";
import RestaurantRegister from "./components/RestaurantRegister";

function App() {
    const [rating , setRating] = useState(null)
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <RatingPage rating = {rating} setRating ={setRating}/>}>
                </Route>
                <Route path="/RatingAutho" element={
                    <RatingAutho rating = {rating} setRating ={setRating}/>}>
                </Route>
                <Route path="/adminAutho" element={
                    <AdminAutho/>}>
                </Route>
                <Route path="/AdminRegister" element={
                    <AdminRegister/>}>
                </Route>
                <Route path="/RestaurantRegister" element={
                    <RestaurantRegister/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
