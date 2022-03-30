import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBackIosNew } from "react-icons/md";
// import Log from "../IMG/Signup.gif";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TextField from "@mui/material/TextField";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Row, Col, Container } from "react-bootstrap";

import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { register } from "../actions/auth";
import "../index.css";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs"></Container>

        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" className="ml-2" variant="h5">
            Sign Up
          </Typography>

          <Box>
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <div>
                  
                  <div className="">
                    <label htmlFor="user">
                      {" "}
                      <RiLockPasswordLine /> Username
                    </label>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="username"
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                      autoComplete="current-username"
                    />
                  </div>
                                      
                  <div className="">
                    <label htmlFor="email">
                      {" "}
                      <HiOutlineMail /> Email
                    </label>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="email"
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                      autoComplete="current-email"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="user">
                      {" "}
                      <RiLockPasswordLine /> Password
                    </label>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="password"
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                      autoComplete="current-username"
                    />
                  </div>
                

                  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Register;
