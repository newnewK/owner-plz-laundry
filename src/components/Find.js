import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./../css/Find.modules.scss";

export default function Find() {
  // tab active

  const current = decodeURI(window.location.href);
  const search = current.split("/find");
  const findTab = search[1].replace("/", "");
  const tab = [
    { id: "id", name: "아이디" },
    { id: "pw", name: "비밀번호" },
  ];
  let [active, setActive] = useState("");

  return (
    <section className="find-wrap">
      <h2 className="find-title">아이디&#183;비밀번호 찾기</h2>

      <div className="tab-list">
        <ul>
          {tab.map((a, i) => {
            return (
              <li
                className={findTab === tab[i].id ? "active" : ""}
                onClick={() => {
                  setActive(tab[i].id);
                }}
                key={i}
              >
                <Link to={tab[i].id}>{tab[i].name} 찾기</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="find-user-warp">
        <Outlet></Outlet>
      </div>
    </section>
  );
}
