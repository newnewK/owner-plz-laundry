import { useState } from "react";

export default function OperateInfo() {
  // ##영업시간
  // 변경
  let [corTimer, setCorTimer] = useState(false);
  let [weekSame, setWeekSame] = useState("same");
  let [allDay, setAllDay] = useState(false);
  let [weekday, setWeekday] = useState(false);
  let [weekend, setWeekend] = useState(false);
  // 설정 여부
  let [tiemInfo, setTimeInfo] = useState(false);
  // 시간 return
  let time = () => {
    return (
      <div className="time-wrap">
        <div className="start-time timer">
          <label>시작</label>
          <div className="select-wrap">
            <select>
              <option>오전 10 시</option>
              <option>오후 11 시</option>
            </select>
          </div>
          <div className="select-wrap mr0">
            <select>
              <option>00 분</option>
              <option>10 분</option>
            </select>
          </div>
        </div>
        <div className="start-time timer">
          <label>종료</label>
          <div className="select-wrap">
            <select>
              <option>오전 10 시</option>
              <option>밤 12 시</option>
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
    );
  };

  // ## 휴무일
  // 변경
  let [holidayForm, setHolidayForm] = useState(false);
  let [redDay, setRedDay] = useState(false);
  let week = [
    "매주",
    "매월 첫째주",
    "매월 둘째주",
    "매월 셋째주",
    "매월 넷째주",
  ];
  let day = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  let [temStart, setTemStart] = useState("");
  let [temEnd, setTemEnd] = useState("");
  //targetN = targetN.replace(/[^0-9]/g, "");

  // 설정 여부
  let [holidaySet, setHolidaySet] = useState(false);

  return (
    <section className="tab-info operate-wrap">
      <div className="container">
        {/* 영업시간 */}
        <div className="field">
          <div className="title">
            영업시간
            {corTimer === false ? (
              <button
                type="button"
                className="cor-btn"
                onClick={() => {
                  setCorTimer(true);
                }}
              >
                <i className="icon cor" />
                변경
              </button>
            ) : (
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setCorTimer(false);
                  setTimeInfo(true);
                }}
              >
                저장
              </button>
            )}
          </div>
          {corTimer === false ? (
            <div className="save">
              {tiemInfo === false ? (
                <span className="not-set">설정안함</span>
              ) : (
                "정보값 들어오깅"
              )}
            </div>
          ) : (
            <div className="cor-info">
              <div className="week-check">
                <input
                  type="radio"
                  name="week"
                  id="same"
                  checked={weekSame === "same"}
                  onChange={() => {
                    setWeekSame("same");
                  }}
                />
                <label htmlFor="same">평일/주말 동일</label>
                <input
                  type="radio"
                  name="week"
                  id="not"
                  checked={weekSame === "not"}
                  onChange={() => {
                    setWeekSame("not");
                  }}
                />
                <label htmlFor="not">평일/주말 별도</label>
              </div>
              {weekSame === "same" ? (
                <div className="week-same week">
                  <div className="sub-tit flex-between">
                    매일
                    <div className="on-off">
                      24시간
                      <input
                        type="checkbox"
                        id="check-24"
                        checked={allDay}
                        onChange={() => {
                          setAllDay((allDay) => !allDay);
                        }}
                      />
                      <label htmlFor="check-24">
                        <span></span>
                      </label>
                    </div>
                  </div>
                  {allDay === false ? (
                    time()
                  ) : (
                    <div className="all-day">24시간 영업</div>
                  )}
                </div>
              ) : (
                <div className="week-not-same">
                  <div className="week">
                    <div className="sub-tit flex-between">
                      평일
                      <div className="on-off">
                        24시간
                        <input
                          type="checkbox"
                          id="weekday"
                          checked={weekday}
                          onChange={() => {
                            setWeekday((weekday) => !weekday);
                          }}
                        />
                        <label htmlFor="weekday">
                          <span></span>
                        </label>
                      </div>
                    </div>
                    {weekday === false ? (
                      time()
                    ) : (
                      <div className="all-day">24시간 영업</div>
                    )}
                  </div>
                  <div className="week">
                    <div className="sub-tit flex-between">
                      주말
                      <div className="on-off">
                        24시간
                        <input
                          type="checkbox"
                          id="weekend"
                          checked={weekend}
                          onChange={() => {
                            setWeekend((weekend) => !weekend);
                          }}
                        />
                        <label htmlFor="weekend">
                          <span></span>
                        </label>
                      </div>
                    </div>
                    {weekend === false ? (
                      time()
                    ) : (
                      <div className="all-day">24시간 영업</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {/* 휴무일 */}
        <div className="field">
          <div className="title">
            휴무일
            {holidayForm === false ? (
              <button
                type="button"
                className="cor-btn"
                onClick={() => {
                  setHolidayForm(true);
                }}
              >
                <i className="icon cor" /> 변경
              </button>
            ) : (
              <button
                type="button"
                className="save-btn"
                onClick={() => {
                  setHolidayForm(false);
                  setHolidaySet(true);
                }}
              >
                저장
              </button>
            )}
          </div>
          {holidayForm === false ? (
            <div className="save">
              {holidaySet === false ? (
                <div className="not-set">
                  <label className="tit">공휴일</label>
                  설정안함
                  <label className="tit">정기휴무</label>
                  설정안함
                  <label className="tit">임시휴무</label>
                  설정안함
                </div>
              ) : (
                <>
                  <label className="tit">공휴일</label>
                  저장된 데이터
                  <label className="tit">정기휴무</label>
                  저장된 데이터
                  <label className="tit">임시휴무</label>
                  저장된 데이터
                </>
              )}
            </div>
          ) : (
            <div className="cor-info">
              <div className="red-holiday set-form-wrap">
                <p className="sub-tit">공휴일</p>
                <div className="on-off">
                  {redDay === true ? "휴무 설정" : "설정 안함"}
                  <input
                    type="checkbox"
                    id="check-24"
                    checked={redDay}
                    onChange={() => {
                      setRedDay((redDay) => !redDay);
                    }}
                  />
                  <label htmlFor="check-24">
                    <span></span>
                  </label>
                </div>
                <div className="explan">
                  일요일은 별도로 휴무일로 설정해주세요!
                </div>
              </div>
              <div className="reaular-holiday set-form-wrap">
                <p className="sub-tit">정기 휴무일</p>
                <div className="setting-reaular">
                  <div className="select-wrap">
                    <select>
                      {week.map((a, i) => {
                        return <option key={i}>{week[i]}</option>;
                      })}
                    </select>
                  </div>
                  <div className="select-wrap">
                    <select>
                      {day.map((a, i) => {
                        return <option key={i}>{day[i]}</option>;
                      })}
                    </select>
                  </div>
                  <button type="button" className="delte-btn">
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
                  정기휴무 추가
                </button>
              </div>
              <div className="temporarily-holiday set-form-wrap">
                <p className="sub-tit">임시 휴무일</p>
                <div className="temp-form">
                  <input
                    type="text"
                    placeholder="YYMMDD"
                    value={temStart}
                    onChange={(e) => {
                      let targetN = e.target.value;
                      targetN = targetN.replace(/[^0-9]/g, "");
                      setTemStart(targetN);
                    }}
                  />
                  ~
                  <input
                    type="text"
                    placeholder="YYMMDD"
                    value={temEnd}
                    onChange={(e) => {
                      let targetN = e.target.value;
                      targetN = targetN.replace(/[^0-9]/g, "");
                      setTemEnd(targetN);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
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
