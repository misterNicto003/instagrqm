import React from "react";
import cls from "./navbar.module.scss";

import Logo from "@/assets/Logo.png";
import NavSearch from "./NavSearch/NavSearch";
import { Button, ButtonVariant, Forgot, Icon, Login, Modal, Register } from "@/component";
import { navList } from "@/utils/conts";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_MODAL_TUPES } from "@/redux/types/authModalTypes";

export const MODAL_VIEW = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT: "forgot",
};

const Navbar = () => {
  const isAuth = false;
  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModal);

  const onOpen = () => {
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL,
      payload: { ...authModal, open: true },
    });
  };

  const onClose = () => {
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL,
      payload: { ...authModal, open: false },
    });
  };

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />

          <NavSearch />

          {isAuth ? (
            <nav>
              <ul className={cls.navList}>
                {navList.map((item) => (
                  <li key={item.id}>
                    {item.to ? (
                      <a href="">
                        <Icon type={item.iconType} />
                      </a>
                    ) : (
                      <Icon type={item.iconType} />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <Button variant={ButtonVariant.OUTLINE} onClick={onOpen}>
              Войти
            </Button>
          )}
        </div>
      </div>

      <Modal open={authModal.open} onClose={onClose}>
        {authModal.view === MODAL_VIEW.LOGIN && <Login authModal={authModal}  />}
        {authModal.view === MODAL_VIEW.REGISTER && <Register authModal={authModal}  />}
        {authModal.view === MODAL_VIEW.FORGOT && <Forgot authModal={authModal}  />}
      </Modal>
    </div>
  );
};

export default Navbar;
