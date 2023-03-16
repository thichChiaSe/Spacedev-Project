import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../config/patch";

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
            <div className="tab">
              <div className="tab-title">
                <NavLink to={PATH.profile.index} className="active">
                  Thông tin tài khoản
                </NavLink>
                <NavLink to={PATH.profile.course}>Khóa học của bạn</NavLink>
                <NavLink to={PATH.profile.project}>Dự án đã làm</NavLink>
                <NavLink to={PATH.profile.payment}>Lịch sử thanh toán</NavLink>
                <NavLink to={PATH.profile.coin}>Quản lý coin của tôi</NavLink>
              </div>
            </div>
            {/* outlet giúp react-router-dom chỉ định rõ nơi nào sẽ được render ra */}
          </div>
        </section>
      </div>
    </main>
  );
};
