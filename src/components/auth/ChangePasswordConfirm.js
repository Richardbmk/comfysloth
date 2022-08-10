import React from "react";
import { Link } from "react-router-dom";

const ChangePasswordConfirmation = () => {
  return (
    <section className="section auth">
      <div className="container">
        <h1>Change Password</h1>
        <p>Your password has been successfully updated!</p>
        <hr />
        <Link to="/">Go Back to Home</Link>
      </div>
    </section>
  );
};

export default ChangePasswordConfirmation;