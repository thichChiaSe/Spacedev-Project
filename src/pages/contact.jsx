import React, { useState } from "react";
import { Field } from "../components/Field";

export const Contact = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({
    name: "Name is required",
    phone: "Phone is required",
    email: "Email is required",
    content: "Content is required",
    title: "Title is required",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault(); //ngăn chặn refresh trang
    console.log(form);
    const errorObject = {};
    // validate
    if (!form.name?.trim()) {
      errorObject.name = "Please fill in this field";
    }
    if (!form.phone?.trim()) {
      errorObject.phone = "Please fill in this field";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObject.phone = "Định dạng phone không đúng";
    }
    if (!form.email?.trim()) {
      errorObject.email = "Please fill in this field";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObject.email = "Định dạng email không đúng";
    }
    if (
      form.website &&
      !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        form.website
      )
    ) {
      errorObject.website = "Định dạng website không đúng";
    }
    if (!form.title?.trim()) {
      errorObject.title = "Please fill in this field";
    }
    if (!form.content?.trim()) {
      errorObject.content = "Please fill in this field";
    }
    setError(errorObject);
  };

  // optimize code
  const register = (name) => {
    return {
      value: form[name],
      onChange: (ev) => setForm({ ...form, [name]: ev.target.value }),
    };
  };
  return (
    <div>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">mesnu</span>
          </div>
          <a href="./" className="logo">
            <img src="img/logo.svg" alt="" />
            <h1>Spacedev</h1>
          </a>
          <div className="right">
            <div className="have-login">
              <div className="account">
                <a href="./profile.html" className="info">
                  <div className="name">Đặng Thuyền Vương</div>
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#">Đăng xuất</a>
              </div>
            </div>
            {/* <div class="not-login bg-none">
                <a href="#" class="btn-register">Đăng nhập</a>
                <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
            </div> */}
          </div>
        </div>
        <div className="progress" />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="./signin.html">Đăng ký / Đăng nhập</a>
          </li>
          <li>
            <a href="./profile.html" className="account">
              <div className="avatar">
                <img src="img/avt.png" alt="" />
              </div>
              <div className="name">Đặng Thuyền Vương</div>
            </a>
          </li>
          <li>
            <a className="active" href="./">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="./team.html">Spacedev Team</a>
          </li>
          <li>
            <a href="./course-list.html">Khóa Học</a>
          </li>
          <li>
            <a href="./project.html">Dự Án</a>
          </li>
          <li>
            <a href="./contact.html">Liên hệ</a>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" />
      <main id="main">
        <div className="register-course">
          <section className="section-1 wrap container">
            {/* <div class="main-sub-title">liên hệ</div> */}
            <h2 className="main-title">HỢP TÁC CÙNG Spacedev</h2>
            <p className="top-des">
              Đừng ngần ngại liên hệ với <strong>Spacedev</strong> để cùng nhau
              tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối
              tác tuyển dụng và công ty trong và ngoài nước.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <Field
                text="Họ và tên"
                required
                placeholder="Họ và tên"
                {...register("name")}
                error={error.name}
                // onChange={(ev) => setForm({ ...form, name: ev.target.value })}
                // value={form.name || ""}
              />

              <Field
                text="Phone"
                required
                placeholder="0123456789"
                {...register("phone")}
                error={error.phone}
              />
              <Field
                text="Email"
                required
                placeholder="Email của bạn"
                {...register("email")}
                error={error.email}
              />
              <Field
                text="Website"
                placeholder="Đường dẫn website http://"
                {...register("website")}
                error={error.website}
              />
              <Field
                text="Tiêu đề"
                required
                placeholder="Tiêu đề liên hệ"
                error={error.title}
                {...register("title")}
              />
              <Field
                text=" Nội dung"
                required
                {...register("content")}
                error={error.content}
                renderInput={(props) => (
                  <textarea {...props} cols={30} rows={10} />
                  //render props
                )}
              />
              {/* <label>
                <p>
                  Nội dung<span>*</span>
                </p>
                <textarea name id cols={30} rows={10} defaultValue={""} />
              </label> */}
              <button className="btn main rect">đăng ký</button>
            </form>
          </section>
          {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Vương Đặng đã trở thành thành viên mới của Spacedev Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </div>
      </main>
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
                <a href="#">
                  <img src="img/fb-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/email-icon.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/skype-icon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="right">
              <nav>
                <ul>
                  <li>
                    <a href="./">Trang chủ</a>
                  </li>
                  <li>
                    <a href="./course-list.html">Khóa Học</a>
                  </li>
                  <li>
                    <a href="#">Thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <a href="#" className="back-to-top">
            <div className="line" />
            CUỘN LÊN
          </a>
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
    </div>
  );
};
