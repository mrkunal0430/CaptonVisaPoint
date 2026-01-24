import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../components/admin/AdminLayout";
import LeadsTable from "../components/admin/LeadsTable";
import EligibilityLeadsTable from "../components/admin/EligibilityLeadsTable";
import BlogManager from "../components/admin/BlogManager";
import { FiLock, FiAlertCircle } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

const Admin = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("adminToken") || null,
  );
  const [activeTab, setActiveTab] = useState("leads");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Verify token on mount
    const verifyToken = async () => {
      if (token) {
        try {
          await axios.get(`${API_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setAuth(true);
        } catch (error) {
          console.error("Token verification failed:", error);
          handleLogout();
        }
      }
    };

    verifyToken();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (res.data.success) {
        const authToken = res.data.token;
        localStorage.setItem("adminToken", authToken);
        setToken(authToken);
        setAuth(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setAuth(false);
    setEmail("");
    setPassword("");
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
              <FiLock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Admin Login</h2>
            <p className="text-slate-500 text-sm mt-2">
              Access Capton Visa Point Dashboard
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-50 text-red-600 border border-red-100 flex items-center gap-2 text-sm">
              <FiAlertCircle /> {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                placeholder="admin@captonvisa.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              className="w-full bg-brand-blue text-white py-3.5 rounded-xl font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Login to Dashboard"
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <AdminLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onLogout={handleLogout}
    >
      {activeTab === "leads" && <LeadsTable token={token} />}
      {activeTab === "eligibility" && <EligibilityLeadsTable token={token} />}
      {activeTab === "blogs" && <BlogManager token={token} />}
    </AdminLayout>
  );
};

export default Admin;
