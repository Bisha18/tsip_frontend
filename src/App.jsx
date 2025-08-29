import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import toast from "react-hot-toast";

export default function App() {
  return (
    <>
    <button onClick={()=>toast.success("Hello")}> success </button>
      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </Routes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
        </Routes>
      </SignedOut>
    </>
  );
}
