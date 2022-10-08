import { useState } from "react";
import "./../../css/Store.modules.scss";

export default function BasicInfo() {
  // 로고
  let [corLogo, setCorLogo] = useState(false);

  //상호명
  let [corstoreName, setCorStoreName] = useState(false);
  //데이터 들어오면 storeName 넣을것.
  let [storeNameValue, setStoreNameValue] = useState("");
  console.log("시작은", storeNameValue);
  console.log("변경은", storeNameValue);

  //전화번호
  let [corTel, setCorTel] = useState(false);
  let [firstTel, setFirstTel] = useState("");
  let [middleTel, setMiddleTel] = useState("");
  let [lastTel, setLastTel] = useState("");
  //targetN = targetN.replace(/[^0-9]/g, "");

  //가게소개
  let [corIntro, setCorIntro] = useState(true);
  let [introValue, setIntroValue] = useState("");

  return (
    <section className="tab-info basic-wrap">
      <div className="container">
        {/* 로고 */}
        <div className="field">
          <div className="title">
            로고
            {corLogo !== true ? (
              <button
                type="button"
                onClick={() => {
                  setCorLogo(true);
                }}
              >
                변경
              </button>
            ) : null}
          </div>
          {corLogo !== true ? (
            <article className="save save-thumb">
              <img src="" alt={`가게 이름 로고`} width="100%" />
            </article>
          ) : (
            <div className="cor-info">
              <div className="cor-thumb">
                <label className="upload-file">
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                  />
                  <article className="thumb"></article>
                </label>
                <div className="cor-thumb-btn">
                  <button type="button" className="upload-file-btn">
                    업로드
                  </button>
                  <span>3mb 이하 jpg, jpeg, png 파일만 가능합니다.</span>
                </div>
              </div>

              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setCorLogo(false);
                }}
              >
                저장
              </button>
            </div>
          )}
        </div>
        {/* 상호명 */}
        <div className="field">
          <div className="title">
            상호명
            {corstoreName !== true ? (
              <button
                type="button"
                onClick={() => {
                  setCorStoreName(true);
                }}
              >
                변경
              </button>
            ) : null}
          </div>
          {corstoreName !== true ? (
            <p className="save save-txt store-name">상길 세탁</p>
          ) : (
            <div className="cor-info">
              <input
                type="text"
                className="cor-txt-input"
                value={storeNameValue}
                onChange={(e) => {
                  setStoreNameValue(e.target.value);
                }}
              />
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setCorStoreName(false);
                }}
              >
                저장
              </button>
            </div>
          )}
        </div>
        {/* 전화번호 */}
        <div className="field">
          <div className="title">
            대표 번호
            {corTel !== true ? (
              <button
                type="button"
                onClick={() => {
                  setCorTel(true);
                }}
              >
                변경
              </button>
            ) : null}
          </div>
          {corTel !== true ? (
            <p className="save save-txt tel">070-1234-1234</p>
          ) : (
            <div className="cor-info">
              <div className="cor-tel-wrap">
                <input
                  type="tel"
                  name="first-tel-number"
                  maxLength="3"
                  value={firstTel}
                  onChange={(e) => {
                    let targetN = e.target.value;
                    targetN = targetN.replace(/[^0-9]/g, "");
                    setFirstTel(targetN);
                  }}
                />
                <input
                  type="tel"
                  name="middle-tel-number"
                  maxLength="4"
                  value={middleTel}
                  onChange={(e) => {
                    let targetN = e.target.value;
                    targetN = targetN.replace(/[^0-9]/g, "");
                    setMiddleTel(targetN);
                  }}
                />
                <input
                  type="tel"
                  name="last-tel-number"
                  maxLength="4"
                  value={lastTel}
                  onChange={(e) => {
                    let targetN = e.target.value;
                    targetN = targetN.replace(/[^0-9]/g, "");
                    setLastTel(targetN);
                  }}
                />
              </div>
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setCorTel(false);
                }}
              >
                저장
              </button>
            </div>
          )}
        </div>
        {/* 가게소개 */}
        <div className="field">
          <div className="title">
            가게소개
            {corIntro === false ? (
              <button
                type="button"
                onClick={() => {
                  setCorIntro(true);
                }}
              >
                변경
              </button>
            ) : null}
            {/* <button
              type="button"
              onClick={() => {
                setCorIntro(true);
              }}
            >
              변경
            </button> */}
          </div>
          {corIntro === true ? (
            <div className={`cor-info cor-intro-wrap`}>
              <div className="cor-intro-txt">
                <textarea
                  value={introValue}
                  onChange={(e) => {
                    setIntroValue(e.target.value);
                  }}
                />
                <span className="check-intro-num">{introValue.length}</span>
              </div>
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setCorIntro(false);
                }}
              >
                저장
              </button>
            </div>
          ) : (
            <div className="save save-intro">가게소개~~</div>
          )}

          {/* <div className="save save-intro">가게소개~~</div> */}
        </div>
      </div>
      <div className="explanation-box">
        <h3>변경신청하면 소요기간은 어떻게 되나요?</h3>
        <span>
          소요기간은 1~2주 내외로 처리가 되어집니다. <br />
          승인 거절시 사유와 함께 새소식에서 확인할 수 있습니다.
        </span>
      </div>
    </section>
  );
}
