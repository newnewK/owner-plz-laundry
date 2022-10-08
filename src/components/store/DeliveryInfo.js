import { useState } from "react";

export default function DeliveryInfo() {
  let corpValue = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  // ## 수거
  // 변경
  let [carryForm, setCarryForm] = useState(false);
  let [carryArea, setCarryArea] = useState("");
  let [carryPrice, setCarryPrice] = useState("");
  let caValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setCarryArea(value.replace(regexp, ""));
  };

  // 넘어온 데이터 (수거 여부 가능-> true, 불가능 -> false)
  let [carryWhether, setCarryWhether] = useState(false);

  // ##배달
  // 변경
  let [devlyForm, setDevlyForm] = useState(false);
  let [devlyArea, setDevlyArea] = useState("");
  let [devlyPrice, setDevlyPrice] = useState("");
  let devlyValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setDevlyArea(value.replace(regexp, ""));
  };

  // 넘어온 데이터 (수거 여부 가능-> true, 불가능 -> false)
  let [devlyWhether, setDevlyWhether] = useState(false);

  return (
    <section className="tab-info delivery-wrap">
      <div className="container">
        {/* 수거 */}
        <div className="field">
          <div className="title">
            수거
            {carryForm === false ? (
              <button
                type="button"
                className="cor-btn"
                onClick={() => {
                  setCarryForm(true);
                }}
              >
                <i className="icon cor" /> 변경
              </button>
            ) : (
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setCarryForm(false);
                }}
              >
                저장
              </button>
            )}
          </div>
          {carryForm === false ? (
            <div className="save">
              {carryWhether !== true ? "불가능" : <div>XX동 XXX원</div>}
            </div>
          ) : (
            <div className="cor-info">
              <div className="set-carry set-form-wrap">
                <p className="sub-tit">수거 여부</p>
                <div className="radio-wrap">
                  <label>
                    <input
                      type="radio"
                      name="Q1"
                      checked={carryWhether === true}
                      onChange={() => {
                        setCarryWhether(true);
                      }}
                    />
                    <span></span>
                    수거 가능
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="Q1"
                      checked={carryWhether === false}
                      onChange={() => {
                        setCarryWhether(false);
                      }}
                    />
                    <span></span>
                    수거 불가능
                  </label>
                </div>
              </div>
              {carryWhether === true ? (
                <div className="set-form-wrap">
                  <p className="sub-tit">지역&#183;비용</p>
                  <div className="set-form">
                    <input
                      type="text"
                      placeholder="동으로 입력"
                      className="area"
                      value={carryArea}
                      onChange={caValue}
                    />
                    <div className="price">
                      <input
                        type="text"
                        placeholder="0"
                        value={carryPrice}
                        onChange={(e) => {
                          setCarryPrice(corpValue(e.target.value));
                        }}
                      />
                      <span className="kr">원</span>
                    </div>
                    <button type="button" className="delete-btn">
                      삭제
                    </button>
                  </div>
                  <button type="button" className="plus-btn">
                    <svg viewBox="0 0 48 48">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                      />
                    </svg>
                    수거 지역 추가
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
        {/* 배달 */}
        <div className="field">
          <div className="title">
            배달
            {devlyForm === false ? (
              <button
                type="button"
                className="cor-btn"
                onClick={() => {
                  setDevlyForm(true);
                }}
              >
                <i className="icon cor" /> 변경
              </button>
            ) : (
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setDevlyForm(false);
                }}
              >
                저장
              </button>
            )}
          </div>
          {devlyForm === false ? (
            <div className="save">
              {devlyWhether !== true ? "불가능" : <div>XX동 XXX원</div>}
            </div>
          ) : (
            <div className="cor-info">
              <div className="set-carry set-form-wrap">
                <p className="sub-tit">배달 여부</p>
                <div className="radio-wrap">
                  <label>
                    <input
                      type="radio"
                      name="Q2"
                      checked={devlyWhether === true}
                      onChange={() => {
                        setDevlyWhether(true);
                      }}
                    />
                    <span></span>
                    배달 가능
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="Q2"
                      checked={devlyWhether === false}
                      onChange={() => {
                        setDevlyWhether(false);
                      }}
                    />
                    <span></span>
                    배달 불가능
                  </label>
                </div>
              </div>
              {devlyWhether === true ? (
                <div className="set-form-wrap">
                  <p className="sub-tit">지역&#183;비용</p>
                  <div className="set-form">
                    <input
                      type="text"
                      placeholder="동으로 입력"
                      className="area"
                      value={devlyArea}
                      onChange={devlyValue}
                    />
                    <div className="price">
                      <input
                        type="text"
                        placeholder="0"
                        value={devlyPrice}
                        onChange={(e) => {
                          setDevlyPrice(corpValue(e.target.value));
                        }}
                      />
                      <span className="kr">원</span>
                    </div>
                    <button type="button" className="delete-btn">
                      삭제
                    </button>
                  </div>
                  <button type="button" className="plus-btn">
                    <svg viewBox="0 0 48 48">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                      />
                    </svg>
                    배달 지역 추가
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <div className="explanation-box">
        <h3>수거 및 배달 설정하면 손님은 어디서 보나요?</h3>
        <span>
          손님은 해당 가게의 '정보'에서 영업정보를 확인할 수 있습니다.
        </span>
      </div>
    </section>
  );
}
