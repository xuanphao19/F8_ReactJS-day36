import { Link } from "react-router";

import clsx from "clsx";
import styles from "./Register.module.scss";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Checkbox,
  Button,
} from "../../components/Form";

function Register() {
  return (
    <div className={clsx(styles.form_wraps)}>
      <h2 className={clsx(styles.title)}>New registration</h2>
      <Form>
        <FormGroup className={clsx(styles.form_group)}>
          <Label className={clsx(styles.form_label)} htmlFor="email">
            Email
          </Label>
          <Input
            className={clsx(styles.form_input)}
            id="email"
            type="text"
            placeholder="Enter Email"
          />
          <Checkbox
            className={clsx(styles.checkbox)}
            id="email_check"
            label="Check Email"
          />
        </FormGroup>

        <FormGroup className={clsx(styles.form_group)}>
          <Label className={clsx(styles.form_label)} htmlFor="password">
            Password
          </Label>
          <Input
            className={clsx(styles.form_input)}
            id="password"
            type="password"
            placeholder="Enter Password"
          />
          <Checkbox
            className={clsx(styles.checkbox)}
            id="password_check"
            label="Check Password"
          />
        </FormGroup>

        <Checkbox
          className={clsx(styles.checkbox)}
          id="agree"
          label="Đăng nhập sau khi đăng ký thành công!"
        />

        <div>
          <Button className={clsx(styles.submit)} type="submit">
            Register
          </Button>
        </div>

        <p className={clsx(styles.register)}>
          Đã có tài khoản? <Link to="/login">Đăng Nhập!</Link>
        </p>
        <Link to="/">Tôi muốn quay lại trang chủ!</Link>
      </Form>
    </div>
  );
}

export default Register;
