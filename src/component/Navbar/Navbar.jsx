import React from "react";
import cls from "./navbar.module.scss";

import Logo from "@/assets/Logo.png";
import NavSearch from "./NavSearch/NavSearch";
import { Button, ButtonVariant, Icon } from "@/component";
import {navList} from "@/utils/conts"

const Navbar = () => {
  const isAuth = false;
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />

          <NavSearch />

          {isAuth ? (
            <nav>
              <ul className={cls.navList}>
              {navList.map((item) =>(
                <li key={item.id}>
                  {
                    item.to? <a href="">
                      <Icon type={item.iconType}/>
                    </a> :  <Icon type={item.iconType}/>
                  }
                </li>
              ))}
              </ul>
            </nav>
          ) : (
            <Button variant={ButtonVariant.OUTLINE}>Войти</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
