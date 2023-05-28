import React from 'react'
import cls from "./forgot.module.scss"

import { useDispatch } from 'react-redux';
import { AUTH_MODAL_TUPES } from '@/redux/types/authModalTypes';
import { MODAL_VIEW } from '@/component/Navbar/Navbar';

const Forgot = ({authModal}) => {

  const dispatch = useDispatch();

  const onOpenForgot = () =>{
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL, payload: {...authModal, view: MODAL_VIEW.REGISTER}
    })
  }

  return (
    <div>
      <button onClick={onOpenForgot}>FORGOT</button>

    </div>
  )
}

export default Forgot