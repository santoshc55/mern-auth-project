import { useEffect, useState } from "react";
import API from "../api/axios";
import bg from "../assets/bg.jpg";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [stats, setStats] = useState([]);

  // GET ITEMS
  const getItems = async () => {
    try {
      const res = await API.get("/items");
      setItems(res.data);
    } catch (err) {
      console.log("ERROR:", err.response || err);
    }
  };

  // ADD ITEM
  const addItem = async () => {
    if (!title || !description) {
      alert("Enter title and description");
      return;
    }

    try {
      await API.post("/items", { title, description, status });
      setTitle("");
      setDescription("");
      setStatus("active");

      getItems();

      // refresh stats also
      const statsRes = await API.get("/items/stats");
      setStats(statsRes.data);
    } catch (err) {
      console.log("ADD ERROR:", err.response || err);
    }
  };

  // DELETE ITEM
  const deleteItem = async (id) => {
    try {
      await API.delete(`/items/${id}`);
      getItems();

      // refresh stats
      const statsRes = await API.get("/items/stats");
      setStats(statsRes.data);
    } catch (err) {
      console.log("DELETE ERROR:", err.response || err);
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    getItems();

    // GET STATS
    API.get("/items/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url(${bg}) center/cover no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Dashboard</h2>

          <button
            onClick={logout}
            style={{
              background: "#ff4d4d",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        <br />

        {/* STATS */}
        <div style={{ marginBottom: "10px" }}>
          <h4>Stats</h4>
          {stats.length === 0 ? (
            <p style={{ fontSize: "12px" }}>No data</p>
          ) : (
            stats.map((s) => (
              <p key={s.status}>
                {s.status}: {s.count}
              </p>
            ))
          )}
        </div>

        {/* INPUTS */}
        <input
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* DROPDOWN */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        {/* ADD BUTTON */}
        <button
          onClick={addItem}
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
          Add Item
        </button>

        <hr />

        {/* ITEMS LIST */}
        {items.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>
            No items found
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#f9f9f9",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
              }}
            >
              <b>{item.title}</b>
              <p style={{ margin: 0 }}>{item.description}</p>
              <p style={{ fontSize: "12px", color: "#555" }}>
                Status: {item.status}
              </p>

              <button
                onClick={() => deleteItem(item.id)}
                style={{
                  marginTop: "5px",
                  background: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}