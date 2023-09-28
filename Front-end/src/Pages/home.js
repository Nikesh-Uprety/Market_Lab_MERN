import  Footor  from "../components/Layout/footor";
import Navbar from "../components/Layout/navbar";
import Sidebar from "../components/Layout/sidebar";

import '../../src/App.css';


const Home = () => {
   
    return (
        <div>
            <Navbar/>
            <>
                <Sidebar />

                <section
                    className="hero-section d-flex justify-content-center align-items-center"
                    id="section_1"
                >
                    <div className="section-overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                                <h2
                                    className="text"
                                    style={{ color: "#fffdfa", fontFamily: '"Open Sans", sans-serif' }}
                                >
                                    Welcome to
                                </h2>
                                <h1
                                    className="cd-headline rotate-1 mb-4 pb-2"
                                    style={{ color: "#ffffff", fontFamily: '"Open Sans", sans-serif' }}
                                >
                                    <span>Market Lab</span>
                                    <span className="cd-words-wrapper animation-fall">
                                        <b className="is-visible"> Trading</b>
                                        <b>Institution</b>
                                    </span>
                                </h1>
                                <div className="custom-btn-group">
                                    <a href="#section_2" className="btn custom-btn smoothscroll me-3">
                                        Our Story
                                    </a>
                                    <a href="#section_3" className="link smoothscroll">
                                        Become a member
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="#ffffff"
                            fillOpacity={1}
                            d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                        ></path>
                    </svg>
                </section>
                <section className="section-bg-image" style={{ marginTop: 50 }}>

                    <svg
                        viewBox="0 0 1265 144"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="section-bg-image-block">
                                    <h2 className="mb-lg-3">Get our Free E-Book</h2>
                                    <p />
                                    <form
                                        action="https://formspree.io/f/mgebbzyz"
                                        method="post"
                                        className="custom-form mt-lg-4 mt-2"
                                        role="form"
                                    >
                                        <div className="input-group input-group-lg">
                                            <span
                                                className="input-group-text bi-envelope"
                                                id="basic-addon1"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                id="subscribe"
                                                pattern="[^ @]*@[^ @]*"
                                                className="form-control sub"
                                                placeholder="Email address"
                                                required=""
                                            />
                                            <button type="submit" className="form-control sub">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg
                        viewBox="0 0 1265 144"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 0 40 C 164 40 164 20 328 20 L 328 20 L 328 0 L 0 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 327 20 C 445.5 20 445.5 89 564 89 L 564 89 L 564 0 L 327 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 563 89 C 724.5 89 724.5 48 886 48 L 886 48 L 886 0 L 563 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 885 48 C 1006.5 48 1006.5 67 1128 67 L 1128 67 L 1128 0 L 885 0 Z"
                            strokeWidth={0}
                        />
                        <path
                            fill="rgba(255, 255, 255, 1)"
                            d="M 1127 67 C 1196 67 1196 0 1265 0 L 1265 0 L 1265 0 L 1127 0 Z"
                            strokeWidth={0}
                        />
                    </svg>
                </section>
                <section className="about-section section-padding" id="section_2">
                    <div className="container">
                        <div className="col-lg-6 col-12">

                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-12 text-center">
                                <h2 className="mb-lg-5 mb-4">About Market Lab</h2>
                            </div>
                            <div className="col-lg-5 col-12 me-auto mb-4 mb-lg-0">
                                <p className="aboutfont ">
                                    MarketLab is a pioneering trading instituion that has come up with
                                    the motto to provide the best courses upon trading and investing to
                                    upgrade our customers art of trading and investing.Market Lab is
                                    Founded by Aashish Shah, along with co-founder Nikesh Uprety,
                                    MarketLab traders emerged from their tough journey when they started
                                    to trade in the financial market back in 2019 and dealing with all
                                    those struggles and lessons, they have come across as innovative and
                                    expert player in the trading industry.
                                </p>
                                <p className="aboutfont">
                                    MarketLab was founded in 2023 to meet the growing need of education
                                    for a dynamic and technologically advanced trading platform in
                                    Nepal. The company has aimed to revolutionize the way trading was
                                    conducted and set new industry standards. Despite initial
                                    challenges, the founders remained committed to their vision and have
                                    come up with the innovation to revolutionize the way of learning and
                                    practicing trading .
                                </p>


                                <div className="fontwidth">
                                    <p className="aboutfont">
                                        By adopting a psychological and customer-centric approach, MarketLab
                                        has built fast adapting and evolving courses and webinars for their
                                        clients by analyzing clients needs towards trading. The companys
                                        continuous research and innovation in the financial market has kept
                                        them at the forefront of industry developments, enabling them to
                                        provide a competitive edge to their clients.
                                    </p>
                                    <p className="aboutfont">
                                        <strong>In 2023, May,</strong> MarketLab reached another significant
                                        milestone with the launch of its official website. The website
                                        serves as a comprehensive hub, offering real-time market updates,
                                        educational resources, and a user-friendly interface for seamless
                                        trading experiences. MarketLab aims to foster transparency,
                                        accessibility, and empowerment through its website. Today, MarketLab
                                        is a trusted name in the Nepalese trading community, known for its
                                        integrity, innovation, and exceptional customer service. With a team
                                        of dedicated professionals, MarketLab continues to redefine the
                                        trading landscape, empowering investors and shaping the future of
                                        financial markets in Nepal.
                                    </p>
                                    <p className="aboutfont">
                                        {" "}
                                        <strong>
                                            Join MarketLab today to experience a new era of trading excellence
                                            and opportunities.
                                        </strong>{" "}
                                    </p>


                                </div>
                                <div className="ratio ratio-16x9">

                                    <iframe
                                    style={{borderRadius:20}}
                                        className="ytvideo"
                                        width={560}
                                        height={315}
                                        src="https://www.youtube.com/embed/wybCItwoEY0?si=6A1tasUTdWSNwMqv"
                                        title="YouTube video player"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen=""
                                    />
                                </div>

                            </div>
                            <div className="centric">
                                <div className="col-lg-3 col-md-6 gaap col-12 mb-4 mb-lg-0 mb-md-0">
                                    <div className="member-block">
                                        <div className="member-block-image-wrap">
                                            <img
                                                src="/images/members/aashishcropped.jpg"
                                                className="member-block-image img-fluid"
                                                alt=""
                                            />
                                            <ul className="social-icon">
                                                <li className="social-icon-item">
                                                    <a
                                                        href="https://www.instagram.com/aashishshah588/"
                                                        className="social-icon-link bi-instagram"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="member-block-info d-flex align-items-center">
                                            <h4>Aashish Shah</h4>
                                            <p className="ms-auto">Founder</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 gaap col-md-6 col-12">
                                    <div className="member-block">
                                        <div className="member-block-image-wrap">
                                            <img
                                                src="/images/members/nikeshcoat.jpg"
                                                className="member-block-image nikesh img-fluid"
                                                alt=""
                                            />
                                            <ul className="social-icon">
                                                <li className="social-icon-item">
                                                    <a
                                                        href="https://www.instagram.com/nikesh_up/"
                                                        className="social-icon-link bi-instagram"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="member-block-info d-flex align-items-center">
                                            <h4>Nikesh Uprety</h4>
                                            <p className="ms-auto">Co-Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="membership-section section-padding" id="section_3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12 text-center mx-auto mb-lg-5 mb-4">
                                <h2>
                                    <span>Membership</span> at Market Lab Community
                                </h2>
                            </div>
                            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                                <h4 className="mb-4 pb-lg-2">Course Details</h4>
                                <div className="table-responsive">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "25%" }}>Available Courses</th>
                                                <th style={{ width: "22%" }}>Level</th>
                                                <th style={{ width: "22%" }}>Availability</th>
                                                <th style={{ width: "22%" }}>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-start">
                                                    Zero to Hero Trading Course
                                                </th>
                                                <td>
                                                    {/* <i class="bi-check-circle-fill"></i> */}
                                                    <p className="font-weight-bold alig">Basic</p>
                                                </td>
                                                <td>
                                                    <i className="bi-check-circle-fill" />
                                                </td>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill">Rs. 1000</i> */}
                                                    <p className="font-weight-bold">Rs. 2500</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-start">
                                                    Stock Market Mastery Course
                                                </th>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold alig">Advanced</p>
                                                </td>
                                                <td>
                                                    <i className="bi-x-circle-fill" />
                                                </td>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold">Rs. 4000</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-start">
                                                    Forex Fundamentals
                                                </th>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold alig">Basic</p>
                                                </td>
                                                <td>
                                                    <i className="bi-x-circle-fill" />
                                                </td>
                                                <td>
                                                    <p className="font-weight-bold">Rs. 2500</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-start">
                                                    Road to Forex Funded Account
                                                </th>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold alig">Advanced</p>
                                                </td>
                                                <td>
                                                    <i className="bi-x-circle-fill" />
                                                </td>
                                                <td>
                                                    {/* <i class="bi-check-circle-fill"></i> */}
                                                    <p className="font-weight-bold">Rs. 4000</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-start">
                                                    Commodity Fundamentals
                                                </th>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold alig">Basic</p>
                                                </td>
                                                <td>
                                                    <i className="bi-x-circle-fill" />
                                                </td>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold">Rs. 2500</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-start">
                                                    Commodity Elite Strategies
                                                </th>
                                                <td>
                                                    {/* <i class="bi-x-circle-fill"></i> */}
                                                    <p className="font-weight-bold alig">Advanced</p>
                                                </td>
                                                <td>
                                                    <i className="bi-x-circle-fill" />
                                                </td>
                                                <td>
                                                    {/* <i class="bi-check-circle-fill"></i> */}
                                                    <p className="font-weight-bold">Rs. 4000</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-5 col-12 mx-auto">
                                <h4 className="mb-4 pb-lg-2">Join us!</h4>
                                <form
                                    action="#"
                                    method="post"
                                    className="custom-form membership-form shadow-lg"
                                    role="form"
                                >
                                    <h4 className="text-white mb-4">Become a member</h4>

                                    <div className="form-floating">

                                        <div className="socials">
                                            <button type="submit" className="form-control common insta">
                                                <a
                                                    className="socialbutton"
                                                    href="https://www.instagram.com/market_lab100/"
                                                >
                                                    Follow us on Instagram
                                                </a>
                                            </button>
                                            <button type="submit" className="form-control common telegram">
                                                <a
                                                    className="socialbutton"
                                                    href="https://t.me/+7S0jlek0-W8xNTk1"
                                                >
                                                    Join our Telegram
                                                </a>
                                            </button>
                                            <button
                                                type="submit"
                                                style={{ backgroundColor: "#fd1d1d" }}
                                                className="form-control common telegram"
                                            >
                                                <a
                                                    className="socialbutton"
                                                    href="https://www.youtube.com/@Market_Lab"
                                                >
                                                    Subscribe our Youtube
                                                </a>
                                            </button>
                                        </div>

                                    </div>
                                    <button
                                        type="submit"
                                        style={{ background: "#5865F2" }}
                                        className="form-control"
                                    >
                                        <a className="socialbutton" href="https://discord.gg/zZabmQ5DXK">
                                            Join Our Discord
                                        </a>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="events-section section-bg section-padding" id="section_4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <h2 className="mb-lg-3">Upcoming Events</h2>
                            </div>
                            <div className="row custom-block mb-3">
                                <div className="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
                                    <div className="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
                                        <h6 className="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">
                                            18
                                        </h6>
                                        <strong className="text-white">18th June</strong>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
                                    <div className="custom-block-image-wrap">
                                        <a href="upcoming.html">
                                            <img
                                                src="/images/courses/1small.png"
                                                className="custom-block-image img-fluid"
                                                alt=""
                                            />
                                            <i className="custom-block-icon bi-link" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 order-3 order-lg-0">
                                    <div className="custom-block-info mt-2 mt-lg-0">
                                        <a href="upcoming.html" className="events-title mb-3">
                                            Zero to Hero Trading Course
                                        </a>
                                        <p className="mb-0">Basic</p>
                                        <div className="d-flex flex-wrap border-top mt-4 pt-3">
                                            <div className="mb-4 mb-lg-0">
                                                <div className="d-flex flex-wrap align-items-center mb-1">
                                                    <span className="custom-block-span">Location:</span>
                                                    <p className="mb-0">Virtual Google Meet</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <span className="custom-block-span">Fee:</span>
                                                    <p className="mb-0">Rs. 2500</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center ms-lg-auto">
                                                <a href="upcoming.html" className="btn custom-btn">
                                                    Enroll
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row custom-block custom-block-bg">
                                <div className="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
                                    <div className="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
                                        <h6 className="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">
                                            !
                                        </h6>
                                        <strong className="text-white">Comming Soon!</strong>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
                                    <div className="custom-block-image-wrap">
                                        <a href="upcoming.html">
                                            <img
                                                src="/images/courses/2.png"
                                                className="custom-block-image img-fluid"
                                                alt=""
                                            />
                                            <i className="custom-block-icon bi-link" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 order-3 order-lg-0">
                                    <div className="custom-block-info mt-2 mt-lg-0">
                                        <a href="upcoming.html" className="events-title mb-3">
                                            Stock Market Mastery Course
                                        </a>
                                        <p className="mb-0">Advanced </p>
                                        <div className="d-flex flex-wrap border-top mt-4 pt-3">
                                            <div className="mb-4 mb-lg-0">
                                                <div className="d-flex flex-wrap align-items-center mb-1">
                                                    <span className="custom-block-span">Location:</span>
                                                    <p className="mb-0">Virtual Google Meet</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <span className="custom-block-span">Fee:</span>
                                                    <p className="mb-0">Rs. 4000</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center ms-lg-auto">
                                                <a href="upcoming.html" className="btn custom-btn">
                                                    Enroll
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-section section-padding" id="section_5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-12">
                                <form
                                    action="https://formspree.io/f/xoqzzlww"
                                    method="post"
                                    className="custom-form contact-form"
                                    role="form"
                                >
                                    <h2 className="mb-4 pb-2">Leave us a message ! </h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    name="full-name"
                                                    id="full-name"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    required=""
                                                />
                                                <label htmlFor="floatingInput">Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    pattern="[^ @]*@[^ @]*"
                                                    className="form-control"
                                                    placeholder="Email address"
                                                    required=""
                                                />
                                                <label className="contactform" htmlFor="floatingInput">
                                                    Email address
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    placeholder="Describe message here"
                                                    defaultValue={""}
                                                />
                                                <label htmlFor="floatingTextarea">Message</label>
                                            </div>
                                            <button type="submit" className="form-control">
                                                Submit Form
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-info mt-5">
                                    <div className="contact-info-item">
                                        <div className="contact-info-body">
                                            <strong>Dillibazzar, Kathmandu</strong>
                                            <p className="mt-2 mb-1">
                                                <a href="tel: 010-020-0340" className="contact-link">
                                                    +977 9761875793
                                                </a>
                                            </p>
                                            <p className="mb-0">
                                                <a
                                                    href="mailto:market.lab100@gmail.com"
                                                    className="contact-link"
                                                >
                                                    market.lab100@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                        <div className="contact-info-footer">
                                            <a href="googlemaps">Directions</a>
                                        </div>
                                    </div>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item maps"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1926.0492892738373!2d85.32880627457595!3d27.705247796865883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1684657503445!5m2!1sen!2snp"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footor />
        </div>
    );
};

export default Home