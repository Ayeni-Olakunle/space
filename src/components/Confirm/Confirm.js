import React from 'react';
import LoginStyle from "./Confirm.module.scss"
import LoginImage from "../../images/LoginImage.svg";
import XandOImage from "../../images/XandO.svg"
import checkMark from "../../images/Beared Guy02-min 1.svg"
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

function Confirm(props) {
    const navigate = useNavigate();
    const chnage = () => {
        navigate("/")
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
                        <h2>Hi ! Austin Robertson</h2>
                        <p>Enter your password to acess the admin.</p>
                        <div className={LoginStyle.formDiv}>
                            <Form onSubmit={chnage}>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
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

export default Confirm;