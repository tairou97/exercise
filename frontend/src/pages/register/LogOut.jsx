import React from "react";

const LogOut = () => {
  return (
    <div>
      <form action="">
        {" "}
        return (
        <div className="registerForm">
          <form>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="enter name" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" name="" placeholder="enter email" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" name="" placeholder="enter password" />
            </div>
            <button type="submit" className="px-5 py-3 mt-3 text-white">
              {" "}
              Register
            </button>
          </form>
        </div>
        );
      </form>
    </div>
  );
};

export default LogOut;
