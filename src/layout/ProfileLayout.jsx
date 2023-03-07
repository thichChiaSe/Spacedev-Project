import React from "react";
import { Outlet } from "react-router-dom";

export const ProfileLayout = () => {
  return (
    <main id="main">
      <div className="profile">
        <section>
          <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="img/avt.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">Vương Đặng</div>
            <p className="des">
              Thành viên của spacedev từ ngày 20 tháng 10 năm 2022
            </p>
          </div>
          <div className="container">
            {/* outlet giúp react-router-dom chỉ định rõ nơi nào sẽ được render ra */}
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
};
