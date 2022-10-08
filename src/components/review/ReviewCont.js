import { useState } from "react";
import "./../../css/Review.modules.scss";

export default function ReviewCont() {
  let [write, setWrite] = useState("");

  return (
    <main className="review-cont-wrap review-wrap">
      <h2 className="title">리뷰</h2>

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
        <article className="review-img">
          {[1, 2, 3, 4, 5].map((a, i) => {
            return <img key={a} src="" alt={`리뷰 이미지-${i}`} />;
          })}
        </article>
        <div className="rez-warp sub-wrap">
          <span>예약 정보</span>
          <ul className="sub-list rez-list">
            <li>셔츠</li>
            <li>이불</li>
          </ul>
        </div>
        <div className="dlvy-warp sub-wrap">
          <span>배달 리뷰</span>
          <ul className="dlvy-list sub-list">
            <li>좋아요</li>
            <li className="not-good">불친절</li>
          </ul>
        </div>
      </div>
      {/* 미답변인 경우 */}
      <div className="unanswered-wrap">
        <textarea
          value={write}
          onChange={(e) => {
            setWrite(e.target.value);
          }}
        />
        <div className="btn-wrap">
          <button type="button" className="cancel">
            취소
          </button>
          <button type="button" className="submit">
            등록
          </button>
        </div>
      </div>
      {/* 답변한 경우 */}
      <div className="answer-wrap">
        <div className="answer-inf">
          <div className="tit">
            사장님<em>MMDD</em>
          </div>
          <p className="info-txt">내용이 들어갈 것임..ㅋ;;;</p>
        </div>

        <div className="btn-wrap">
          <button type="button" className="delete">
            삭제
          </button>
          <button type="button" className="cor">
            수정
          </button>
        </div>
      </div>
    </main>
  );
}
