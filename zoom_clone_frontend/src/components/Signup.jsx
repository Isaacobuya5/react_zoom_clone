import React from "react";

const SignUp = () => (
<div className="col-sm-12 col-md-6">
<form>
<div className="form-group">
    <label for="username">Username</label>
    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="action__btn">
  <button type="submit" className="btn btn-primary">Sign Up</button>
  </div>
</form>
</div>
);

export default SignUp;