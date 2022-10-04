import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/Header.modules.scss";

export default function Header() {
  const current = decodeURI(window.location.href);
  const search = current.split("/");
  console.log(search);

  //가게
  let [shop, setShop] = useState(false);

  //리뷰
  let [review, setReview] = useState(false);

  //세탁
  let [laundry, setLaundry] = useState(false);

  //패널티
  let [penalty, setPenalty] = useState(false);

  //요청 처리
  let [setting, setSetting] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 68.7 16.7">
            <g>
              <path
                className="st0"
                d="M10.2,3.2h1.9v10h-1.9v-1.1l-1.5,0.7l-1.3-2.6c-0.6,1.7-1.6,2.6-2.9,2.7v-2.1c1.1-0.2,1.8-3,1.8-7.5l1.9,0.1
		c0,1.5-0.1,2.9-0.2,4.1l2.1,4.1V8.2H9.1V6.3h1.1V3.2z M14.8,3.1v10.2h-1.9V3.1H14.8z"
              />
              <path
                className="st0"
                d="M26.5,11.3h-4.1v2.3h-2.1v-2.3h-4.1V9.4h10.4V11.3z M25.9,8.6h-9.2V3.2h2v0.9H24V3.2h2V8.6z M24,6.9V5.9h-5.2
		v0.9H24z"
              />
              <path
                className="st1"
                d="M35.5,7.5l3,4.2l-1.7,1.2l-2-3c-0.8,1.9-2.1,3-3.7,3v-2.1c1.6-0.2,2.7-3.2,2.7-7.5l2.1,0.1
		C35.9,4.9,35.7,6.3,35.5,7.5z M41.9,8.8h-1.2v4.5h-2V3.1h2v3.7h1.2V8.8z"
              />
              <path
                className="st1"
                d="M42.7,8.7V6.9c1.3-0.1,2.2-1,2.4-2h-2.3V3.2h6.5v1.7h-2.2c0,0.2-0.1,0.4-0.1,0.6L49.8,7l-0.9,1.5L46.3,7
		C45.5,7.9,44.2,8.6,42.7,8.7z M52.3,11.2c0,1.7-2,2.3-4.6,2.3s-4.6-0.6-4.6-2.3s2-2.3,4.6-2.3S52.3,9.5,52.3,11.2z M50.2,11.2
		c0-0.5-1.1-0.7-2.4-0.7c-1.4,0-2.4,0.2-2.4,0.7c0,0.5,1.1,0.7,2.4,0.7C49.1,11.9,50.2,11.7,50.2,11.2z M53.4,4.7v1.9h-1.2v2.1h-2
		V3.1h2v1.6H53.4z"
              />
              <path
                className="st1"
                d="M56.6,6.5h2.7c0.9,0,1.8-0.1,2.4-0.4v1.7c-0.5,0.2-1.4,0.4-2.4,0.4h-4.7v-5h2.1V6.5z M64.1,13.4h-9.2V8.9h9.2
		V13.4z M62,11.7v-1.1h-5.1v1.1H62z M64.1,8.5h-2V3.1h2V8.5z"
              />
            </g>
          </svg>
        </Link>
      </div>
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">
              <i className="icon new" />
              새소식
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="icon new" />
              전체 현황
            </Link>
          </li>
          <li>
            <button
              className="title"
              onClick={() => {
                setShop((shop) => !shop);
              }}
            >
              <span>
                <i className="icon store" />
                가게
              </span>
              <i className="icon arrow" />
            </button>
            <div
              className={`depth2 ${
                shop === true ? "open open_depth2" : "close"
              }`}
            >
              <ul>
                <li>
                  <Link to="/">영업임시중지</Link>
                </li>
                <li>
                  <Link to="/">가게소개</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              className="title"
              onClick={() => {
                setReview((review) => !review);
              }}
            >
              <span>
                <i className="icon review" />
                리뷰
              </span>
              <i className="icon arrow" />
            </button>
            <div
              className={`depth2 ${
                review === true ? "open open_depth2" : "close"
              }`}
            >
              <ul>
                <li>
                  <Link to="/review">리뷰 관리</Link>
                </li>
                <li>
                  <Link to="/store_notice">공지 &#183; 한마디</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              className="title"
              onClick={() => {
                setLaundry((laundry) => !laundry);
              }}
            >
              <span>
                <i className="icon laundry" />
                세탁
              </span>
              <i className="icon arrow" />
            </button>
            <div
              className={`depth2 ${
                laundry === true ? "open open_depth2" : "close"
              }`}
            >
              <ul>
                <li>
                  <Link to="/category">카테고리</Link>
                </li>
                <li>
                  <Link to="/">세부정보</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              className="title"
              onClick={() => {
                setPenalty((panalty) => !panalty);
              }}
            >
              <span>
                <i className="icon penalty ty2" />
                패널티
              </span>
              <i className="icon arrow" />
            </button>
            <div
              className={`depth2 ${
                penalty === true ? "open open_depth2" : "close"
              }`}
            >
              <ul>
                <li>
                  <Link to="/penalty">패널티 내역</Link>
                </li>
                <li>
                  <Link to="/proof">내용증명</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              className="title"
              onClick={() => {
                setSetting((setting) => !setting);
              }}
            >
              <span>
                <i className="icon setting " />
                요청 처리
              </span>
              <i className="icon arrow" />
            </button>
            <div
              className={`depth2 ${
                setting === true ? "open open_depth2" : "close"
              }`}
            >
              <ul>
                <li>
                  <Link to="/application">입점 신청</Link>
                </li>
                <li>
                  <Link to="/info_change">정보 수정</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/help">
              <i className="icon new" />
              이용 가이드
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
