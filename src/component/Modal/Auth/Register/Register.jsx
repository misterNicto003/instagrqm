import React from 'react'
import cls from "./register.module.scss"
import { useDispatch } from 'react-redux';
import { AUTH_MODAL_TUPES } from '@/redux/types/authModalTypes';
import { MODAL_VIEW } from '@/component/Navbar/Navbar';

const Register = ({authModal}) => {

  const dispatch = useDispatch();

  const onOpenLogin = () =>{
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL, payload: {...authModal, view: MODAL_VIEW.LOGIN}
    })
  }

  return (
    <div>
      <button onClick={onOpenLogin}>Войти</button>

    </div>
  )
}

export default Register