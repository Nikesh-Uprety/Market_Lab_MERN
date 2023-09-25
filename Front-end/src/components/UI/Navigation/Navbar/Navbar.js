import { useEffect, useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { NavLink , useHistory} from 'react-router-dom';
import AuthServices from "../../../../ApiServices/auth.service";
import { GoogleLogout } from "react-google-login";
import { useLocation } from "react-router-dom";




const Navbar = () => {

  const [isNavSticky, setIsNavSticky] = useState(false);
 


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavSticky(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isLogin, setLogin] = useState(false);
  const history = useHistory()

  useEffect(() => {

    let isMounted = true;

    if (isMounted) {
      if (localStorage.getItem('user')) {
        setLogin(true)
      }
    }
    return () => {
      isMounted = false;
    }
  }, [])


  const logout = () => {
    setLogin(false)
    AuthServices.logout()
    console.log("logout called")
    history.push('/login')
  }

  let Logout = (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ms-lg-auto">


          <li className="nav-item dropdown" >
            <a href={'/'} className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

              <NavLink className="dropdown-item" to='/home/all' activeClassName="active-categoryMenu" >All Courses</NavLink>
              <NavLink className="dropdown-item" to='/home/Web Development' activeClassName="active-categoryMenu">Stock Market </NavLink>
              <NavLink className="dropdown-item" to='/home/Web Designing' activeClassName="active-categoryMenu" >Forex Market </NavLink>
              <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">Commodity Market</NavLink>
              <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">Forex Market</NavLink>
              <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">Commodity Market</NavLink>


            </div>
          </li>

          {/* <li className="nav-item"><Link to="/index" className="nav-link" >Home</Link></li> */}


          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_2">
              About
            </a>
          </li>

          <li className="nav-item">
            <Link to="/home/all" className="nav-link" >Courses</Link>
            {/* <a className="nav-link click-scroll" href="#section_3">
                                        Courses
                                    </a> */}
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_4">
              Webinar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_5">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarLightDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Premium
            </a>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="navbarLightDropdownMenuLink">

              <li><Link to="/webinar" className="dropdown-item" >Upcoming Webinar</Link></li>
              <li><Link to="/premium" className="dropdown-item" >Premium courses </Link></li>
            </ul>
          </li>
        </ul>
        <div className="d-none d-lg-block ms-lg-3">
          <a
            className="btn custom-btn custom-border-btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Member Login
          </a>
        </div>
      </div>

    </>



  );

  let loggedIn = (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ms-lg-auto">


          <li className="nav-item dropdown" >
            <a href={'/'} className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

              <NavLink className="dropdown-item" to='/home/all' activeClassName="active-categoryMenu" >All Courses</NavLink>
              <NavLink className="dropdown-item" to='/home/Web Development' activeClassName="active-categoryMenu">Stock Market </NavLink>
              <NavLink className="dropdown-item" to='/home/Web Designing' activeClassName="active-categoryMenu" >Forex Market </NavLink>
              <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">Commodity Market</NavLink>
              <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">Forex Market</NavLink>
              <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">Commodity Market</NavLink>


            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_2">
              About
            </a>
          </li>

          <li className="nav-item">
            <Link to="/home/all" className="nav-link" >Courses</Link>
            {/* <a className="nav-link click-scroll" href="#section_3">
                                        Courses
                                    </a> */}
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_4">
              Webinar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_5">
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarLightDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Premium
            </a>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="navbarLightDropdownMenuLink">

              <li><Link to="/webinar" className="dropdown-item" >Upcoming Webinar</Link></li>
              <li><Link to="/premium" className="dropdown-item" >Premium courses </Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink to="/Cart" className="nav-link ">
              <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
                className="fa fa-book" aria-hidden="true"><span id="bookmarkNav"> Bookmark</span></i></NavLink>

          </li>

          <li className="nav-item">
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_API_KEY}
              buttonText="Logout"
              render={renderProps => (
                <NavLink to="/login" onClick={logout}
                  disabled={renderProps.disabled} className="nav-link logoutlink" > Logout </NavLink>
              )}
              onLogoutSuccess={logout}>
            </GoogleLogout>
          </li>
        </ul>

      </div>

      {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item" data-toggle="tooltip" data-placement="top"
                title="Create Your Course">

                <NavLink to="/teacherhome" activeClassName="teacherActive"
                    className="nav-link teachLink">Create an Course</NavLink>
            </li>   
        </ul> */}
    </>
  );


  return (

    <>
      <div className="alt" style={{
        height: "137px",
        position: "absolute",
        top: "0",
        right: "0",
        left: "0"

      }}>
        <nav className={`navbar navbar-expand-lg navfont navbar-blackbg ${isNavSticky ? 'sticky' : ''}  `}>
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src="/images/masterlogo.png" className="logo" alt="MarketLab" />
              <span className="navbar-brand-text"></span>
            </a>
            <div className="searchBox">
              <input className="searchInput" type="text" name="" placeholder="Search" />
              <button className="searchButton" href="#">
                <i className="material-icons">
                  <BiSearchAlt />
                </i>
              </button>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {!isLogin && Logout}
            {isLogin && loggedIn}
            {/* {loggedIn} */}

          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar;
