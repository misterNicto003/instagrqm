import React from "react";
import cls from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_MODAL_TUPES } from "@/redux/types/authModalTypes";
import { MODAL_VIEW } from "@/component/Navbar/Navbar";
import { Button, ButtonVariant } from "@/component";
import { Input } from "@/component";

const Login = ({ authModal }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите валидную почту")
      .reguired("Поле Email обязательное!"),
    password: yup
      .string()
      .reguired("Поле Пароль обязательное!")
      .min(6, "Минимальное количество символов (6) !"),
  });
  const {
    register,
    watch,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const authModal = useSelector((state) => state.authModal);

  const onOpenRegister = () => {
    dispatch({
      type: AUTH_MODAL_TUPES.MODAL,
      payload: { ...authModal, view: MODAL_VIEW.REGISTER },
    });
  };

  return (
    <div className={cls.login}>
      <h1 className={cls.title}>Вход или регистрация</h1>
      <form noValidate onSubmit={() => {}} className={cls.form}>
        <Input placeholder="UserName" reguired value="userName" />
        <Input
          type="Password"
          placeholder="Password"
          reguired
          value="ssdsddsd"
        />

        <Button variant={ButtonVariant.CLEAR}>Забыли пароль?</Button>

        <Button fullWidth>Войти</Button>
      </form>

      <div className={cls.footer}>
        еще нет аккаунта?
        <Button variant={ButtonVariant.CLEAR} onClick={onOpenRegister}>
          Регистрация
        </Button>
      </div>
    </div>
  );
};

export default Login;
