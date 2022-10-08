import { Link, Outlet, useLocation } from "react-router-dom";
import "./../../css/Store.modules.scss";

export default function StoreInfomation() {
  const location = useLocation();
  console.log(location.pathname);
  let current = location.pathname;

  const tab = [
    { id: "basic", name: "기본정보" },
    { id: "operate", name: "운영정보" },
    { id: "delivery", name: "수거·배달정보" },
  ];
  return (
    <main className="store-info-wrap store-wrap">
      <h2 className="title">&#9997; 가게정보</h2>
      <ul className="info-tab">
        {tab.map((a, i) => {
          return (
            <li
              className={`/store-info/${tab[i].id}` === current ? "active" : ""}
              key={i}
            >
              <Link to={`/store-info/${tab[i].id}`}>{tab[i].name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet></Outlet>
    </main>
  );
}
