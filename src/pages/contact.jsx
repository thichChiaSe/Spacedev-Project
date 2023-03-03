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
        </div>
      </main>
    </div>
  );
};
