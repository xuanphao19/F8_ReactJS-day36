import { Link } from "react-router";

import clsx from "clsx";
import styles from "./ForgotPassword.module.scss";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Checkbox,
  Button,
} from "../../components/Form";

function ForgotPassword() {
  return (
    <div className={clsx(styles.form_wraps)}>
      <h2 className={clsx(styles.title)}>Forgot Password</h2>
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

        <div>
          <Button className={clsx(styles.submit)} type="submit">
            Send Password
          </Button>
        </div>

        <p className={clsx(styles.register)}>
          Chưa có tài khoản? <Link to="/register">Đăng ký Account!</Link>
        </p>
        <Link to="/">Tôi muốn quay lại trang chủ!</Link>
      </Form>
    </div>
  );
}

export default ForgotPassword;
