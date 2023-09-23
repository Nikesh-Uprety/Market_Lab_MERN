import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';



export const Footor = () => {
  return (
    <>
          <footer className="site-footer">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-12">
                          <br />
                          <p className="copyright-text">Copyright © 2023 MarketLab</p>
                      </div>
                      <div className="col-lg-2 col-12 ms-auto">
                          <ul className="social-icon mt-lg-5 mt-3 mb-4">
                              <li className="social-icon-item">
                                  <a
                                      href="https://www.instagram.com/market_lab100/"
                                      className="social-icon-link bi-instagram"
                                  />
                              </li>
                              <li className="social-icon-item">
                                  <a
                                      href="https://discord.gg/zZabmQ5DXK"
                                      className="social-icon-link bi-discord"
                                  />
                              </li>
                              <li className="social-icon-item">
                                  <a
                                      href="https://t.me/+7S0jlek0-W8xNTk1"
                                      className="social-icon-link bi-telegram"
                                  />
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                      fill="#0047AB"
                      fillOpacity={1}
                      d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                  ></path>
              </svg>
          </footer>

    </>
  )
}
export default Footor;