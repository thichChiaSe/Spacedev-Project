import React, { useState } from "react";
import { Field } from "../components/Field";
import { regexp, required, validate } from "../utils/validate";

export const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // biến lữu giữ các object lỗi
    const errorObject = validate(
      {
        name: [required("Xin vui lòng nhập họ tên")],
        phone: [required("Xin vui lòng nhập"), regexp("phone")],
        email: [required("Xin vui lòng nhập"), regexp("email")],
        url: [
          required("Xin vui lòng nhập"),
          regexp(
            /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
          ),
        ],
      },
      form
    );
    if (Object.keys(errorObject).length === 0) {
      console.log("Validate success");
    } else {
      console.log("Validate fail");
    }
    // validate
    setError(errorObject);
  };
  const register = (name) => {
    return {
      error: error[name],
      value: form[name] || "",
      onChange: (ev) => setForm({ ...form, [name]: ev.target.value }),
    };
  };
  return (
    <>
      <main id="main">
        <section className="register-course">
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến Reactjs Advanced </h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> 6,000,000 VND
                </div>
              </div>
              <form className="form">
                <Field
                  text="Họ và tên"
                  required
                  placeholder="Họ và tên"
                  {...register("name")}
                  // error={error.name}
                  // onChange={(ev) => setForm({ ...form, name: ev.target.value })}
                  // value={form.name || ""}
                />
                <Field
                  text="Phone"
                  required
                  placeholder="0123456789"
                  {...register("phone")}
                  // error={error.phone}
                />
                <Field
                  text="Email"
                  required
                  placeholder="Email của bạn"
                  {...register("email")}
                  // error={error.email}
                />
                <Field
                  text="Facebook link"
                  placeholder="Đường dẫn website http://"
                  {...register("url")}
                  // error={error.website}
                />
                <Field
                  text="Tiêu đề"
                  required
                  placeholder="Tiêu đề liên hệ"
                  // error={error.title}
                  {...register("title")}
                />
                <Field
                  text="Sử dụng COIN"
                  // error={error.coin}
                  {...register("coin")}
                  renderInput={(props) => (
                    <>
                      <div class="checkcontainer">
                        Hiện có <strong>300 COIN</strong>
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </div>
                    </>
                  )}
                />
                <Field
                  text="Hình thức thanh toán"
                  required
                  {...register("payment")}
                  // error={error.payment}
                  renderInput={(props) => (
                    <>
                      <div className="select">
                        <div className="head">Chuyển khoản</div>
                        <div className="sub">
                          <a href="#">Chuyển khoản</a>
                          <a href="#">Thanh toán tiền mặt</a>
                        </div>
                      </div>
                    </>
                    //render props
                  )}
                />
                <Field
                  text="Ý kiến cá nhân"
                  // error={error.idea}
                  {...register("idea")}
                />
                <button onClick={handleSubmit} className="btn main rect">
                  đăng ký
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
