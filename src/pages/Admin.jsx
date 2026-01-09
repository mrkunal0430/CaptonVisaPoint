import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [leads, setLeads] = useState([]);
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (auth) {
      const fetchLeads = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/leads");
          setLeads(res.data);
        } catch (error) {
          console.error("Error fetching leads:", error);
        }
      };
      fetchLeads();
    }
  }, [auth]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      // Mock secure password
      setAuth(true);
    } else {
      alert("Invalid Password");
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded mb-4"
            placeholder="Password"
          />
          <button className="w-full bg-brand-blue text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-24 container mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard - Leads</h1>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-600 border-b">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Interest</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.length > 0 ? (
              leads.map((lead) => (
                <tr key={lead._id} className="border-b hover:bg-slate-50">
                  <td className="p-4 font-medium">{lead.name}</td>
                  <td className="p-4">{lead.email}</td>
                  <td className="p-4">{lead.phone}</td>
                  <td className="p-4">{lead.serviceInterest}</td>
                  <td className="p-4">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-slate-500">
                  No leads found or API not connected to GET yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
