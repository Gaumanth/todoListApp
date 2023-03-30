import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/todo" element={<Header />} />
        <Route path="/signUp" element={<signUp />} />
      </Routes>
    </>
  );
}

export default App;
