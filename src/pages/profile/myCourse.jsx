import React from "react";
import { Link } from "react-router-dom";

export const MyCourse = () => {
  return (
    <div className="tab6">
      <div className="list row">
        <div className="col-md-6 course">
          <div className="wrap">
            <Link className="cover" to="./course-detail.html">
              <img src="/img/img1.png" alt="" />
            </Link>
            <div className="info">
              <Link className="name" to="./course-detail.html">
                Reactjs Advanced
              </Link>
              <p className="des">
                One of the best corporate fashion brands in Sydney
              </p>
            </div>
            <div className="bottom">
              <div className="teacher">
                <div className="avatar">
                  <img src="img/avt.png" alt="" />
                </div>
                <div className="name">Vương Đặng</div>
              </div>
              <Link to="/register.html" className="register-btn">
                6,000,000 đ
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 course">
          <div className="wrap">
            <Link className="cover" to="./course-detail.html">
              <img src="/img/img1.png" alt="" />
            </Link>
            <div className="info">
              <Link className="name" to="./course-detail.html">
                Reactjs Advanced
              </Link>
              <p className="des">
                One of the best corporate fashion brands in Sydney
              </p>
            </div>
            <div className="bottom">
              <div className="teacher">
                <div className="avatar">
                  <img src="img/avt.png" alt="" />
                </div>
                <div className="name">Vương Đặng</div>
              </div>
              <Link to="/register.html" className="register-btn">
                6,000,000 đ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
