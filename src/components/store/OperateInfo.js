import { useState } from "react";

export default function OperateInfo() {
  // 영업시간
  let [corTimer, setCorTimer] = useState(true);

  //휴무일

  //휴게시간
  return (
    <section className="tab-info operate-wrap">
      <div className="container">
        {/* 영업시간 */}
        <div class="field">
          <div className="title">
            영업시간
            {corTimer === false ? (
              <button
                type="button"
                onClick={() => {
                  setCorTimer(true);
                }}
              >
                수정
              </button>
            ) : null}
          </div>
          {corTimer === true ? "cor-info" : "save"}
          <div className="cor-info"></div>
          <div className="save"></div>
        </div>
        {/* 휴무일 */}
        <div class="field">
          <div className="title">
            <button type="button"></button>
          </div>
        </div>
        {/* 휴게시간 */}
        <div class="field">
          <div className="title">
            <button type="button"></button>
          </div>
        </div>
      </div>
      <div className="explanation-box">
        <h3>영업정보 설정하면 손님은 어디서 보나요?</h3>
        <span>
          손님은 해당 가게의 '정보'에서 영업정보를 확인할 수 있습니다.
        </span>
      </div>
    </section>
  );
}
