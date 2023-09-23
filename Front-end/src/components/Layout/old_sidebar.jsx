import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';


const Sidebar = () => {

    let [emaillogin, setemail] = useState("");
    let [passwordlogin, setpassword] = useState("");
    let [cpassword, setcpassword] = useState("");
    let [username, setUsername] = useState('');
    let [error, seterror] = useState("");

    const [currentPage, setCurrentPage] = useState('login');


    const navigate = useNavigate();
    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), emaillogin, passwordlogin);
            navigate('/');
        } catch (e) {
            // setAlert({
            //     open: true,
            //     message: `${e.message}`,
            //     type: "error",
            //     time: 5000,
            // })
            seterror(e.message);
        }
    }

    const createUser = async () => {
        if (passwordlogin == cpassword) {
            const userCredential= await createUserWithEmailAndPassword(getAuth(), emaillogin, passwordlogin);

            await updateProfile(userCredential.user, { displayName: username });
            navigate('/');
        } else {
            seterror("Password Does Not Match")
        }
    }


    const loginStyle = { "backgroundColor": "rgb(255, 255, 255)", "fontSize": "medium", "color": "black", "height": "30px", "textAlign": "center", "borderRadius": "8px", "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }


    return (
        <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Member Login
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setCurrentPage(currentPage === 'login' ? 'signup' : 'login')}
                >
                    {currentPage === 'login' ? 'Sign Up' : 'Login'}
                </button>
            </div>
            {currentPage === 'login' && (
                <div className="offcanvas-body d-flex flex-column">


                    <form
                        className="custom-form member-login-form"
                        action="#"


                    >
                        {error && <p style={loginStyle}>{error}</p>}
                        <div className="member-login-form-body">
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-number">
                                    Membership Email .
                                </label>
                                <input
                                    type="text"
                                    // name="member-login-number"
                                    id="member-login-number"
                                    className="form-control"
                                    placeholder="user@gmail.com"
                                    required=""
                                    value={emaillogin}
                                    onChange={e => setemail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    // name="member-login-password"
                                    id="member-login-password"
                                    className="form-control"
                                    placeholder="Password"
                                    required=""
                                    value={passwordlogin}
                                    onChange={e => setpassword(e.target.value)}
                                />
                            </div>
                            {/* <div className="form-check mb-4">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div> */}
                            <div className="col-lg-5 col-md-7 col-8 mx-auto">
                                <button type="submit" onClick={logIn} className="form-control">
                                    Login
                                </button>
                            </div>
                            <div className="text-center my-4">
                                <a href="#">Forgotten password?</a>
                            </div>
                        </div>
                    </form>
                    <div className="mt-auto mb-5">
                        <p>
                            <strong className="text-white me-3">Any Questions?</strong>
                            <a href="tel: 010-020-0340" className="contact-link">
                                +977 9843010717
                            </a>
                        </p>
                    </div>
                </div>
    
)}
            
            {currentPage === 'signup' && (
                <div className="offcanvas-body d-flex flex-column">


                    <form
                        className="custom-form member-login-form"
                        action="#"


                    >
                        {error && <p style={loginStyle}>{error}</p>}
                        <div className="member-login-form-body">
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-number">
                                    UserName
                                </label>
                                <input
                                    type="text"
                                    // name="member-login-number"
                                    id="member-login-number"
                                    className="form-control"
                                    placeholder="admin123"
                                    required=""
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-number">
                                    Email 
                                </label>
                                <input
                                    type="text"
                                    // name="member-login-number"
                                    id="member-login-number"
                                    className="form-control"
                                    placeholder="user@gmail.com"
                                    required=""
                                    value={emaillogin}
                                    onChange={e => setemail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    // name="member-login-password"
                                    id="member-login-password"
                                    className="form-control"
                                    placeholder="Password"
                                    required=""
                                    value={passwordlogin}
                                    onChange={e => setpassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-password">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    // name="member-login-password"
                                    id="member-login-password"
                                    className="form-control"
                                    placeholder="Password"
                                    required=""
                                    value={cpassword}
                                    onChange={e => setcpassword(e.target.value)}
                                />
                            </div>
                            
                            <div className="col-lg-5 col-md-7 col-8 mx-auto">
                                <button type="submit" onClick={createUser} className="form-control">
                                    Signup
                                </button>
                            </div>
                            <div className="text-center my-4">
                                <a href="#">Forgotten password?</a>
                            </div>
                        </div>
                    </form>
                    <div className="mt-auto mb-5">
                        <p>
                            <strong className="text-white me-3">Any Questions?</strong>
                            <a href="tel: 010-020-0340" className="contact-link">
                                +977 9843010717
                            </a>
                        </p>
                    </div>
                </div>
    
)}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0c485c"
                    fillOpacity={1}
                    d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
        </div>

    );

}

export default Sidebar