import { useState } from "react";
import "./../../css/Store.modules.scss";

export default function TemporaryStop() {
  const [reason, setReason] = useState("");
  let reasonValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setReason(value.replace(regexp, ""));
  };

  return (
    <main className="temporary-wrap store-wrap">
      <h2 className="title">&#9995; 영업임시중지</h2>
      <ul className="explanation">
        <li>
          - 일정 시간 동안 예약을 받을 수 없을 때 가게의 영업을 임시중지하는
          기능입니다.
        </li>
        <li>
          - 설정한 시간 동안 '세탁을 부탁해' 사이트에서 "운영시간이 아닙니다"로
          표시됩니다.
        </li>
      </ul>
      {/* 영업임시정지 기본 view */}
      <form className="form-wrap">
        <div className="field">
          <label>사유</label>
          <input
            type="text"
            placeholder="사유 입력"
            value={reason}
            onChange={reasonValue}
          />
        </div>
        <div className="field">
          <label>시간</label>
          <div className="start-time timer">
            <label>시작</label>
            <div className="select-wrap">
              <select>
                <option>10 시</option>
                <option>11 시</option>
              </select>
            </div>
            <div className="select-wrap mr0">
              <select>
                <option>00 분</option>
                <option>10 분</option>
              </select>
            </div>
          </div>
          <div className="end-time timer">
            <label>종료</label>
            <div className="select-wrap">
              <select>
                <option>10 시</option>
                <option>11 시</option>
              </select>
            </div>
            <div className="select-wrap mr0">
              <select>
                <option>00 분</option>
                <option>10 분</option>
              </select>
            </div>
          </div>
        </div>
        <button type="button" className="submit-btn">
          적용
        </button>
      </form>
      {/* 영업임시정지 기본 view 끝 */}
      {/* 영업임시정지 설정 후 view */}
      <div className="temporary-box">
        <div className="tit">
          해당 가게는 영업임시중지 상태입니다.
          <button type="button" className="cor-btn">
            변경
          </button>
        </div>
        <div className="temp-info">
          사유
          <p className="cont">사유 적은거 여기</p>
        </div>
        <div className="temp-info">
          시간
          <p className="cont">오후 00:00 ~ 00:00</p>
        </div>
        <button type="button" className="clear-btn">
          영업임시중지 해제
        </button>
      </div>
      {/* 영업임시정지 설정 후 view */}
    </main>
  );
}
