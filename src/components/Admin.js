import React, { useState } from "react";
import "../admin.css";
import BlogTable from "./BlogTable";
import MessageTable from "./MessageTable";

const Admin = ({ truncate, blogs, message }) => {
  const [step, setStep] = useState(1);
  return (
    <div className="admin">
      <div className="inner">
        <h3>Admin</h3>
        <h1>User : raunak</h1>
        <div className="header">
          <h1
            onClick={() => setStep(1)}
            style={{
              borderBottom: step === 1 ? "2px solid #000000" : "none",
              background: step === 1 ? "rgba(217, 151, 250, 0.2)" : "none",
            }}
          >
            Blogs
          </h1>
          <h1
            onClick={() => setStep(2)}
            style={{
              borderBottom: step === 2 ? "2px solid #000000" : "none",
              background: step === 2 ? "rgba(217, 151, 250, 0.2)" : "none",
            }}
          >
            Messages
          </h1>
        </div>
        <div className="component">
          {step === 1 ? (
            <BlogTable truncate={truncate} blog={blogs} />
          ) : (
            <MessageTable truncate={truncate} message={message} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
