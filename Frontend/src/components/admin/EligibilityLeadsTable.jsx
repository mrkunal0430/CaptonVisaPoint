import { useState, useEffect } from "react";
import axios from "axios";
import {
  FiSearch,
  FiTrash2,
  FiRefreshCw,
  FiPhone,
  FiMail,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiAward,
  FiBookOpen,
  FiDollarSign,
  FiHeart,
} from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const EligibilityLeadsTable = ({ token }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedLead, setExpandedLead] = useState(null);
  const [filters, setFilters] = useState({
    eligibilityCategory: "all",
    status: "all",
    search: "",
    startDate: "",
    endDate: "",
  });
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });
  const [stats, setStats] = useState(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        sortBy,
        sortOrder,
        ...filters,
      };

      const res = await axios.get(`${API_URL}/eligibility`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });

      setLeads(res.data.leads);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error("Error fetching eligibility leads:", error);
      alert("Failed to fetch eligibility leads");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_URL}/eligibility/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data.stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
    fetchStats();
  }, [
    pagination.page,
    filters.eligibilityCategory,
    filters.status,
    filters.startDate,
    filters.endDate,
    sortBy,
    sortOrder,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeads();
    }, 500);
    return () => clearTimeout(timer);
  }, [filters.search]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this eligibility lead?")) {
      try {
        await axios.delete(`${API_URL}/eligibility/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchLeads();
        fetchStats();
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Failed to delete lead");
      }
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(
        `${API_URL}/eligibility/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchLeads();
      fetchStats();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-green-100 text-green-700 border-green-200";
      case "contacted":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "converted":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Highly Eligible":
        return "bg-green-100 text-green-700 border-green-300";
      case "Eligible with Guidance":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Borderline":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Not Eligible Yet":
        return "bg-orange-100 text-orange-700 border-orange-300";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 8) return "text-green-600 bg-green-50";
    if (score >= 6) return "text-blue-600 bg-blue-50";
    if (score >= 4) return "text-yellow-600 bg-yellow-50";
    return "text-orange-600 bg-orange-50";
  };

  const clearFilters = () => {
    setFilters({
      eligibilityCategory: "all",
      status: "all",
      search: "",
      startDate: "",
      endDate: "",
    });
  };

  const hasActiveFilters =
    filters.eligibilityCategory !== "all" ||
    filters.status !== "all" ||
    filters.startDate ||
    filters.endDate;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
            <FaStethoscope className="text-green-600" />
            MBBS Eligibility Leads
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {pagination.total} total eligibility checks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors ${
              showFilters || hasActiveFilters
                ? "bg-green-600 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FiFilter size={18} />
            <span className="hidden sm:inline">Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-white rounded-full" />
            )}
          </button>
          <button
            onClick={() => {
              fetchLeads();
              fetchStats();
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} size={18} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-slate-800">{stats.total}</div>
            <div className="text-sm text-slate-500">Total Checks</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="text-2xl font-bold text-green-600">{stats.new}</div>
            <div className="text-sm text-green-600">New Leads</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="text-2xl font-bold text-blue-600">{stats.avgScore}</div>
            <div className="text-sm text-blue-600">Avg Score</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">{stats.converted}</div>
            <div className="text-sm text-purple-600">Converted</div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name, email, or WhatsApp..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Filter Leads</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-green-600 hover:underline flex items-center gap-1"
              >
                <FiX size={14} /> Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                Eligibility Category
              </label>
              <select
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-green-500 bg-white text-slate-700"
                value={filters.eligibilityCategory}
                onChange={(e) =>
                  setFilters({ ...filters, eligibilityCategory: e.target.value })
                }
              >
                <option value="all">All Categories</option>
                <option value="Highly Eligible">Highly Eligible</option>
                <option value="Eligible with Guidance">Eligible with Guidance</option>
                <option value="Borderline">Borderline</option>
                <option value="Not Eligible Yet">Not Eligible Yet</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">Status</label>
              <select
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-green-500 bg-white text-slate-700"
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">From Date</label>
              <input
                type="date"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-green-500 bg-white text-slate-700"
                value={filters.startDate}
                onChange={(e) =>
                  setFilters({ ...filters, startDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">To Date</label>
              <input
                type="date"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-green-500 bg-white text-slate-700"
                value={filters.endDate}
                onChange={(e) =>
                  setFilters({ ...filters, endDate: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* Sorting Options */}
      <div className="flex items-center gap-3 text-sm">
        <span className="text-slate-500">Sort by:</span>
        <button
          onClick={() => handleSort("createdAt")}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
            sortBy === "createdAt"
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Date
          {sortBy === "createdAt" &&
            (sortOrder === "desc" ? <FiChevronDown /> : <FiChevronUp />)}
        </button>
        <button
          onClick={() => handleSort("totalScore")}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
            sortBy === "totalScore"
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Score
          {sortBy === "totalScore" &&
            (sortOrder === "desc" ? <FiChevronDown /> : <FiChevronUp />)}
        </button>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="bg-white rounded-xl p-12 text-center">
          <div className="inline-block w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-slate-500">Loading eligibility leads...</p>
        </div>
      ) : leads.length > 0 ? (
        <>
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 text-sm font-semibold border-b border-slate-100">
                  <tr>
                    <th className="p-4">Date</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4 text-center">Score</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-center">Details</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <>
                      <tr
                        key={lead._id}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="p-4 text-slate-500 whitespace-nowrap text-sm">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 font-medium text-slate-800">
                          {lead.name}
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col text-sm gap-1">
                            <a
                              href={`https://wa.me/${lead.whatsapp?.replace(/\D/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-700 flex items-center gap-1.5"
                            >
                              <FiPhone size={14} /> {lead.whatsapp}
                            </a>
                            <a
                              href={`mailto:${lead.email}`}
                              className="text-blue-500 hover:underline flex items-center gap-1.5"
                            >
                              <FiMail size={14} /> {lead.email}
                            </a>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${getScoreColor(
                              lead.totalScore
                            )}`}
                          >
                            {lead.totalScore}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                              lead.eligibilityCategory
                            )}`}
                          >
                            {lead.eligibilityCategory}
                          </span>
                        </td>
                        <td className="p-4">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              handleStatusUpdate(lead._id, e.target.value)
                            }
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer focus:ring-2 focus:ring-offset-1 ${getStatusColor(
                              lead.status
                            )}`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() =>
                              setExpandedLead(
                                expandedLead === lead._id ? null : lead._id
                              )
                            }
                            className="p-2 text-slate-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            {expandedLead === lead._id ? (
                              <FiChevronUp size={18} />
                            ) : (
                              <FiChevronDown size={18} />
                            )}
                          </button>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleDelete(lead._id)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Lead"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </td>
                      </tr>
                      {expandedLead === lead._id && (
                        <tr className="bg-slate-50">
                          <td colSpan={8} className="p-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white p-3 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                                  <FiBookOpen size={12} /> PCB Score
                                </div>
                                <div className="font-medium text-slate-800">
                                  {lead.pcbScore}
                                </div>
                              </div>
                              <div className="bg-white p-3 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                                  <FiAward size={12} /> NEET Status
                                </div>
                                <div className="font-medium text-slate-800">
                                  {lead.neetStatus}
                                </div>
                              </div>
                              <div className="bg-white p-3 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                                  <FiDollarSign size={12} /> Annual Budget
                                </div>
                                <div className="font-medium text-slate-800">
                                  {lead.annualBudget}
                                </div>
                              </div>
                              <div className="bg-white p-3 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                                  <FiHeart size={12} /> Readiness
                                </div>
                                <div className="font-medium text-slate-800">
                                  {lead.readiness}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {leads.map((lead) => (
              <div
                key={lead._id}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">
                        {lead.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                        <FiCalendar size={12} />
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl ${getScoreColor(
                        lead.totalScore
                      )}`}
                    >
                      {lead.totalScore}
                    </div>
                  </div>

                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                        lead.eligibilityCategory
                      )}`}
                    >
                      {lead.eligibilityCategory}
                    </span>
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleStatusUpdate(lead._id, e.target.value)
                      }
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${lead.whatsapp?.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg text-sm text-green-700 hover:bg-green-100 transition-colors"
                    >
                      <FiPhone size={16} />
                      {lead.whatsapp}
                    </a>
                    <a
                      href={`mailto:${lead.email}`}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-blue-600 hover:bg-slate-100 transition-colors"
                    >
                      <FiMail size={16} />
                      {lead.email}
                    </a>
                  </div>
                </div>

                {/* Expandable Details */}
                <div className="border-t border-slate-100">
                  <button
                    onClick={() =>
                      setExpandedLead(expandedLead === lead._id ? null : lead._id)
                    }
                    className="w-full px-4 py-3 flex items-center justify-between text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <span>View Quiz Answers</span>
                    {expandedLead === lead._id ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {expandedLead === lead._id && (
                    <div className="px-4 pb-4 space-y-3">
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                          <FiBookOpen size={12} /> PCB Score
                        </div>
                        <div className="font-medium text-slate-800">
                          {lead.pcbScore}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                          <FiAward size={12} /> NEET Status
                        </div>
                        <div className="font-medium text-slate-800">
                          {lead.neetStatus}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                          <FiDollarSign size={12} /> Annual Budget
                        </div>
                        <div className="font-medium text-slate-800">
                          {lead.annualBudget}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                          <FiHeart size={12} /> Readiness
                        </div>
                        <div className="font-medium text-slate-800">
                          {lead.readiness}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-end px-4 py-3 border-t border-slate-100 bg-slate-50">
                  <button
                    onClick={() => handleDelete(lead._id)}
                    className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
                  >
                    <FiTrash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-slate-500 text-center sm:text-left">
                  Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                  {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
                  of {pagination.total}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    disabled={pagination.page === 1}
                    onClick={() =>
                      setPagination({ ...pagination, page: pagination.page - 1 })
                    }
                    className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-1">
                    {[...Array(Math.min(pagination.pages, 5))].map((_, i) => {
                      let pageNum;
                      if (pagination.pages <= 5) {
                        pageNum = i + 1;
                      } else if (pagination.page <= 3) {
                        pageNum = i + 1;
                      } else if (pagination.page >= pagination.pages - 2) {
                        pageNum = pagination.pages - 4 + i;
                      } else {
                        pageNum = pagination.page - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() =>
                            setPagination({ ...pagination, page: pageNum })
                          }
                          className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                            pagination.page === pageNum
                              ? "bg-green-600 text-white"
                              : "hover:bg-slate-100 text-slate-600"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    disabled={pagination.page === pagination.pages}
                    onClick={() =>
                      setPagination({ ...pagination, page: pagination.page + 1 })
                    }
                    className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaStethoscope className="text-slate-400 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            No Eligibility Leads Found
          </h3>
          <p className="text-slate-500">
            {hasActiveFilters
              ? "Try adjusting your filters to see more results."
              : "No eligibility checks have been submitted yet."}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EligibilityLeadsTable;
