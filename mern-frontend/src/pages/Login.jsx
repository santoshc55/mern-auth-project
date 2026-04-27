import { useState } from "react";
import API from "../api/axios";
import bg from "../assets/bg.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bg}) center/cover no-repeat`,
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "350px",
        padding: "30px",
        borderRadius: "15px",
        background: "rgba(255,255,255,0.9)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
      }}>

        <h2 style={{
          textAlign: "center",
          marginBottom: "25px"
        }}>
          Welcome Back 👋
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#667eea",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s"
          }}
          onMouseOver={(e) => e.target.style.background = "#5a67d8"}
          onMouseOut={(e) => e.target.style.background = "#667eea"}
        >
          Login
        </button>

      </div>
    </div>
  );
}