import React from "react";
import cls from "./register.module.scss";
import { useDispatch } from "react-redux";
import { AUTH_MODAL_TUPES } from "@/redux/types/authModalTypes";
import { MODAL_VIEW } from "@/component/Navbar/Navbar";
import { Button, ButtonVariant, Form, Input } from "@/component";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

const Register = ({ authModal }) => {

const schrema = yup.object().shape({
  email: yup
  .string()
  .email("Введите валидную почту")
  .reguired("Поле не может быть пустым"),
  username:yup.string().required("Поле не может быть пустым"),
  nickname:yup.string().required("Поле не может быть пустым"),
  password:yup.string().required("Поле не может быть пустым"),
  cf_password:yup.string().required("Поле не может быть пустым"),
})

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
    resolver:yupResolver(schrema)
  });
  const dispatch = useDispatch();

  const onOpenLogin = () => {
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL,
      payload: { ...authModal, view: MODAL_VIEW.LOGIN },
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={cls.register}>
      <h2>Вход или регистрация</h2>

      <Form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          value={watch("email")}
          placeholder="Ваша почта"
          reguired
          {...register("email", {required:"Поле не может быть пустым"})}
        />

        <span>{errors?.email?.message}</span>
        <Input
          value={watch("username")}
          placeholder="Ваша имя"
          reguired
          {...register("username")}
        />
        <Input
          value={watch("nickname")}
          placeholder="Ваш ник"
          reguired
          {...register("nickname")}
        />
        <Input
          value={watch("password")}
          placeholder="Пароль"
          reguired
          {...register("password")}
        />
        <Input
          value={watch("cf.password")}
          placeholder="Потверждение пороля"
          reguired
          {...register("cf_password")}
        />

        <p className={cls.text}>Нажимая</p>
        <Button className={cls.btn} fullWidth type="submit">
          Регистрация
        </Button>
      </Form>

      <div className={cls.registerFooter}>
        есть аккаунт?
        <Button
          className={cls.btn}
          onClick={onOpenLogin}
          variant={ButtonVariant.CLEAR}
        >
          Войти
        </Button>
      </div>

      {/* <button onClick={onOpenLogin}>Войти</button> */}
    </div>
  );
};

export default Register;
