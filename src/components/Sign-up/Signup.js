import React from 'react';
import SignupStyle from "./Signup.module.scss"
import LoginImage from "../../images/LoginImage.svg";
import XandOImage from "../../images/XandO.svg";
import Linkedin from "../../images/Linkedin.svg";
import Gmail from "../../images/Gmail.svg";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"

function Signup(props) {
    return (
        <section>
            <div className={SignupStyle.holdAll}>
                <div className={SignupStyle.holdImage}>
                    <img src={LoginImage} alt="Login" className={SignupStyle.imageKoko} />
                </div>
                <div className={SignupStyle.holdLoginDetail}>
                    <div className={SignupStyle.holdTextImage}>
                        <img src={XandOImage} alt="Login" className={SignupStyle.imageTextKoko} />
                    </div>
                    <div className={SignupStyle.holdForm}>
                        <h2>Sign In</h2>
                        <p>Sign in to stay connected.</p>
                        <div className={SignupStyle.formDiv}>
                            <Form>
                                <Row className="mb-2">
                                    <Form.Group as={Col} controlId="formGridFirstNamel">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-2">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPhoneNo">
                                        <Form.Label>Phone No.</Form.Label>
                                        <Form.Control type="phone" placeholder="Phone No." />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-2">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Row>
                                <div className={SignupStyle.checkBoxMe}>
                                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="I agree with the terms of use" />
                                    </Form.Group>
                                </div>
                                <div className={SignupStyle.holdSubmit}>
                                    <Button variant="primary" type="submit" className={SignupStyle.submit}>
                                        Sign up
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        <div className={SignupStyle.holdSocialMedia}>
                            <p>or sign up with other accounts?</p>
                            <div className={SignupStyle.holdSocial}>
                                <div className={SignupStyle.holdTextImage}>
                                    <img src={Gmail} alt="Gmail" className={SignupStyle.social} />
                                </div>
                                <div className={SignupStyle.holdTextImage}>
                                    <img src={Facebook} alt="Facebook" className={SignupStyle.social} />
                                </div>
                                <div className={SignupStyle.holdTextImage}>
                                    <img src={Instagram} alt="Instagram" className={SignupStyle.social} />
                                </div>
                                <div className={SignupStyle.holdTextImage}>
                                    <img src={Linkedin} alt="Linkedin" className={SignupStyle.social} />
                                </div>
                            </div>
                            <p>Already have an Account <Link to={"/"} className={SignupStyle.signUpLink}>Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;