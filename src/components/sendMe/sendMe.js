import React from 'react';
import LoginStyle from "./sendMe.module.scss"
import LoginImage from "../../images/LoginImage.svg";
import XandOImage from "../../images/XandO.svg"
import checkMark from "../../images/checkMark.svg"
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

function SendMe(props) {
    const navigate = useNavigate();
    const chnage = () => {
        navigate("/confirm")
    }
    return (
        <section>
            <div className={LoginStyle.holdAll}>
                <div className={LoginStyle.holdLoginDetail}>
                    <div className={LoginStyle.holdTextImage}>
                        <img src={XandOImage} alt="Login" className={LoginStyle.imageTextKoko} />
                    </div>
                    <div className={LoginStyle.holdForm}>
                        <div className={LoginStyle.holdTextImage}>
                            <img src={checkMark} alt="checkMark" className={LoginStyle.imageTextKokos} />
                        </div>
                        <h2>Success !</h2>
                        <p>A email has been send to your email@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                        <div className={LoginStyle.formDiv}>
                            <Form onSubmit={chnage}>
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

export default SendMe;