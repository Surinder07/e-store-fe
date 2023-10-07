import React from 'react';
import { CDBNavbar, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox  } from 'cdbreact';
import FooterLogo from "../assets/logo.png";
function Footer() {
    return (
        <CDBNavbar className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src={FooterLogo}
                            width="150px"
                        />
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ms-2">&copy; E-store, 2023. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBNavbar>
    );
}

export default Footer;

