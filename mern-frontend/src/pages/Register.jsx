import { useState } from "react";
import API from "../api/axios";
import bg from "../assets/bg.jpg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registered successfully");
      window.location.href = "/";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bg}) center/cover no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Create Account ✨
        </h2>

        <input
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "10px",
            background: "#667eea",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account?{" "}
          <a href="/" style={{ color: "#667eea" }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}