import React from "react";

export const Home = () => {
  return (
    <main id="main">
      <div className="homepage">
        <div className="slider">
          <div className="item">
            <div className="container">
              <div className="content">
                <h2 className="title">
                  Điều quan trọng không phải là{" "}
                  <span style={{ color: "rgb(229, 57, 53)" }}>vị trí đứng</span>{" "}
                  mà là{" "}
                  <span style={{ color: "rgb(63, 81, 181)" }}>hướng đi</span>
                </h2>
                <a
                  href="https://spacedev.vn/roadmap"
                  className="btn main round"
                >
                  Roadmap
                </a>
              </div>
            </div>
            <div className="jarallax-img">
              <img src="./img/banner1.jpg" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="content">
                <h2 className="title">Kiến thức</h2>
                <h2 className="title">mở ra trang mới cuộc đời bạn</h2>
                <a href="https://spacedev.vn" className="btn main round">
                  KHÓA HỌC
                </a>
              </div>
            </div>
            <div className="jarallax-img">
              <img src="./img/banner2.jpg" alt="" />
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="content">
                <h2 className="title">Chuyên nghiệp</h2>
                <h2 className="title">làm cho bạn khác biệt</h2>
                <a href="https://spacedev.vn/about" className="btn main round">
                  KHÓA HỌC
                </a>
              </div>
            </div>
            <div className="jarallax-img">
              <img src="./img/banner3.jpg" alt="" />
            </div>
          </div>
        </div>
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">KHÓA HỌC SPACEDEV</h2>
            <p className="top-des">
              Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt
              động kinh doanh hay chỉ đơn giản là muốn khám phá thế giới, hãy
              chọn lộ trình học tập mà bạn muốn và bắt đầu câu chuyện thành công
              của bạn.
            </p>
            <div className="textbox" style={{ marginTop: "100px" }}>
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">OFFLINE</h2>
            </div>
            <div className="list row">
              <div className="col-md-4 course">
                <div className="wrap">
                  <a className="cover" href="./course-detail.html">
                    <img src="./img/img1.png" alt="" />
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
              <div className="col-md-4 course">
                <div className="wrap">
                  <a href="./course-detail.html" className="cover">
                    <img src="./img/img.png" alt="" />
                  </a>
                  <div className="info">
                    <a className="name" href="./course-detail.html">
                      React JS
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
              <div className="col-md-4 course">
                <div className="wrap">
                  <a href="./course-detail.html" className="cover">
                    <img src="./img/img2.png" alt="" />
                  </a>
                  <div className="info">
                    <a className="name" href="./course-detail.html">
                      Devops
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
              <div className="col-md-4 course">
                <div className="wrap">
                  <a href="./course-detail.html" className="cover">
                    <img src="./img/img3.png" alt="" />
                  </a>
                  <div className="info">
                    <a className="name" href="./course-detail.html">
                      Lập trình Nodejs
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
              <div className="col-md-4 course">
                <div className="wrap">
                  <a href="./course-detail.html" className="cover">
                    <img src="./img/img4.png" alt="" />
                  </a>
                  <div className="info">
                    <a href="./course-detail.html" className="name">
                      HTML, CSS, JS Cơ bản
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
              <div className="col-md-4 course">
                <div className="wrap">
                  <a href="./course-detail.html" className="cover">
                    <img src="./img/img5.png" alt="" />
                  </a>
                  <div className="info">
                    <a className="name" href="./course-detail.html">
                      Web Responsive
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
            <div className="flex justify-center">
              <a href="./course-list.html" className="btn main">
                Tất cả khóa học
              </a>
            </div>
          </div>
        </section>
        <section className="section-different">
          <div className="container">
            <div className="row">
              <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                <h2 className="main-title white textleft">
                  <span>Giá trị Cốt lỗi</span> <br /> tại Spacedev
                </h2>
                <div className="videodif" data-src="video/cfd-video-intro.mp4">
                  <img
                    src="https://svtech.com.vn/wp-content/uploads/2020/07/dexus-office-space.jpg"
                    alt=""
                  />
                  <div className="play-btn btn-video-intro">
                    <img src="img/play-icon.svg" alt="" />
                  </div>
                </div>
                <div className="item" style={{ marginTop: "35px" }}>
                  <h4>Sáng tạo và đơn giản</h4>
                  <p>
                    Spacedev đề cao những sáng tạo đơn giản thay đổi thế giới,
                    gia tăng năng suất và cải thiện cuộc sống.
                  </p>
                </div>
              </div>
              <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                <div className="item">
                  <h4>Tập trung vào khách hàng</h4>
                  <p>
                    Spacedev được tạo ra với mục tiêu cao nhất giúp cho việc học
                    trở nên dễ dàng hơn và kiến thức thật sự ý nghĩa. Những học
                    viên là đối tượng phục vụ của spacedev vì thế những yêu cầu
                    chính đáng của học viên sẽ được nền tảng tiếp thu và cải
                    thiện.
                  </p>
                </div>
                <div className="item">
                  <h4>Gây dựng lòng tin</h4>
                  <p>
                    Spacedev luôn trung thực với những gì mình phát ngôn cũng
                    như công bố trên các nền tảng mạng xã hội. Trung thực và giữ
                    chữ tín với học viên, với đối tác và với những người sáng
                    lập luôn là tiêu chí hàng đầu giúp nền tảng phát triển bền
                    vững ở hiện tại và trong tương lai.
                  </p>
                </div>
                <div className="item">
                  <h4>Phát triển nhưng không dừng lại</h4>
                  <p>
                    Bằng việc áp dụng những công nghệ trên nền tảng và sự hoàn
                    thiện về chức năng là mình chứng rõ nhất cho sự chuyên
                    nghiệp cũng như sự tận tâm của những người sáng lập nền tảng
                    spacedev.vn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/Spacedev-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
        <section className="section-testimonial">
          <div className="container">
            <div className="textbox">
              <h2 className="main-title white">Học viên nói gì về spacedev</h2>
            </div>
            <div className="testimonial">
              <div className="testimonial-item">
                <div className="item">
                  <div className="text">
                    <div className="ct ct-1 active">
                      <div className="info">
                        <div className="name">
                          <h4>Nguyễn Minh Hoàng</h4>
                          <p>Thành viên Spacedev 1</p>
                        </div>
                        <div className="quotes">
                          <img src="img/quotes.svg" alt="" />
                        </div>
                      </div>
                      <div className="content">
                        Khóa học quá tuyệt vời, đầy đủ kiến thức lại còn được
                        bonus thêm những kỹ năng tìm lỗi và phỏng vấn khi đi làm
                        nữa
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                        <span>Ngày 09 tháng 10, 2020</span>
                      </div>
                    </div>
                    <div className="ct ct-2">
                      <div className="info">
                        <div className="name">
                          <h4>Trần Thanh Tâm</h4>
                          <p>Thành viên Spacedev 2</p>
                        </div>
                        <div className="quotes">
                          <img src="img/quotes.svg" alt="" />
                        </div>
                      </div>
                      <div className="content">
                        Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                        lập trình front-end qua khóa học. Nơi chọn lựa an tâm
                        cho mọi người.
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                        <span>Ngày 01 tháng 10, 2020</span>
                      </div>
                    </div>
                    <div className="ct ct-3">
                      <div className="info">
                        <div className="name">
                          <h4>Lê Thị Thanh Vân</h4>
                          <p>Thành viên Spacedev 3</p>
                        </div>
                        <div className="quotes">
                          <img src="img/quotes.svg" alt="" />
                        </div>
                      </div>
                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sollicitudin libero id magna finibus, in maximus
                        urna tincidunt. Nam at leo lacinia, interdum dolor in,
                        molestie lectus. Aenean porttitor purus at purus euismod
                        tristique
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank">
                          <img src="img/facebook.svg" alt="" />
                        </a>
                        <span>Ngày 05 tháng 04, 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="images">
                    <div className="list">
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="img/img_team14.jpg"
                            />
                            <img
                              data-flickity-lazyload="img/img_team14.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="img/img_team15.jpg"
                            />
                            <img
                              data-flickity-lazyload="img/img_team15.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="carousel-cell">
                        <div className="img">
                          <picture>
                            <source
                              media="(max-width: 767px)"
                              srcSet="img/img_team17.jpg"
                            />
                            <img
                              data-flickity-lazyload="img/img_team17.jpg"
                              alt=""
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dots" />
                <div className="btn_ctr prev" />
                <div className="btn_ctr next" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-gallery">
          <div className="textbox">
            <h2 className="main-title">Hình ảnh hoạt động</h2>
          </div>
          <div className="list">
            <div className="item">
              <div>
                <img data-flickity-lazyload="./img/img_team1.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team2.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team3.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team4.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team5.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team6.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team7.jpg" alt="" />
              </div>
            </div>
            <div className="item">
              <div>
                <img data-flickity-lazyload="./img/img_team8.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team9.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team10.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team11.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team12.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team13.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team14.jpg" alt="" />
              </div>
            </div>
            <div className="item">
              <div>
                <img data-flickity-lazyload="./img/img_team15.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team16.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team17.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team18.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team19.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team20.jpg" alt="" />
              </div>
              <div>
                <img data-flickity-lazyload="./img/img_team21.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="controls">
            <div className="btn_ctr prev" />
            <span>Trượt qua</span>
            <div className="timeline">
              <div className="process" />
            </div>
            <div className="btn_ctr next" />
          </div>
        </section>
        <section className="section-action">
          <div className="container">
            <h3>Học thử trước khi đăng ký khóa học tại Spacedev?</h3>
            <div className="btn main round bg-white">Học thử</div>
          </div>
        </section>
      </div>
    </main>
  );
};
