import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton.component";
import FormInput from "../form-input/FormInput.component";
import "./SignIn.styles.scss";
import { auth } from "../../firebase/firebase.utlis";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setPassword("");
    setEmail("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          name="email"
          type="email"
          onChangeHandler={onChangeHandler}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChangeHandler={onChangeHandler}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
        <CustomButton onClick={googleSignIn}>signin with google</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
