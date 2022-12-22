import React from 'react';
import LoginStyle from "./Login.module.scss"
import LoginImage from "../../images/LoginImage.svg";
import XandOImage from "../../images/XandO.svg";
import Linkedin from "../../images/Linkedin.svg";
import Gmail from "../../images/Gmail.svg";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

function Login(props) {
    return (
        <section>
            <div className={LoginStyle.holdAll}>
                <div className={LoginStyle.holdLoginDetail}>
                    <div className={LoginStyle.holdTextImage}>
                        <img src={XandOImage} alt="Login" className={LoginStyle.imageTextKoko} />
                    </div>
                    <div className={LoginStyle.holdForm}>
                        <h2>Sign In</h2>
                        <p>Sign in to stay connected.</p>
                        <div className={LoginStyle.formDiv}>
                            <Form>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <div className={LoginStyle.checkBoxMe}>
                                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me?" />
                                    </Form.Group>
                                    <div>
                                        <Link to={"/forgetpassword"} className={LoginStyle.signUpLink}>Forgot Password</Link>
                                    </div>
                                </div>
                                <div className={LoginStyle.holdSubmit}>
                                    <Button variant="primary" type="submit" className={LoginStyle.submit}>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        <div className={LoginStyle.holdSocialMedia}>
                            <p>or sign in with other accounts?</p>
                            <div className={LoginStyle.holdSocial}>
                                <div className={LoginStyle.holdTextImage}>
                                    <img src={Gmail} alt="Gmail" className={LoginStyle.social} />
                                </div>
                                <div className={LoginStyle.holdTextImage}>
                                    <img src={Facebook} alt="Facebook" className={LoginStyle.social} />
                                </div>
                                <div className={LoginStyle.holdTextImage}>
                                    <img src={Instagram} alt="Instagram" className={LoginStyle.social} />
                                </div>
                                <div className={LoginStyle.holdTextImage}>
                                    <img src={Linkedin} alt="Linkedin" className={LoginStyle.social} />
                                </div>
                            </div>
                            <p>Don’t have an account? <Link to={"/signup"} className={LoginStyle.signUpLink}>Click here to sign up.</Link></p>
                        </div>
                    </div>
                </div>
                <div className={LoginStyle.holdImage}>
                    <img src={LoginImage} alt="Login" className={LoginStyle.imageKoko} />
                </div>
            </div>
        </section>
    );
}

export default Login;