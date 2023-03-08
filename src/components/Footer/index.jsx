import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 left">
            <p className="des">Kiến Thức mở Ra Trang Mới Cuộc Đời Bạn</p>
            <p className="address">
              Tòa nhà Robot, 308, Điện Biên Phủ, Phường 4, Quận 3, TP. Hồ Chí
              Minh
            </p>
            <p className="phone">(+84) 949 816 596</p>
            <div className="social">
              <Link to="#">
                <img src="/img/fb-icon.png" alt="" />
              </Link>
              <Link to="#">
                <img src="/img/email-icon.png" alt="" />
              </Link>
              <Link to="#">
                <img src="/img/skype-icon.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="right">
            <nav>
              <ul>
                <li>
                  <NavLink to="./">Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to="./course-detail">Khóa Học</NavLink>
                </li>
                <li>
                  <NavLink to="./payment">Thanh toán</NavLink>
                </li>
                <li>
                  <NavLink to="#">Điều khoản</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Link to="#" className="back-to-top">
          <div className="line" />
          CUỘN LÊN
        </Link>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="flex gap-2">
            2020 spacedev.vn
            <div className="select flex gap-1 cursor-pointer items-center">
              <img width={15} src="./img/icon-lang.svg" alt="" />
              Tiếng Việt
              <img src="./img/nav-caret.svg" style={{ marginTop: "13px" }} />
            </div>
          </div>
          <p>Được thiết kế và lập trình bởi Spacedev Team</p>
        </div>
      </div>
    </footer>
  );
};
