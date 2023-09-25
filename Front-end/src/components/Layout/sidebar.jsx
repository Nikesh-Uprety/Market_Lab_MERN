import React, { useState } from 'react';
import AuthService from "../../ApiServices/auth.service";

import { Link, Redirect } from 'react-router-dom';

import SumbitButton from '../UI/Spinners/SpinnerButton';

import Alert from "../../Pages/Auth/Forms/alert";
import SpinnerButton from '../UI/Spinners/SpinnerButton';

import '../UI/Input/Input.css'

const Sidebar = () => {


    const [form, setForm] = useState({
        email: {
            placeholder: 'Email',
            value: "",
            valid: false,
            type: 'email',
            error: " ",
            msg: '',
            validation: {
                required: true,
                regex: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            },
            touched: false,
        },
        password: {
            placeholder: 'Password',
            value: "",
            valid: false,
            type: 'password',
            error: " ",
            msg: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 18,
            },
            touched: false,
        },
    });

    // For Signup State Management !!

    const [sform, setsForm] = useState({
        name: {
            placeholder: 'First Name',
            value: '',
            valid: false,
            type: 'text',
            error: ' ',
            msg: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 15,
            },
            touched: false,
        },
        email: {
            placeholder: 'Email',
            value: '',
            valid: false,
            type: 'email',
            error: ' ',
            msg: '',
            validation: {
                required: true,
                regex: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            },
            touched: false,
        },
        password: {
            placeholder: 'Password',
            value: '',
            valid: false,
            type: 'password',
            error: ' ',
            msg: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 18,
            },
            touched: false,
        },
        confirmPassword: {
            placeholder: 'Confirm Password',
            value: '',
            valid: false,
            type: 'password',
            error: ' ',
            msg: '',
            validation: {
                required: true,
                match: true,
            },
            touched: false,
        },
    });




    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState('login');


    const [alert, setAlert] = useState({
        valid: false,
        msg: "",
        alertType: "",
    });

    const [redirect, setRedirect] = useState(null);
    const [alertPressed, setAlertPressed] = useState(false);

    const AlertError = (alertmsg, alertType) => {
        setAlert({
            msg: alertmsg,
            valid: true,
            alertType: alertType,
        });
    };

    const checkValidity = (value, rules) => {
        let isValid = true;
        const regex = rules.regex;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.regex) {
            isValid = regex.test(value) && isValid;
        }

        return isValid;
    };

    const inputchangeHandler = (event, inputIdentifier) => {
        const updatedForm = { ...form };
        const updatedElement = { ...updatedForm[inputIdentifier] };
        updatedElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedElement;
        setForm(updatedForm);
        updatedElement.valid = checkValidity(updatedElement.value, updatedElement.validation);
    };


    const signupinputchangeHandler = (event, inputIdentifier) => {
        const updatedForm = { ...sform };
        const updatedElement = { ...updatedForm[inputIdentifier] };
        updatedElement.value = event.target.value;
        updatedForm[inputIdentifier] = updatedElement;
        setsForm(updatedForm);
        updatedElement.valid = checkValidity(updatedElement.value, updatedElement.validation);
    };

    const inputBlurHandler = (event, inputIdentifier) => {
        const updatedForm = { ...form };
        const updatedElement = { ...updatedForm[inputIdentifier] };

        if (updatedElement.value.length > 0)
            updatedElement.touched = true;
        else {
            updatedElement.touched = false;
            updatedElement.error = "";
        }

        if (inputIdentifier === "password" && !updatedElement.valid) {
            updatedElement.error = "At least 5 characters and at most 18";
            updatedElement.msg = "";
        }
        if (inputIdentifier === "password" && updatedElement.valid) {
            updatedElement.error = "";
            updatedElement.msg = "valid";
        }

        if (inputIdentifier === "email" && !updatedElement.valid) {
            updatedElement.error = "Invalid format";
            updatedElement.msg = "";
        }
        if (inputIdentifier === "email" && updatedElement.valid) {
            updatedElement.error = "";
            updatedElement.msg = "valid";
        }

        updatedForm[inputIdentifier] = updatedElement;
        setForm(updatedForm);
    };


    const signupinputBlurHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...sform,
        };
        const updatedElement = { ...updatedForm[inputIdentifier] };

        if (updatedElement.value.length > 0) updatedElement.touched = true;
        else {
            updatedElement.touched = false;
            updatedElement.error = '';
        }

        if (inputIdentifier === 'name' && !updatedElement.valid) {
            updatedElement.error = 'Minimum: 5 and Maximum: 15 characters';
            updatedElement.msg = '';
        }
        if (inputIdentifier === 'name' && updatedElement.valid) {
            updatedElement.error = '';
            updatedElement.msg = 'valid';
        }

        if (inputIdentifier === 'password' && !updatedElement.valid) {
            updatedElement.error = 'Minimum: 5 and Maximum: 18 characters';
            updatedElement.msg = '';
        }
        if (inputIdentifier === 'password' && updatedElement.valid) {
            updatedElement.error = '';
            updatedElement.msg = 'valid';
        }

        if (inputIdentifier === 'confirmPassword' && !updatedElement.valid) {
            updatedElement.error = 'Passwords do not match';
            updatedElement.msg = '';
        }
        if (inputIdentifier === 'confirmPassword' && updatedElement.valid) {
            updatedElement.error = '';
            updatedElement.msg = 'Password matched!';
        }

        if (inputIdentifier === 'email' && !updatedElement.valid) {
            updatedElement.error = 'Invalid format';
            updatedElement.msg = '';
        }
        if (inputIdentifier === 'email' && updatedElement.valid) {
            updatedElement.error = '';
            updatedElement.msg = 'valid';
        }

        updatedForm[inputIdentifier] = updatedElement;
        setsForm(updatedForm);
    };

    const OverallValidity = () => {
        for (let validate in form) {
            if (!form[validate].valid) {
                return false;
            }
        }
        return true;
    };

    const signupoverallValidity = () => {
        for (let validate in sform) {
            if (!sform[validate].valid) {
                return false;
            }
        }
        return true;
    };

    const timeout = () => {
        setAlert({
            msg: '',
            alertType: ''
        });
        setAlertPressed(false);
    };

    const formHandler = (event) => {
        event.preventDefault();
        setAlertPressed(true);
        setTimeout(timeout, 3000);

        if (OverallValidity()) {
            setLoading(true);
            const formData = {};
            for (let formElement in form) {
                formData[formElement] = form[formElement].value;
            }

            localStorage.setItem('email', form["email"].value);

            AuthService.login(formData)
                .then(response => {
                    console.log('Response:', response);
                    AlertError("Successfully Logged in", "success");
                    console.log(`Welcome ${response.data.username}`)

                    localStorage.setItem('user', response.data.access_token);
                    localStorage.setItem('ref_token', response.data.referesh_token);
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('userName', response.data.username);

                    setLoading(false);
                    setRedirect('/');
                })
                .catch(error => {
                    console.log(error.response);
                    setLoading(false);
                    AlertError(error.response.data.message, "danger");
                    // AlertError("Please Verity Your Email");
                    if (error.response.data.redirect) {
                        // alert("Please Verity Your Email")
                        // setRedirect('signup/otp');
                    }
                });
        } else {
            AlertError("Make sure the Validations are correct", "warning");
        }
    };

    const signupformHandler = (event) => {
        event.preventDefault();
        setAlertPressed(true);
        setTimeout(timeout, 3000);

        if (signupoverallValidity()) {
            setLoading(true);
            localStorage.setItem('email', sform['email'].value);

            const formData = {};
            for (let formElement in sform) {
                formData[formElement] = sform[formElement].value;
            }

            AuthService.register(formData)
                .then((response) => {
                    console.log('Response:', response);

                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('valid', true);
                    localStorage.setItem('type', 'success');
                    localStorage.setItem('msg', response.data.message);

                    setRedirect('/signup/otp');
                })
                .catch((error) => {
                    console.log(error.response);
                    setLoading(false);
                    AlertError(error.response.data.message[0].msg, 'danger');
                });
        } else {
            AlertError('Make sure the Validations are correct', 'warning');
        }
    };

    const responseGoogle = (response) => {
        console.log(response);
        const form = {};
        form['tokenId'] = response.tokenId;

        AuthService.Google_login(form)
            .then(response => {
                console.log(response);
                localStorage.setItem('user', response.data.access_token);
                localStorage.setItem('ref_token', response.data.referesh_token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('userName', response.data.username);

                setRedirect('/home/all');
            })
            .catch(error => {
                console.log(error);
                AlertError(error.response.data.message, "danger");
            });
    };

    const FailResponseGoogle = () => {
        console.log("something is wrong");
    };

    localStorage.removeItem('valid');
    localStorage.removeItem('msg');
    localStorage.removeItem('type');

    let alertContent = null;

    if (alert.valid) {
        alertContent = (<Alert
            value={alertPressed}
            alertMsg={alert.msg}
            alertType={alert.alertType}
        />);
    }

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    const formElementsArray = [];
    for (let key in form) {
        formElementsArray.push({
            id: key,
            config: form[key],
        });
    }

    let LoginSumbitButton = <button className={"form-control"} type={'submit'} Label={"Login"} >Login</button>;
    let SignupSumbitButton = <button className={"form-control"} type={'submit'} Label={"Signup"} >Signup</button>;

    if (loading) {

        LoginSumbitButton = <SpinnerButton spinnerclass={"form-control"} />;
        SignupSumbitButton = <SpinnerButton spinnerclass={"form-control"} />;

    }

    // Some Logic for login functon and elements

    
    var inputclasses = ["InputElement"];

    if (form.email.valid && form.email.touched) {

        const index = inputclasses.indexOf('pop');
        if (index > -1) inputclasses.splice(index, 1);

        inputclasses.push("Invalid");

    }

    else if (form.email.touched) {
        const index = inputclasses.indexOf('pop');
        if (index > -1) inputclasses.splice(index, 1);
        inputclasses.push("Valid");
    }

    let error = <p>s</p>;

    if (form.email.msg !== "" && form.email.touched)
        error = <p className="text-success error-msg">{form.email.msg}</p>;

    if (form.email.error !== "" && form.email.touched)
        error = <p style={{ color: "red" }} className="  error-msg">{form.email.error}</p>;

    else if (!form.email.touched)
        error = <p style={{ opacity: "0" }}>a</p>;


    // SignUp Functions



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
                    {alertContent}
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
                    
                        onSubmit={formHandler}


                    >
                        {/* {error && <p style={loginStyle}>{error}</p>} */}
                        <div className="member-login-form-body">
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-number">
                                    Membership Email .
                                </label>
                                {

                                }
                               
                                <input
                                    type={form.email.type}
                                    // name="member-login-number"
                                    id="member-login-number"
                                    className="form-control"
                                    placeholder={form.email.placeholder}
                                    required=""
                                    value={form.email.value}

                                    onChange={(event) => inputchangeHandler(event, 'email')}
                                    onBlur={(event) => inputBlurHandler(event, 'email')}
                                />
                                {/* {error} */}
                            </div>
                            <div className="mb-4">
                                <label className="form-label mb-2" htmlFor="member-login-password">
                                    Password
                                </label>
                                <input
                                    type={form.password.type}
                                    // name="member-login-password"
                                    id="member-login-password"
                                    className="form-control"
                                    placeholder={form.password.placeholder}
                                    required=""
                                    value={form.password.value}
                                    onChange={(event) => inputchangeHandler(event, 'password')}
                                    onBlur={(event) => inputBlurHandler(event, 'password')}

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
                                {LoginSumbitButton}
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
                        onSubmit={signupformHandler}

                        >
                        
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
                                    placeholder="First Name"
                                    required=""

                                    onChange={(event) => signupinputchangeHandler(event, 'name')}
                                    onBlur={(event) => signupinputBlurHandler(event, 'name')}
                                    value={sform.name.value}
                                    // onChange={e => setUsername(e.target.value)}
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
                                    placeholder="Email"
                                    required=""

                                    onChange={(event) => signupinputchangeHandler(event, 'email')}
                                    onBlur={(event) => signupinputBlurHandler(event, 'email')}
                                    value={sform.email.value}

                                 

                                
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

                                    onChange={(event) => signupinputchangeHandler(event, 'password')}
                                    onBlur={(event) => signupinputBlurHandler(event, 'password')}

                                    value={sform.password.value}
                                    
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
                                    placeholder="Confirm Password"
                                    required=""
                                    value={sform.confirmPassword.value}

                                    onChange={(event) => signupinputchangeHandler(event, 'confirmPassword')}
                                    onBlur={(event) => signupinputBlurHandler(event, 'confirmPassword')}
                                    
                                />
                            </div>

                            <div className="col-lg-5 col-md-7 col-8 mx-auto">
                                {SignupSumbitButton}
                            
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
};

export default Sidebar;
