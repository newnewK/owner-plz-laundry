export default function Notice() {
  return (
    <main className="notice-wrap review-wrap">
      <h2 className="title">&#128079; 사장님 공지</h2>

      <div className="emptied-notice">
        <h5>자주 바뀌는 가게의 상황을 알려주세요.</h5>
        <p>
          긴급 휴무일, 수거&#183;배달 정보 등 <br />
          고객님에게 알리고 싶은 가게 상황을 적어주세요.
        </p>
        <form>
          <div className="notice-txt">
            <textarea />
            <span>11</span>
          </div>
          <div className="upload">
            <ul>
              {/* <li>
                <img src={} width="100%" alt="이미지 업로드" />
              </li> */}
              <li className="upload-file">
                <input type="file" />
                <span>
                  <svg viewBox="0 0 48 48">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                    />
                  </svg>
                  <em>이미지 (0/3)</em>
                </span>
              </li>
            </ul>
            <span>3MB 이하 jpg, jpeg, png 파일만 업로드 가능합니다.</span>
          </div>
          <button type="button" name="submit" className="submit-btn">
            등록
          </button>
        </form>
      </div>
    </main>
  );
}
