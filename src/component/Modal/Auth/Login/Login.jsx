import React from 'react'
import cls from "./login.module.scss"
import { useDispatch } from 'react-redux';
import { AUTH_MODAL_TUPES } from '@/redux/types/authModalTypes';
import { MODAL_VIEW } from '@/component/Navbar/Navbar';

const Login = ({authModal}) => {
  const dispatch = useDispatch();

  const onOpenRegister = () =>{
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL, payload: {...authModal, view:MODAL_VIEW.REGISTER}
    })
  }

  return (
    <div>
      <button onClick={onOpenRegister}>registr</button>
    </div>
  )
}

export default Login