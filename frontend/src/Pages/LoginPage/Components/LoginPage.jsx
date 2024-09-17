import "./../LoginPageStyles/LoginPage.css";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../../../ReduxStorage/LoginStore/LoginPageStore.js";
import {persistor} from "../../../ReduxStorage/Store.js";
const LoginPage = () => {
    const [view, setView] = useState(false);
    const [inputState, setInputState] = useState("password");
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {errorMessage} = useSelector(state => state.loginReducer);


    useEffect(() => {
        console.log(errorMessage)
    }, [errorMessage]);

    /*Toggle between visible password and hidden.The js below changes the type for the
    * input filed when the user toggles.*/
    useEffect(() => {
        if(view) setInputState("text");
        else setInputState("password");
    }, [view]);

    const submitUserLogin = (data) => {
        persistor.purge();
        if (data) dispatch(loginRequest(data))
    }

    return (
        <div className={"login-page"}>
            {errorMessage && <div className={"error-message-animation"}>{errorMessage }</div>}
            <div className={"login-section"}>
                <div className={"login-header"}>
                    MMLSA Login
                </div>
                <div className={"login-body"}>
                    <Form className={"login-form"} onSubmit={handleSubmit(submitUserLogin)}>
                        <Form.Group className={"email-group"}>
                            <Form.Label htmlFor={"email"} className={"text-font"}>Email : </Form.Label>
                            <input className={'form-control'} id={"email"} type={"email"}
                                   {...register('email')} required={true}/>
                        </Form.Group>

                        <Form.Group className={"password-group"}>
                            <Form.Label htmlFor={"password"} className={"text-font"}>Password : </Form.Label>
                            <div className={"password-holder"}>
                                <input className={'form-control'} id={"password"} type={inputState} required={true}
                                       {...register('password')}/>
                                {view ?
                                    <Button className={"eye-button"} onClick={() => setView(false)}>
                                        <FaEye/>
                                    </Button> :
                                    <Button className={"eye-button"} onClick={() => setView(true)}>
                                        <FaEyeSlash/>
                                    </Button>}
                            </div>
                        </Form.Group>

                        <div className={"login-footer"}>
                            <Button className={"login"} type={"submit"} >Login</Button>
                            <Link className={"visitor-link"} to={"/"}>
                                <h5 className={"visitor"}>Visitor</h5>
                                <span className={"arrow"}></span>
                                <span className={"arrow"}></span>
                                <span className={"arrow"}></span>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;