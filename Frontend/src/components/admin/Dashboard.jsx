import { useState, useEffect } from "react";
import axios from "axios";
import {
  FiUsers,
  FiClipboard,
  FiAward,
  FiTrendingUp,
  FiCalendar,
  FiRefreshCw,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiBookOpen,
  FiBriefcase,
  FiGlobe,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

const Dashboard = ({ token, setActiveTab }) => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    generalLeads: null,
    serviceLeads: null,
    eligibilityLeads: null,
  });
  const [recentLeads, setRecentLeads] = useState([]);

  const fetchAllStats = async () => {
    setLoading(true);
    try {
      const [generalRes, serviceRes, eligibilityRes, recentRes] = await Promise.all([
        axios.get(`${API_URL}/leads/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/service-leads/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/eligibility/stats`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/service-leads?limit=5`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setStats({
        generalLeads: generalRes.data.stats,
        serviceLeads: serviceRes.data.stats,
        eligibilityLeads: eligibilityRes.data.stats,
      });
      setRecentLeads(recentRes.data.leads || []);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllStats();
  }, []);

  const getTotalLeads = () => {
    return (
      (stats.generalLeads?.total || 0) +
      (stats.serviceLeads?.total || 0) +
      (stats.eligibilityLeads?.total || 0)
    );
  };

  const getTotalNew = () => {
    return (
      (stats.generalLeads?.new || 0) +
      (stats.serviceLeads?.byStatus?.find((s) => s._id === "New")?.count || 0) +
      (stats.eligibilityLeads?.new || 0)
    );
  };

  const getTotalConverted = () => {
    return (
      (stats.generalLeads?.converted || 0) +
      (stats.serviceLeads?.byStatus?.find((s) => s._id === "Converted")?.count || 0) +
      (stats.eligibilityLeads?.converted || 0)
    );
  };

  const getServiceTypeIcon = (type) => {
    switch (type) {
      case "MBBS_INDIA":
        return <FiBookOpen className="text-orange-500" />;
      case "MBBS_ABROAD":
        return <FiGlobe className="text-blue-500" />;
      case "STUDY_ABROAD":
        return <FiBookOpen className="text-blue-600" />;
      case "WORK_ABROAD":
        return <FiBriefcase className="text-blue-600" />;
      default:
        return <FiClipboard className="text-slate-500" />;
    }
  };

  const formatServiceType = (type) => {
    const names = {
      MBBS_INDIA: "MBBS India",
      MBBS_ABROAD: "MBBS Abroad",
      STUDY_ABROAD: "Study Abroad",
      WORK_ABROAD: "Work Abroad",
    };
    return names[type] || type;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-slate-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Dashboard Overview
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            All forms and leads at a glance
          </p>
        </div>
        <button
          onClick={fetchAllStats}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
        >
          <FiRefreshCw className={loading ? "animate-spin" : ""} size={18} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FiUsers size={24} />
            </div>
            <FiTrendingUp size={20} className="opacity-60" />
          </div>
          <div className="text-3xl font-bold">{getTotalLeads()}</div>
          <div className="text-blue-100 text-sm">Total Leads</div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg shadow-blue-600/20">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FiCalendar size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold">{getTotalNew()}</div>
          <div className="text-blue-100 text-sm">New Leads</div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg shadow-blue-600/20">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FiAward size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold">{getTotalConverted()}</div>
          <div className="text-blue-100 text-sm">Converted</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-white shadow-lg shadow-orange-500/20">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FiClipboard size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold">{stats.serviceLeads?.today || 0}</div>
          <div className="text-orange-100 text-sm">Today's Leads</div>
        </div>
      </div>

      {/* Forms Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* General Leads */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <FiUsers className="text-blue-500" /> General Inquiries
            </h3>
            <button
              onClick={() => setActiveTab("leads")}
              className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1"
            >
              View All <FiArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">Total</span>
              <span className="font-semibold text-slate-800">
                {stats.generalLeads?.total || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">New</span>
              <span className="font-semibold text-blue-700">
                {stats.generalLeads?.new || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">Contacted</span>
              <span className="font-semibold text-yellow-600">
                {stats.generalLeads?.contacted || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">Converted</span>
              <span className="font-semibold text-blue-700">
                {stats.generalLeads?.converted || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Service Leads */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <FiClipboard className="text-blue-600" /> Service Leads
            </h3>
            <button
              onClick={() => setActiveTab("service-leads")}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View All <FiArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">Total</span>
              <span className="font-semibold text-slate-800">
                {stats.serviceLeads?.total || 0}
              </span>
            </div>
            {stats.serviceLeads?.byService?.map((service) => (
              <div key={service._id} className="flex justify-between items-center">
                <span className="text-slate-500 text-sm flex items-center gap-1.5">
                  {getServiceTypeIcon(service._id)} {formatServiceType(service._id)}
                </span>
                <span className="font-semibold text-slate-700">{service.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Leads */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <FiAward className="text-blue-600" /> Eligibility Checks
            </h3>
            <button
              onClick={() => setActiveTab("eligibility")}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View All <FiArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">Total</span>
              <span className="font-semibold text-slate-800">
                {stats.eligibilityLeads?.total || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">Average Score</span>
              <span className="font-semibold text-blue-600">
                {stats.eligibilityLeads?.avgScore || 0}%
              </span>
            </div>
            {stats.eligibilityLeads?.byPreference?.map((pref) => (
              <div key={pref._id} className="flex justify-between items-center">
                <span className="text-slate-500 text-sm capitalize">
                  {pref._id?.replace("-", " ")}
                </span>
                <span className="font-semibold text-slate-700">{pref.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Recent Service Leads</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {recentLeads.length > 0 ? (
            recentLeads.map((lead) => (
              <div
                key={lead._id}
                className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold">
                    {lead.fullName?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">{lead.fullName}</div>
                    <div className="text-sm text-slate-500 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FiPhone size={12} /> {lead.phone}
                      </span>
                      <span className="hidden sm:flex items-center gap-1">
                        <FiMail size={12} /> {lead.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      lead.serviceType === "MBBS_INDIA"
                        ? "bg-orange-100 text-orange-700"
                        : lead.serviceType === "MBBS_ABROAD"
                        ? "bg-blue-100 text-blue-700"
                        : lead.serviceType === "STUDY_ABROAD"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {formatServiceType(lead.serviceType)}
                  </span>
                  <div className="text-xs text-slate-400 mt-1">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">
              No recent leads found
            </div>
          )}
        </div>
        {recentLeads.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <button
              onClick={() => setActiveTab("service-leads")}
              className="w-full text-center text-sm text-brand-blue hover:text-blue-600 font-medium"
            >
              View All Service Leads
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
