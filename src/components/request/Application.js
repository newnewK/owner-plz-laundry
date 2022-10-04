import { useState } from "react";
import "./../../css/request.scss";

export default function Application() {
  // 대표자명
  let [ceoName, setCeoName] = useState("");
  let ceoValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setCeoName(value.replace(regexp, ""));
  };

  // 사업자 등록증
  let [bizN, setBizN] = useState("");
  let fileValue = bizN.split("\\");
  let fileName = fileValue[fileValue.length - 1];

  //이메일
  let [mail, setMail] = useState("");
  let mailValue = (e) => {
    const regexp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    const value = e.target.value;
    setMail(value.replace(regexp, ""));
  };

  //연락처
  let [tel, setTel] = useState("");
  let telValue = (e) => {
    const regexp = /[^0-9]/gi;
    const value = e.target.value;
    setTel(value.replace(regexp, ""));
  };

  // 대표 이미지
  let [thumb, setThumb] = useState("");
  let thumbValue = (e) => {
    setThumb(e.target.value);
  };
  // 대표이미지 서버에 들어가면 background로 넣어줘야함!!!

  //카테고리
  let [cat, setCat] = useState(false);
  let [catModal, setCatModal] = useState(false);
  let category = [
    { id: "cat0", name: "옷" },
    { id: "cat1", name: "생활" },
    { id: "cat2", name: "침구류" },
    { id: "cat3", name: "신발" },
    { id: "cat4", name: "가죽" },
    { id: "cat5", name: "옷수선" },
  ];
  let [checkCat, setcheckCat] = useState([]);
  let checkedCat = (checked, id) => {
    if (checked) {
      setcheckCat((copy) => [...copy, id]);
    } else {
      setcheckCat(checkCat.filter((el) => el !== id));
    }
  };
  let catSave = () => {
    setCatModal(false);
    setCat(true);
  };

  // ## 수거
  // 수거 가능 여부
  let [carryValue, setCarryValue] = useState(true);
  // 수거 정보 (모달)
  let [carryModal, setCarryModal] = useState(false);
  // 수거 지역
  let [carryArea, setCarryArea] = useState("");
  let caValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setCarryArea(value.replace(regexp, ""));
  };
  // 수거 비용
  let [carryP, setCarryP] = useState("");
  let cpValue = (str) => {
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
  // 지역&비용
  let [ciId, setCiId] = useState(0);
  let [carryInfo, setCarryInfo] = useState([]);
  let crryInf = {
    id: ciId,
    area: carryArea,
    carryP: carryP,
  };
  const pushCarryInfo = () => {
    let copy = [...carryInfo];
    // let filter = copy.filter((carryInfo) => carryInfo.id === corId);
    copy.push(crryInf);
    setCarryInfo(copy);
    setCiId(ciId + 1);
    setCarryModal(false);
    setCarryArea("");
    setCarryP("");
  };
  // 수정 버튼 클릭 & 수정 모달
  let [cor, setCor] = useState(false);
  let [corId, setCorId] = useState("");
  console.log("수정한 아이디", corId);
  let [corArea, setCorArea] = useState("");
  let coraValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setCorArea(value.replace(regexp, ""));
  };
  let [corPrice, setCorPrice] = useState("");
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

  // ## 배달
  // 배달 가능 여부
  let [dlvy, setDlvy] = useState(true);
  // 배달 정보 (모달)
  let [dlvyModal, setDlvyModal] = useState(false);
  // 배달 지역
  let [dlvyArea, setDlvyArea] = useState("");
  let daValue = (e) => {
    const regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    const value = e.target.value;
    setDlvyArea(value.replace(regexp, ""));
  };
  // 배달 비용
  let [dlvyP, setDlvyP] = useState("");
  let dpValue = (str) => {
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
  // 임시 배달 리스트

  return (
    <main className="application-wrap">
      <h2 className="title">입점신청</h2>
      <ul className="explanation">
        <li>
          - 작성해주신 정보를 바탕으로 검토하여 알려드립니다. (소요기간 : 1주
          내외)
        </li>
        <li>- 입점 승인 후, 세부 사장님 모든 페이지를 이용가능합니다.</li>
      </ul>
      <form className="form-wrap">
        <div className={`field`}>
          <label className="required">대표자명</label>
          <input
            type="text"
            placeholder="대표자명 입력"
            className="required_input"
            value={ceoName}
            onChange={ceoValue}
          />
          <em>필수 항목 값을 입력해 주세요</em>
        </div>
        <div className={`field`}>
          <div className="flex-field">
            <label className="required">사업자등록증</label>
            {bizN === "" ? (
              <label className="upload">
                <input
                  type="file"
                  placeholder=""
                  className="required_input"
                  accept="image/png, image/jpeg, image/jpg, application/pdf"
                  value={bizN}
                  onChange={(e) => {
                    setBizN(e.target.value);
                  }}
                />
                업로드
              </label>
            ) : null}
          </div>

          <span className="description">
            가장 최근에 발급한 사업자 등록증을 업로드해 주세요. <br />
            10MB 이하 JPG, JPEG, PNG, PDF 파일 1개만 업로드 가능합니다.
          </span>
          {bizN === "" ? null : (
            <div className="bizN-info">
              <svg viewBox="0 0 91 91">
                <g>
                  <path d="M35.239,70.809c3.567,0,7.173-1.387,9.931-4.145l23.78-23.777l-2.403-2.404L42.766,64.26   c-4.082,4.082-10.596,4.213-14.52,0.292c-3.922-3.924-3.791-10.438,0.293-14.521l22.588-22.59c2.533-2.533,6.654-2.533,9.188,0   c2.532,2.533,2.532,6.655,0,9.189L37.329,59.615c-1.052,1.053-2.884,1.053-3.937,0c-0.525-0.526-0.814-1.225-0.814-1.969   c0-0.743,0.289-1.442,0.814-1.969L54,35.07l-2.403-2.404L30.989,53.273c-1.168,1.168-1.812,2.722-1.812,4.373   c0,1.652,0.644,3.205,1.811,4.371c1.168,1.17,2.721,1.813,4.372,1.813s3.204-0.643,4.372-1.811l23.383-23.383l-0.041-0.039   c3.461-3.883,3.365-9.838-0.356-13.56s-9.677-3.816-13.558-0.356l-0.041-0.04l-0.396,0.396L26.135,47.627   c-5.408,5.408-5.54,14.079-0.292,19.328C28.415,69.527,31.809,70.809,35.239,70.809z" />
                </g>
              </svg>
              <span>{fileName}</span>
              <button
                type="button"
                onClick={() => {
                  setBizN("");
                }}
              >
                <i className="icon close" />
              </button>
            </div>
          )}
          <em>필수 항목 값을 입력해 주세요</em>
        </div>
        <div className={`field`}>
          <label className="required">이메일</label>
          <input
            type="email"
            placeholder="이메일 입력"
            className="required_input"
            value={mail}
            onChange={mailValue}
          />
          <em>필수 항목 값을 입력해 주세요</em>
        </div>
        {/* 연락처 */}
        <div className={`field`}>
          <label className="required">연락처</label>
          <input
            type="tel"
            placeholder="연락처 입력"
            className="required_input"
            value={tel}
            onChange={telValue}
          />
          <em>필수 항목 값을 입력해 주세요</em>
        </div>
        {/* 대표이미지 */}
        <div className={`field`}>
          <label>대표 이미지</label>
          {thumb === "" ? (
            <>
              <label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  value={thumb}
                  onChange={thumbValue}
                />
                <span className="file-btn">
                  <i className="icon carmera" />
                  등록하기
                </span>
              </label>
              <span className="description">
                3MB 이하의 jpg, jpeg, png 파일로 등록해주세요. <br />
                등록하지않을 시 기본 이미지로 등록됩니다.
              </span>
            </>
          ) : null}

          {thumb === "" ? null : (
            <div className="thumb-wrap">
              <div
                className="thumb-img"
                style={{ backgroundImage: `url(${thumb})` }}
              ></div>
              <button
                type="button"
                onClick={() => {
                  setThumb("");
                }}
              >
                <i className="icon close" />
              </button>
            </div>
          )}
        </div>
        {/* 카테고리 */}
        <div className={`field`}>
          <div className="flex-field">
            <label className="required">카테고리</label>
            {checkCat.length === 0 ? null : (
              <button
                type="button"
                className={`cor-btn`}
                onClick={() => {
                  setCatModal(true);
                }}
              >
                수정하기
              </button>
            )}
          </div>
          {cat !== false ? null : (
            <button
              className="file-btn"
              type="button"
              onClick={() => {
                setCatModal(true);
              }}
            >
              <svg viewBox="0 0 48 48">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                />
              </svg>
              등록하기
            </button>
          )}

          {cat !== true ? null : (
            <div className="checked-list">
              카테고리는 <span>{checkCat.join(", ")}</span>
              {checkCat[checkCat.length - 1] === "침구류" ? "를 " : "을 "}
              선택했습니다.
            </div>
          )}

          <em>필수 항목 값을 등록해 주세요</em>

          {/* 옷, 생활, 침구류, 신발, 가죽, 옷수선  */}
          {catModal !== true ? null : (
            <div className="modal category-modal">
              <div className="modal-inner catergory-inner">
                <h2>카테고리 선택</h2>
                <p>
                  사장님 가게에서 이용 가능한 카테고리를 선택해주세요.
                  <br /> 세부 정보는 입점 승인 후 작성 가능해요.
                </p>
                <div className="category-form">
                  {category.map((a, i) => {
                    return (
                      <div key={i}>
                        <input
                          type="checkbox"
                          name="category"
                          id={category[i].id}
                          checked={checkCat.includes(category[i].name)}
                          onChange={(e) => {
                            checkedCat(e.target.checked, category[i].name);
                          }}
                        />
                        <label htmlFor={category[i].id}>
                          {category[i].name}
                          <svg viewBox="0 0 48 48">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M41.6 8L18.9 30.8L6.2 19L2 23.5L19.1 39.4L46 12.4L41.6 8Z"
                            />
                          </svg>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="btn-wrap">
                  <button
                    type="button"
                    name="reset"
                    className="reset"
                    onClick={() => {
                      setCatModal(false);
                    }}
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    name="submit"
                    className="sumbit"
                    onClick={catSave}
                  >
                    등록
                  </button>
                </div>
                <button
                  type="button"
                  name="reset"
                  className="close-modal"
                  onClick={() => {
                    setCatModal(false);
                  }}
                >
                  <i className="icon close" />
                </button>
              </div>
            </div>
          )}
        </div>
        {/* 수거 */}
        <div className={`field`}>
          <label className="required">수거 가능 여부</label>
          <div className="radio-wrap">
            <label>
              <input
                type="radio"
                name="Q1"
                defaultChecked
                value={carryValue}
                onClick={() => {
                  setCarryValue(true);
                }}
              />
              <span></span>
              수거 가능
            </label>
            <label>
              <input
                type="radio"
                name="Q1"
                value={carryValue}
                onClick={() => {
                  setCarryValue(false);
                }}
              />
              <span></span>
              수거 불가능
            </label>
          </div>
          <em>필수 항목 값을 입력해 주세요</em>
        </div>
        {/* 수거 가능 선택시 */}
        {carryValue !== true ? null : (
          <div className={`field`}>
            <div className="flex-field">
              <label className="required">수거 정보</label>
              {carryInfo.length === 0 ? null : (
                <button
                  type="button"
                  className={`cor-btn`}
                  onClick={() => {
                    setCarryModal(true);
                  }}
                >
                  추가하기
                </button>
              )}
            </div>
            {carryInfo.length !== 0 ? null : (
              <div>
                <button
                  className="file-btn"
                  type="button"
                  onClick={() => {
                    setCarryModal(true);
                  }}
                >
                  <svg viewBox="0 0 48 48">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                    />
                  </svg>
                  등록하기
                </button>
                <span className="description">
                  수거 가능한 지역과 수거 비용을 추가해주세요.
                </span>
                <em>필수 항목 값을 입력해 주세요</em>
              </div>
            )}

            <ul className="carry-list">
              {carryInfo.map((a, i) => {
                let idInfo = carryInfo[i].id;
                let areaInfo = carryInfo[i].area;
                let priceInfo = carryInfo[i].carryP;

                return (
                  <li key={i}>
                    <div className="info">
                      지역 <span>{carryInfo[i].area}</span>
                    </div>
                    <div className="info">
                      수거비 <span>{carryInfo[i].carryP}원</span>
                    </div>
                    <div className="btn-group">
                      <button
                        type="button"
                        onClick={() => {
                          setCor(true);
                          setCarryModal(true);
                          setCorArea(areaInfo);
                          setCorPrice(priceInfo);
                          setCorId(idInfo);
                        }}
                      >
                        수정
                      </button>
                      <button type="button">삭제</button>
                    </div>
                  </li>
                );
              })}
            </ul>

            {carryModal !== true ? null : (
              <div className="modal carry-modal">
                <div className="modal-inner">
                  <h2>수거 정보</h2>
                  <div className="carry-form">
                    <label>지역</label>
                    <input
                      type="text"
                      placeholder="동으로 입력"
                      // value={carryArea}
                      value={cor !== true ? carryArea : corArea}
                      onChange={cor !== true ? caValue : coraValue}
                    />
                    <label>수거 비용</label>
                    <div className="price">
                      <input
                        type="text"
                        placeholder="0"
                        value={cor !== true ? carryP : corPrice}
                        onChange={
                          cor !== true
                            ? (e) => {
                                setCarryP(cpValue(e.target.value));
                              }
                            : (e) => {
                                setCorPrice(corpValue(e.target.value));
                              }
                        }
                      />
                      <span className="kr">원</span>
                    </div>
                  </div>
                  <div className="btn-wrap">
                    <button
                      type="button"
                      name="reset"
                      className="reset"
                      onClick={() => {
                        setCarryModal(false);
                      }}
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      name="submit"
                      className="sumbit"
                      onClick={pushCarryInfo}
                    >
                      등록
                    </button>
                  </div>
                  <button
                    type="button"
                    name="reset"
                    className="close-modal"
                    onClick={() => {
                      setCarryModal(false);
                    }}
                  >
                    <i className="icon close" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={`field`}>
          <label className="required">배달 가능 여부</label>
          <div className="radio-wrap">
            <label>
              <input
                type="radio"
                name="Q2"
                defaultChecked
                value={dlvy}
                onChange={() => {
                  setDlvy(true);
                }}
              />
              <span></span>
              배달 가능
            </label>
            <label>
              <input
                type="radio"
                name="Q2"
                value={dlvy}
                onChange={() => {
                  setDlvy(false);
                }}
              />
              <span></span>
              배달 불가능
            </label>
          </div>
          <em>필수 항목 값을 입력해 주세요</em>
        </div>
        {/* 배달 가능 선택시 */}
        {dlvy !== true ? null : (
          <div className={`field`}>
            <div className="flex-field">
              <label className="required">배달 정보</label>
              <button
                type="button"
                className={`cor-btn`}
                onClick={() => {
                  setDlvyModal(true);
                }}
              >
                추가하기
              </button>
            </div>
            <div>
              <button
                className="file-btn"
                type="button"
                onClick={() => {
                  setDlvyModal(true);
                }}
              >
                <svg viewBox="0 0 48 48">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                  />
                </svg>
                등록하기
              </button>
              <span className="description">
                배달 가능한 지역과 배달 비용을 추가해주세요.
              </span>
              <em>필수 항목 값을 입력해 주세요</em>
            </div>
            <ul className="dlvy-list">
              <li>
                <div className="info">
                  지역 <span>XXX동</span>
                </div>
                <div className="info">
                  배달비 <span>XXX원</span>
                </div>
                <div className="btn-group">
                  <button type="button">수정</button>
                  <button type="button">삭제</button>
                </div>
              </li>
            </ul>
            {dlvyModal !== true ? null : (
              <div className="modal dlvy-modal">
                <div className="modal-inner">
                  <h2>배달 정보</h2>
                  <div className="dlvy-form">
                    <label>지역</label>
                    <input
                      type="text"
                      placeholder="동으로 입력"
                      value={dlvyArea}
                      onChange={daValue}
                    />
                    <label>배달비</label>
                    <div className="price">
                      <input
                        type="text"
                        placeholder="0"
                        value={dlvyP}
                        onChange={(e) => {
                          setDlvyP(dpValue(e.target.value));
                        }}
                      />
                      <span className="kr">원</span>
                    </div>
                  </div>
                  <div className="btn-wrap">
                    <button
                      type="button"
                      name="reset"
                      className="reset"
                      onClick={() => {
                        setDlvyModal(false);
                      }}
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      name="submit"
                      className="sumbit"
                      onClick={() => {
                        // 배달 모달 등록
                        setDlvyModal(false);
                      }}
                    >
                      등록
                    </button>
                  </div>
                  <button
                    type="button"
                    name="reset"
                    className="close-modal"
                    onClick={() => {
                      setDlvyModal(false);
                    }}
                  >
                    <i className="icon close" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <button type="button" className="sumbit-btn">
          입점 신청
        </button>
      </form>
    </main>
  );
}
