import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";
// import Log from "../IMG/Login.gif";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import CheckButton from "react-validation/build/button";
import "../index.css";
import { Row, Col, Container } from "react-bootstrap";
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/home");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/Main" />;
  }
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          {/* <a href="/">
            <MdArrowBackIosNew />
          </a> */}
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
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Row>
                <Col >
                 
                   
                    <Box >
                      <Form onSubmit={handleLogin} ref={form}>
                        <div className="">
                          <label htmlFor="user">
                            {" "}
                            <RiLockPasswordLine /> Username
                          </label>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="username"
                            id="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                            autoComplete="current-username"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="password">
                            {" "}
                            <RiLockPasswordLine /> Password
                          </label>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                            autoComplete="current-password"
                          />
                        </div>

                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-block"
                            disabled={loading}
                          >
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                          </button>
                        </div>

                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        )}
                        <CheckButton
                          style={{ display: "none" }}
                          ref={checkBtn}
                        />
                      </Form>
                    </Box>
                  
                </Col>
              </Row>
          
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
