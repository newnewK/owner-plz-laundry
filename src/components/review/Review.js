import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/Review.modules.scss";

export default function Review() {
  let [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <main className="review-wrap">
      <h2 className="title">리뷰관리</h2>
      <ul className="review-tab">
        <li>
          <button
            className={`tab-btn ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => {
              tabClickHandler(0);
            }}
          >
            전체
          </button>
        </li>
        <li>
          <button
            className={`tab-btn ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => {
              tabClickHandler(1);
            }}
          >
            미답변
          </button>
        </li>
        <li>
          <button
            className={`tab-btn ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => {
              tabClickHandler(2);
            }}
          >
            답변
          </button>
        </li>
      </ul>

      <section className="review-list-wrap">
        <ul>
          <li className="reivew-list">
            <Link to="/review/id">
              <div className="review-cont">
                <span>ID</span>
                <div className="review-cont-info">
                  {[1, 2, 3, 4, 5].map((a, i) => {
                    return (
                      <svg
                        version="1.1"
                        viewBox="0 0 32 32"
                        className={`star full-star`}
                        key={a}
                      >
                        <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
                      </svg>
                    );
                  })}
                  <em>MMDD</em>
                </div>
                <p className="cont">내용~~~</p>
              </div>
              <div className="review-info">
                <span className={`answer unanswered`}>미답변</span>
              </div>
            </Link>
          </li>
          {/* 여기 밑으로 삭제 */}
          <li className="reivew-list">
            <Link to="/review/id">
              <div className="review-cont">
                <span>ID</span>
                <div className="review-cont-info">
                  {[1, 2, 3, 4, 5].map((a, i) => {
                    return (
                      <svg
                        version="1.1"
                        viewBox="0 0 32 32"
                        className={`star `}
                        key={a}
                      >
                        <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
                      </svg>
                    );
                  })}
                  <em>MMDD</em>
                </div>
                <p>내용~~~</p>
              </div>
              <div className="review-info">
                <span className={`answer`}>답변</span>
              </div>
            </Link>
          </li>
          {/* 여기 위로 삭제  */}
        </ul>
      </section>
    </main>
  );
}
