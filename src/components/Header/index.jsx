import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PATH } from "../../config/patch";

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
            <span className="text">menu</span>
          </div>
          <Link to={PATH.home} className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </Link>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <Link to={PATH.profile.index} className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to={PATH.profile.course}>Khóa học của tôi</Link>
                <Link to={PATH.profile.index}>Thông tin tài khoản</Link>
                <Link to={PATH.signOut}>Đăng xuất</Link>
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
            <Link to={PATH.register}>Đăng ký / Đăng nhập</Link>
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
            <NavLink onClick={closeNav()} to={PATH.team}>
              Spacedev Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav()} to={PATH.courseDetail}>
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav()} to={PATH.project}>
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav()} to={PATH.contact}>
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
