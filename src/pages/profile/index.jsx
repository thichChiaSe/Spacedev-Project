import React from "react";

export const MyProfile = () => {
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
                <a href="#" className="active">
                  Thông tin tài khoản
                </a>
                <a href="#">Khóa học của bạn</a>
                <a href="#">Dự án đã làm</a>
                <a href="#">Lịch sử thanh toán</a>
                <a href="#">Quản lý COIN của tôi</a>
                <a href="#">Khóa học đã xem</a>
              </div>
              <div className="tab-content">
                <div className="tab1">
                  <label>
                    <p>
                      Họ và tên<span>*</span>
                    </p>
                    <input type="text" placeholder="Nguyễn Văn A" />
                  </label>
                  <label>
                    <p>
                      Số điện thoại<span>*</span>
                    </p>
                    <input type="text" placeholder="0949******" />
                  </label>
                  <label>
                    <p>
                      Email<span>*</span>
                    </p>
                    <input
                      defaultValue="dangthuyenvuong@gmail.com"
                      disabled
                      type="text"
                    />
                  </label>
                  <label>
                    <p>
                      Facebook<span>*</span>
                    </p>
                    <input type="text" placeholder="Facebook url" />
                  </label>
                  <label>
                    <p>
                      Skype<span>*</span>
                    </p>
                    <input type="text" placeholder="Skype url" />
                  </label>
                  <label>
                    <p />
                    <div className="checkcontainer">
                      Thay đổi mật khẩu
                      {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                      {/* Cần ít nhất 200 COIN để giảm giá */}
                      <input type="checkbox" defaultChecked="checked" />
                      <span className="checkmark" />
                    </div>
                  </label>
                  <label>
                    <p>
                      Mật khẩu cũ<span>*</span>
                    </p>
                    <input type="password" placeholder="Mật khẩu cũ" />
                  </label>
                  <label>
                    <p>
                      Mật khẩu mới<span>*</span>
                    </p>
                    <input type="password" placeholder="Mật khẩu mới" />
                  </label>
                  <label>
                    <p>
                      Xác nhận<span>*</span>
                    </p>
                    <input type="password" placeholder="Xác nhận mật khẩu" />
                  </label>
                  <div className="btn main rect">LƯU LẠI</div>
                </div>
                <div className="tab2">
                  <div className="item">
                    <div className="cover">
                      <img src="/img/img3.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#" className="name">
                        Reactjs Advanced
                      </a>
                      <div className="date">Khai giảng ngày 09/09/2019</div>
                      <div className="row">
                        <div>
                          <img src="/img/clock.svg" alt="" className="icon" />
                          54 giờ
                        </div>
                        <div>
                          <img src="/img/play.svg" alt="" className="icon" />
                          25 video
                        </div>
                        <div>
                          <img src="/img/user.svg" alt="" className="icon" />
                          20 học viên
                        </div>
                      </div>
                      <div className="process">
                        <div className="line">
                          <div className="rate" style={{ width: "30%" }} />
                        </div>
                        30%
                      </div>
                      <div className="btn overlay round btn-continue">
                        Tiếp tục học
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cover">
                      <img src="/img/img7.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#" className="name">
                        Nodejs Advanced
                      </a>
                      <div className="date">Khai giảng ngày 09/09/2019</div>
                      <div className="row">
                        <div>
                          <img src="img/clock.svg" alt="" className="icon" />
                          54 giờ
                        </div>
                        <div>
                          <img src="img/play.svg" alt="" className="icon" />
                          25 video
                        </div>
                        <div>
                          <img src="img/user.svg" alt="" className="icon" />
                          20 học viên
                        </div>
                      </div>
                      <div className="process">
                        <div className="line">
                          <div className="rate" style={{ width: "30%" }} />
                        </div>
                        30%
                      </div>
                      <div className="btn overlay round btn-continue">
                        Tiếp tục học
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab3">
                  <div className="row">
                    <div className="col-md-6 course">
                      <div className="wrap">
                        <a href="#" className="cover">
                          <img src="/img/img8.png" alt="" />
                        </a>
                        <div className="info">
                          <a href="#" className="name">
                            Reactjs
                          </a>
                          <p className="des">
                            Dự án hoàn thành trong khóa Spacedev1 Offline của
                            Spacedev Team.
                          </p>
                        </div>
                        <div className="bottom">
                          <div className="teacher">
                            <div className="avatar">
                              <img src="img/avt.png" alt="" />
                            </div>
                            <div className="name">Vương Đặng</div>
                          </div>
                          <div className="register-btn">Website</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 course">
                      <div className="wrap">
                        <a href="#" className="cover">
                          <img src="/img/img8.png" alt="" />
                        </a>
                        <div className="info">
                          <a href="#" className="name">
                            Shopper
                          </a>
                          <p className="des">
                            Dự án hoàn thành trong khóa Spacedev1 Offline của
                            Spacedev Team.
                          </p>
                        </div>
                        <div className="bottom">
                          <div className="teacher">
                            <div className="avatar">
                              <img src="img/avt.png" alt="" />
                            </div>
                            <div className="name">Vương Đặng</div>
                          </div>
                          <div className="register-btn">Website</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-wrap">
                    <div className="btn overlay btn-icon round">
                      <img
                        src="img/icon-upload.svg"
                        alt=""
                        style={{ marginRight: "10px" }}
                      />{" "}
                      Tải lên
                    </div>
                  </div>
                </div>
                <div className="tab4">
                  <div className="item itemhistory">
                    <div>
                      <div className="name">Khóa học Spacedev1-offline</div>
                      <div className="date">09/09/2020</div>
                    </div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                  <div className="item itemhistory">
                    <div>
                      <div className="name">Khóa học Spacedev1-offline</div>
                      <div className="date">18/10/2020</div>
                    </div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                  <div className="item itemhistory">
                    <div>
                      <div className="name">Khóa học Spacedev1-offline</div>
                      <div className="date">18/10/2020</div>
                    </div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                  <div className="item itemhistory">
                    <div>
                      <div className="name">Khóa học Spacedev1-offline</div>
                      <div className="date">18/10/2020</div>
                    </div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                </div>
                <div className="tab5 cointab" >
                  <div className="coininfo">
                    <div className="coininfo__box">
                      <h3>
                        <strong>Thông tin COIN</strong>
                      </h3>
                      <div className="coininfo__box-ct">
                        <div>
                          <img src="img/Spacedev-coin.png" alt="" />
                          <p>
                            Bạn có <strong>300</strong> COIN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="coininfo__box">
                      <h3>
                        <strong>Đổi COIN</strong>
                      </h3>
                      <div className="coininfo__box-ct">
                        <label className="checkcontainer">
                          Voucher Tiki 100k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Voucher Tiki 200k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Voucher Tiki 500k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Thẻ nạp điện thoại 100k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Thẻ nạp điện thoại 200k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <label className="checkcontainer">
                          Thẻ nạp điện thoại 500k
                          <input type="radio" name="radio" />
                          <span className="checkmarkradio" />
                        </label>
                        <small>
                          <i>*Bạn có thể đổi COIN 1 lần</i>
                        </small>
                      </div>
                      <a href="javascript:void(0)" className="btn main">
                        Đổi COIN
                      </a>
                    </div>
                  </div>
                  <div className="coinhistory">
                    <h3>
                      <strong>Lịch sử COIN</strong>
                    </h3>
                    {/* <p>Chưa sử dụng COIN</p> */}
                    <div className="itemhistory">
                      <div className="td">
                        <strong>COIN</strong>
                      </div>
                      <div className="td">
                        <strong>Thời gian</strong>
                      </div>
                      <div className="td">
                        <strong>Nội dung</strong>
                      </div>
                      <div className="td">
                        <strong>Trạng thái</strong>
                      </div>
                    </div>
                    <div className="itemhistory">
                      <div className="td">
                        <span className="coin red">-300</span>
                      </div>
                      <div className="td">09/09/2020</div>
                      <div className="td">
                        Giới thiệu khóa học cho học viên mới
                      </div>
                      <div className="td">Đã chấp nhận</div>
                    </div>
                    <div className="itemhistory">
                      <div className="td">
                        <span className="coin">+300</span>
                      </div>
                      <div className="td">18/10/2020</div>
                      <div className="td">
                        Dùng COIN để quy đổi sang Voucher Tiki
                      </div>
                      <div className="td">Đã chấp nhận</div>
                    </div>
                    <div className="itemhistory">
                      <div className="td">
                        <span className="coin red">-300</span>
                      </div>
                      <div className="td">18/10/2020</div>
                      <div className="td">
                        Dùng COIN để đổi sang Thẻ nạp điện thoại
                      </div>
                      <div className="td">Chờ duyệt</div>
                    </div>
                  </div>
                </div>
                <div className="tab6">
                  <div className="list row">
                    <div className="col-md-6 course">
                      <div className="wrap">
                        <a className="cover" href="./course-detail.html">
                          <img src="/img/img1.png" alt="" />
                        </a>
                        <div className="info">
                          <a className="name" href="./course-detail.html">
                            Reactjs Advanced
                          </a>
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
                          <a href="/register.html" className="register-btn">
                            6,000,000 đ
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 course">
                      <div className="wrap">
                        <a className="cover" href="./course-detail.html">
                          <img src="/img/img1.png" alt="" />
                        </a>
                        <div className="info">
                          <a className="name" href="./course-detail.html">
                            Reactjs Advanced
                          </a>
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
                          <a href="/register.html" className="register-btn">
                            6,000,000 đ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
