import logo from "./owner_logo.svg";
import "./App.scss";
import { Reset } from "styled-reset";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Find from "./components/Find";
import FindUserId from "./components/FindUserId";
import FindUserPw from "./components/FindUserPw";
import Header from "./common/Header";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Application from "./components/request/Application";
import Review from "./components/review/Review";
import ReviewCont from "./components/review/ReviewCont";
import Notice from "./components/review/Notice";
import TemporaryStop from "./components/store/TemporaryStop";
import StoreInfomation from "./components/store/StoreInfomation";
import DeliveryInfo from "./components/store/DeliveryInfo";
import OperateInfo from "./components/store/OperateInfo";
import BasicInfo from "./components/store/BasicInfo";

function App() {
  let [login, setLogin] = useState(true);
  let signIn = () => {
    setLogin(true);
  };

  return (
    <div className={`App ${login === true ? "sebu-wrap" : ""}`}>
      <Reset />
      {login === true ? (
        <Header />
      ) : (
        <header className="sign-in-header">
          <h1 className="logo">
            <Link to="/login">
              <img src={logo} width="100%" alt="세탁을 부탁해 사장님" />
            </Link>
          </h1>

          <nav>
            <Link to="/login">로그인</Link>
            <Link to="/signUp">회원가입</Link>
          </nav>
        </header>
      )}

      <Routes>
        <Route path="/" element={<main>여기가 메인</main>} />
        <Route path="/login" element={<Login signIn={signIn} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/find" element={<Find />}>
          <Route path="id" element={<FindUserId />} />
          <Route path="pw" element={<FindUserPw />} />
        </Route>
        <Route path="/application" element={<Application />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/id" element={<ReviewCont />} />
        <Route path="/store_notice" element={<Notice />} />
        <Route path="/temporary" element={<TemporaryStop />} />
        <Route path="/store-info" element={<StoreInfomation />}>
          <Route path="basic" element={<BasicInfo />} />
          <Route path="operate" element={<OperateInfo />} />
          <Route path="delivery" element={<DeliveryInfo />} />
        </Route>

        {/* <Route path="/" element={<StoreInfomation />} /> */}
      </Routes>
    </div>
  );
}

export default App;
