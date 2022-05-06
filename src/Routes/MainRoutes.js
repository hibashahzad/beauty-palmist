import ClientLogin from "../Pages/Login/ClientLogin";
import BusniessLogin from "../Pages/Login/BusinessLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Selection from "../Pages/SignUpSelection/Selection";
import CRegister from "../Pages/Registration/ClientRegister";
import BRegister from "../Pages/Registration/BusinessRegister";
import Services from "../Pages/Services/Services.js";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import SubCat from "../Pages/SubCat/SubCat";
import ServiceList from "../Pages/ServiceList/Servicelist";
import SingleService from "../Pages/SingleService/SingleService";
import PCategory from "../Pages/Palmist/PalmistCategory/PCategory.js";
import Quiz from "../Pages/Palmist/Quiz/Quiz";
import HomeSeller from "../Pages/SellerDashborad/Home/Home";
import Profile from "../Pages/SellerDashborad/Home/Profile/Profile";
import ServiceListS from "../Pages/SellerDashborad/ServiceListS/ServicelistS";
import AddServices from "../Pages/SellerDashborad/AddServices/AddServices";
import MyBooking from "../Pages/MyBooking/myBooking";
import BookingSchedule from "../Pages/SellerDashborad/BookingsSchedule/BookingsS";
import AppointmentSelection from "../Pages/Appointment/AppointmentSelection";
import BookingDetail from "../Pages/BookingDetail/BookingDetail";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/Clogin" element={<ClientLogin />} />
        <Route path="/Business" element={<BusniessLogin />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/ClientR" element={<CRegister />} />
        <Route path="/BRegister" element={<BRegister />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/" element={<Home />} />
        <Route path="/Category/:id" element={<SubCat />} />
        <Route path="/List/:id" element={<ServiceList />} />
        <Route path="/List" element={<ServiceList />} />
        <Route path="/SingleService" element={<SingleService />} />

        <Route path="/Palmist" element={<PCategory />} />
        <Route path="/Quiz/:id" element={<Quiz />} />
        <Route path="/MyBooking" element={<MyBooking />} />
        <Route path="/Appointment" element={<AppointmentSelection />} />
        <Route path="/AppointmentDetails" element={<BookingDetail />} />

        <Route path="Seller">
          <Route index path="Dashborad" element={<HomeSeller />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ServiceListS" element={<ServiceListS />} />
          <Route path="AddServices" element={<AddServices />} />
          <Route path="AddServices" element={<AddServices />} />
          <Route path="MyBookings" element={<BookingSchedule />} />
          <Route path="AddServices/:id" element={<AddServices />} />
        </Route>
      </Routes>
    </>
  );
}
