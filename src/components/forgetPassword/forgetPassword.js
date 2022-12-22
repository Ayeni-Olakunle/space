import React from 'react';
import LoginStyle from "./forgetPassword.module.scss"
import LoginImage from "../../images/LoginImage.svg";
import XandOImage from "../../images/XandO.svg"
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

function ForgetPassword(props) {
    const navigate = useNavigate();
    const chnage = () => {
        navigate("/sendEmail")
    }
    return (
        <section>
            <div className={LoginStyle.holdAll}>
                <div className={LoginStyle.holdLoginDetail}>
                    <div className={LoginStyle.holdTextImage}>
                        <img src={XandOImage} alt="Login" className={LoginStyle.imageTextKoko} />
                    </div>
                    <div className={LoginStyle.holdForm}>
                        <h2>Reset Password</h2>
                        <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
                        <div className={LoginStyle.formDiv}>
                            <Form onSubmit={chnage}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                </Form.Group>
                                <div className={LoginStyle.holdSubmit}>
                                    <Button variant="primary" type="submit" className={LoginStyle.submit}>
                                        Submit
                                    </Button>
                                </div>
                            </Form>
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

export default ForgetPassword;