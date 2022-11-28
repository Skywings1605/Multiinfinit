import { Navigate, Route, Routes } from "react-router-dom"
import { Error } from "./Error"
import { LandingPage } from "./LandingPage"
import { PrivacyPolicy } from "./PrivacyPolicy";
import { ThankYou } from "./ThankYou";



export const AllRoutes = () => {
    return(
        <div className="App">
            <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/thankyou" element={<ThankYou/>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            </Routes>
        </div>
    )
}