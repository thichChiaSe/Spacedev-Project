import React from "react";
import { PATH } from "../config/patch";

export const Page404 = () => {
  return (
    <main id="main">
      <div className="notfound">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <a href={PATH.home} className="btn main round">
              Trang chủ
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};
