import React, { useState } from "react";
import { Field } from "../components/Field";
import { useForm } from "../hooks/useForm";
import { regexp, required, validate } from "../utils/validate";

export const Register = () => {
  const { register, validate, values } = useForm({
    name: [required("Xin vui lòng nhập họ tên")],
    phone: [required("Xin vui lòng nhập"), regexp("phone")],
    email: [required("Xin vui lòng nhập"), regexp("email")],
    url: [
      required("Xin vui lòng nhập"),
      regexp(
        /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
      ),
    ],
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // biến lữu giữ các object lỗi
    if (validate()) {
      setIsSuccess(true);
    } else {
      console.log("Validate fail");
    }
  };

  return (
    <>
      <main id="main">
        {isSuccess ? (
          <div class="register-success">
            <div class="contain">
              <div class="main-title">đăng ký thành công</div>
              <p>
                <strong>
                  Chào mừng {values.name} đã trở thành thành viên mới của
                  Spacedev Team.
                </strong>{" "}
                <br />
                Cảm ơn bạn đã đăng ký khóa học tại <strong>Spacedev</strong>,
                chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook hoặc
                số điện thoại của bạn.
              </p>
            </div>
            <a href="/" class="btn main rect">
              về trang chủ
            </a>
          </div>
        ) : (
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
        )}
      </main>
      )
    </>
  );
};
