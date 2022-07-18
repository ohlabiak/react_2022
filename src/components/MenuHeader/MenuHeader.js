import { useState } from "react";

import Menu from "../Menu/Menu";
import Navbar from "../NavBar/NavBar";

const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(null);

    const handleMenuOpenClose = () => {
        setOpen((active) => !active);
    };
    return (
        <>
            <Menu isOpen={isOpen} onMenuOpenClose={handleMenuOpenClose} />
            <Navbar
                isOpen={isOpen}
                bgActive={bgActive}
                onMenuOpenClose={handleMenuOpenClose}
            />
        </>
    );
};

export default MenuHeader;
