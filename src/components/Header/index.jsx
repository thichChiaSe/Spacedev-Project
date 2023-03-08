import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const { patchName } = useLocation();
  useEffect(() => {
    closeNav();
  }, [patchName]);

  const toggleMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };
  const closeNav = () => {
    document.body.classList.remove("menu-is-show");
  };

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={toggleMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">mesnu</span>
          </div>
          <Link to="./" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <Link to="./profile.html" className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="#">Khóa học của tôi</Link>
                <Link to="#">Thông tin tài khoản</Link>
                <Link to="#">Đăng xuất</Link>
              </div>
            </div>
            {/* <div class="not-login bg-none">
          <Link to="#" class="btn-register">Đăng nhập</Link>
          <Link to="login.html" class="btn main btn-open-login">Đăng ký</Link>
      </div> */}
          </div>
        </div>
        <div className="progress" />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <Link to="./signin.html">Đăng ký / Đăng nhập</Link>
          </li>
          <li>
            <Link to="./profile" className="account">
              <div className="avatar">
                <img src="/img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </Link>
          </li>
          <li>
            <NavLink onClick={closeNav()} to="./team">
              Spacedev Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav()} to="./course-detail">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav()} to="./project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav()} to="./contact">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
      {/*  overlay_nav là khi làm mờ khi click menu nav */}
    </>
  );
};
