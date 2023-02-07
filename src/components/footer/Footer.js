import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { RiBankCardLine } from "react-icons/ri";


export default function Footer() {
    let iconStyles ={color:"#485992", fontSize:"1,5em"};
    let iconStyles2 ={color: "red", fontSize:"1,5em"}
    return(
        <div className="css-border">
            <footer>
                <div className="css-grid">
                <nav className="css-end1">
                    <div className="table">
                    <div className="css-table">
                        <div className="css-bold">Liên Hệ:</div>
                            <div className="css-item">
                            <a href="mailto: tiengtrungace@gmail.com" target="#" className="css-abc">
                                <SiGmail style={iconStyles2}/>
                                <div class="spacer css-font"></div> tiengtrungace@gmail.com
                            </a>
                            <a href="https://www.facebook.com/tiengtrungphontheACE" target="#" className="css-abc">
                                <FaFacebookSquare style={iconStyles}/>
                                <div class="spacer css-font"></div>  Tiếng Trung Phồn Thể ACE
                            </a>
                            <a href="https://zalo.me/0764808967" target="#" className="css-abc">
                                <SiZalo style={iconStyles}/>
                                <div class="spacer css-font"></div> Tiếng Trung Phồn Thể ACE
                            </a>
                        </div>
                    </div>
                    <div className="css-table">
                        <div className="css-bold">Phương thức thanh toán:</div>
                        <div className="css-bank">
                            <a href="https://help.phongvu.vn/chinh-sach-ban-hang/phuong-thuc-thanh-toan#thanh-toan-the-atm-noi-dia-internet-banking" target="#" className="css-abc">
                                <RiBankCardLine/>
                                <div className="spacer css-font"></div>Internet Banking
                            </a>
                        </div>
                    </div>
                    <div className="css-table">
                        <div className="css-bold">Danh sách các ngân hàng có thể thanh toán:</div>
                        <img src="https://res.cloudinary.com/dijk3xi4c/image/upload/v1671122942/vnpay_banks_vyui2r.png" alt="aa" class="css-img"></img>
                    </div>
                    </div>
                </nav>
                </div>
            </footer>
            <footer>
                <br></br>
                <nav className="css-end">
                    @Copyright 2023 - All right reserved - Vy Chan
                </nav>
            </footer>
        </div>
    );
}