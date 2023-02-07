import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider, facebookProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import Login from './Login.js';
import Footer1 from "../components/footer/Footer1";

export default function LoginForm(){
    return(
    <div className="App">
    <header>
    <div className="css-loginf">
        <div className="css-loginf1">
            <div>
                <h5 className="css-fontlogin">
                    Chào mừng bạn đến với
                    Tiếng Trung Phồn Thể ACE
                    !
                </h5>
                <Login/>
                <div data-content-region-name="loginMethod" data-track-content="true" data-content-name="Facebook">
                    <button class="css-loginfb">
                        <FaFacebookF/><div class="spacer css-font"></div>
                        Đăng nhập bằng Facebook
                    </button>
                </div>
                <div data-content-region-name="loginMethod" data-track-content="true" data-content-name="Google">
                    <button class="css-logingg">
                        <FcGoogle/><div class="spacer css-font"></div>
                        Đăng nhập bằng Google
                    </button>
                </div>
                
            </div>
        </div>
    </div>
    <Footer1/>
    </header>
    </div>
    );
}