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
  FiDownload,
  FiEye,
  FiMapPin,
  FiGlobe,
  FiDollarSign,
  FiBook,
  FiUser,
  FiMessageCircle,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

const ServiceLeadsTable = ({ token }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [filters, setFilters] = useState({
    serviceType: "all",
    status: "all",
    source: "all",
    search: "",
    startDate: "",
    endDate: "",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 15,
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
        ...filters,
      };

      const res = await axios.get(`${API_URL}/service-leads`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });

      setLeads(res.data.leads);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_URL}/service-leads/stats`, {
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
    filters.serviceType,
    filters.status,
    filters.source,
    filters.startDate,
    filters.endDate,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeads();
    }, 500);
    return () => clearTimeout(timer);
  }, [filters.search]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      try {
        await axios.delete(`${API_URL}/service-leads/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchLeads();
        fetchStats();
      } catch (error) {
        console.error("Error deleting lead:", error);
      }
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(
        `${API_URL}/service-leads/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchLeads();
      fetchStats();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleExport = async () => {
    try {
      const params = new URLSearchParams();
      if (filters.serviceType !== "all") params.append("serviceType", filters.serviceType);
      if (filters.status !== "all") params.append("status", filters.status);
      if (filters.startDate) params.append("startDate", filters.startDate);
      if (filters.endDate) params.append("endDate", filters.endDate);

      window.open(
        `${API_URL}/service-leads/export?${params.toString()}`,
        "_blank"
      );
    } catch (error) {
      console.error("Export error:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contacted":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Converted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Not Interested":
        return "bg-red-100 text-red-700 border-red-200";
      case "Follow Up":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getServiceColor = (serviceType) => {
    switch (serviceType) {
      case "MBBS_INDIA":
        return "bg-orange-100 text-orange-700";
      case "MBBS_ABROAD":
        return "bg-blue-100 text-blue-700";
      case "STUDY_ABROAD":
        return "bg-blue-100 text-blue-800";
      case "WORK_ABROAD":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-slate-100 text-slate-700";
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

  const clearFilters = () => {
    setFilters({
      serviceType: "all",
      status: "all",
      source: "all",
      search: "",
      startDate: "",
      endDate: "",
    });
  };

  const hasActiveFilters =
    filters.serviceType !== "all" ||
    filters.status !== "all" ||
    filters.source !== "all" ||
    filters.startDate ||
    filters.endDate;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-slate-800">{stats.total}</div>
            <div className="text-sm text-slate-500">Total Leads</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-blue-700">{stats.today}</div>
            <div className="text-sm text-slate-500">Today</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{stats.thisWeek}</div>
            <div className="text-sm text-slate-500">This Week</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-blue-700">
              {stats.byStatus?.find((s) => s._id === "Converted")?.count || 0}
            </div>
            <div className="text-sm text-slate-500">Converted</div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Service Leads
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {pagination.total} total leads
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
          >
            <FiDownload size={18} />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors ${
              showFilters || hasActiveFilters
                ? "bg-brand-blue text-white"
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
            onClick={() => { fetchLeads(); fetchStats(); }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} size={18} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name, email, phone, or city..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all bg-white"
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
                className="text-sm text-brand-blue hover:underline flex items-center gap-1"
              >
                <FiX size={14} /> Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                Service Type
              </label>
              <select
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue bg-white text-slate-700"
                value={filters.serviceType}
                onChange={(e) =>
                  setFilters({ ...filters, serviceType: e.target.value })
                }
              >
                <option value="all">All Services</option>
                <option value="MBBS_INDIA">MBBS India</option>
                <option value="MBBS_ABROAD">MBBS Abroad</option>
                <option value="STUDY_ABROAD">Study Abroad</option>
                <option value="WORK_ABROAD">Work Abroad</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                Status
              </label>
              <select
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue bg-white text-slate-700"
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option value="all">All Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Follow Up">Follow Up</option>
                <option value="Converted">Converted</option>
                <option value="Not Interested">Not Interested</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                Source
              </label>
              <select
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue bg-white text-slate-700"
                value={filters.source}
                onChange={(e) =>
                  setFilters({ ...filters, source: e.target.value })
                }
              >
                <option value="all">All Sources</option>
                <option value="Meta Ads">Meta Ads</option>
                <option value="Google">Google</option>
                <option value="Organic">Organic</option>
                <option value="Referral">Referral</option>
                <option value="Direct">Direct</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                From Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue bg-white text-slate-700"
                value={filters.startDate}
                onChange={(e) =>
                  setFilters({ ...filters, startDate: e.target.value })
                }
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                To Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue bg-white text-slate-700"
                value={filters.endDate}
                onChange={(e) =>
                  setFilters({ ...filters, endDate: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Area */}
      {loading ? (
        <div className="bg-white rounded-xl p-12 text-center">
          <div className="inline-block w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-slate-500">Loading leads...</p>
        </div>
      ) : leads.length > 0 ? (
        <>
          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 text-sm font-semibold border-b border-slate-100">
                  <tr>
                    <th className="p-4">Date</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Source</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr
                      key={lead._id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-4 text-slate-500 whitespace-nowrap text-sm">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-slate-800">
                          {lead.fullName}
                        </div>
                        {lead.city && (
                          <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <FiMapPin size={10} /> {lead.city}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col text-sm gap-1">
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-slate-800 hover:text-brand-blue flex items-center gap-1.5"
                          >
                            <FiPhone size={14} /> {lead.phone}
                          </a>
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-blue-500 hover:underline flex items-center gap-1.5 text-xs"
                          >
                            <FiMail size={12} /> {lead.email}
                          </a>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getServiceColor(
                            lead.serviceType
                          )}`}
                        >
                          {formatServiceType(lead.serviceType)}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-600">
                        {lead.source || "-"}
                      </td>
                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusUpdate(lead._id, e.target.value)
                          }
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer ${getStatusColor(
                            lead.status
                          )}`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Follow Up">Follow Up</option>
                          <option value="Converted">Converted</option>
                          <option value="Not Interested">Not Interested</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="p-2 text-slate-400 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <FiEye size={18} />
                          </button>
                          <a
                            href={`https://wa.me/${(lead.whatsapp || lead.phone)?.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="WhatsApp"
                          >
                            <FiMessageCircle size={18} />
                          </a>
                          <button
                            onClick={() => handleDelete(lead._id)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {leads.map((lead) => (
              <div
                key={lead._id}
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {lead.fullName}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <FiCalendar size={12} />
                      {new Date(lead.createdAt).toLocaleDateString()}
                      {lead.city && (
                        <>
                          <span>•</span>
                          <FiMapPin size={12} />
                          {lead.city}
                        </>
                      )}
                    </div>
                  </div>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      handleStatusUpdate(lead._id, e.target.value)
                    }
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getStatusColor(
                      lead.status
                    )}`}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Follow Up">Follow Up</option>
                    <option value="Converted">Converted</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getServiceColor(
                      lead.serviceType
                    )}`}
                  >
                    {formatServiceType(lead.serviceType)}
                  </span>
                  {lead.source && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {lead.source}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-700 hover:bg-slate-100"
                  >
                    <FiPhone className="text-brand-blue" size={14} />
                    {lead.phone}
                  </a>
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-blue-600 hover:bg-slate-100 truncate max-w-[200px]"
                  >
                    <FiMail size={14} />
                    {lead.email}
                  </a>
                </div>

                <div className="flex justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedLead(lead)}
                    className="flex items-center gap-2 px-3 py-2 text-brand-blue hover:bg-blue-50 rounded-lg text-sm font-medium"
                  >
                    <FiEye size={16} /> View Details
                  </button>
                  <button
                    onClick={() => handleDelete(lead._id)}
                    className="flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium"
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
                    className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <span className="px-4 py-2 text-sm font-medium text-slate-700">
                    Page {pagination.page} of {pagination.pages}
                  </span>
                  <button
                    disabled={pagination.page === pagination.pages}
                    onClick={() =>
                      setPagination({ ...pagination, page: pagination.page + 1 })
                    }
                    className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
            <FiSearch className="text-slate-400 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            No Leads Found
          </h3>
          <p className="text-slate-500">
            {hasActiveFilters
              ? "Try adjusting your filters."
              : "No service leads yet."}
          </p>
        </div>
      )}

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Lead Details</h3>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <FiUser size={14} /> Basic Information
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400">Full Name</label>
                    <p className="font-medium text-slate-800">{selectedLead.fullName}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Email</label>
                    <p className="font-medium text-slate-800">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Phone</label>
                    <p className="font-medium text-slate-800">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">WhatsApp</label>
                    <p className="font-medium text-slate-800">{selectedLead.whatsapp || selectedLead.phone}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">City</label>
                    <p className="font-medium text-slate-800">{selectedLead.city || "-"}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Service Type</label>
                    <p className="font-medium text-slate-800">{formatServiceType(selectedLead.serviceType)}</p>
                  </div>
                </div>
              </div>

              {/* Service-Specific Details */}
              {selectedLead.serviceType === "MBBS_INDIA" && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <FiBook size={14} /> Academic Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400">12th Stream</label>
                      <p className="font-medium text-slate-800">{selectedLead.twelfthStream || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">PCB %</label>
                      <p className="font-medium text-slate-800">{selectedLead.overallPCBPercent || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">NEET Appeared</label>
                      <p className="font-medium text-slate-800">{selectedLead.neetAppeared || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">NEET Score</label>
                      <p className="font-medium text-slate-800">{selectedLead.neetScore || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Budget</label>
                      <p className="font-medium text-slate-800">{selectedLead.budgetMbbsIndia || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">College Category</label>
                      <p className="font-medium text-slate-800">{selectedLead.collegeCategory || "-"}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedLead.serviceType === "MBBS_ABROAD" && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <FiGlobe size={14} /> MBBS Abroad Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400">PCB Studied</label>
                      <p className="font-medium text-slate-800">{selectedLead.pcbStudied || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">PCB %</label>
                      <p className="font-medium text-slate-800">{selectedLead.pcbPercentage || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">NEET Score</label>
                      <p className="font-medium text-slate-800">{selectedLead.neetScore || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Budget</label>
                      <p className="font-medium text-slate-800">{selectedLead.budgetMbbsAbroad || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Countries</label>
                      <p className="font-medium text-slate-800">
                        {selectedLead.countryPreferenceMbbs?.join(", ") || "-"}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Passport</label>
                      <p className="font-medium text-slate-800">{selectedLead.passportAvailable || "-"}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedLead.serviceType === "STUDY_ABROAD" && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <FiBook size={14} /> Study Abroad Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400">Qualification</label>
                      <p className="font-medium text-slate-800">{selectedLead.highestQualification || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Course Type</label>
                      <p className="font-medium text-slate-800">{selectedLead.courseType || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Language Test</label>
                      <p className="font-medium text-slate-800">{selectedLead.languageTest || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Score</label>
                      <p className="font-medium text-slate-800">{selectedLead.languageScore || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Countries</label>
                      <p className="font-medium text-slate-800">
                        {selectedLead.countryPreferenceStudy?.join(", ") || "-"}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Budget</label>
                      <p className="font-medium text-slate-800">{selectedLead.budgetStudyAbroad || "-"}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedLead.serviceType === "WORK_ABROAD" && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <FiGlobe size={14} /> Work Abroad Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400">Qualification</label>
                      <p className="font-medium text-slate-800">{selectedLead.qualification || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Experience</label>
                      <p className="font-medium text-slate-800">{selectedLead.yearsOfExperience || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">English Level</label>
                      <p className="font-medium text-slate-800">{selectedLead.englishLevel || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Certification</label>
                      <p className="font-medium text-slate-800">{selectedLead.languageCertification || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Job Field</label>
                      <p className="font-medium text-slate-800">{selectedLead.jobField || "-"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400">Countries</label>
                      <p className="font-medium text-slate-800">
                        {selectedLead.countryPreferenceWork?.join(", ") || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tracking Info */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <FiGlobe size={14} /> Tracking Info
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400">Source</label>
                    <p className="font-medium text-slate-800">{selectedLead.source || "-"}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">UTM Campaign</label>
                    <p className="font-medium text-slate-800">{selectedLead.utmCampaign || "-"}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Landing Page</label>
                    <p className="font-medium text-slate-800">{selectedLead.landingPage || "-"}</p>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400">Created At</label>
                    <p className="font-medium text-slate-800">
                      {new Date(selectedLead.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-blue text-white rounded-xl font-medium hover:bg-blue-700"
                >
                  <FiPhone size={18} /> Call
                </a>
                <a
                  href={`https://wa.me/${(selectedLead.whatsapp || selectedLead.phone)?.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-800"
                >
                  <FiMessageCircle size={18} /> WhatsApp
                </a>
                <a
                  href={`mailto:${selectedLead.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200"
                >
                  <FiMail size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceLeadsTable;
