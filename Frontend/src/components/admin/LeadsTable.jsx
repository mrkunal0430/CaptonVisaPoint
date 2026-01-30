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
  FiMessageSquare,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

const LeadsTable = ({ token }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    search: "",
    startDate: "",
    endDate: "",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...filters,
      };

      const res = await axios.get(`${API_URL}/leads`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });

      setLeads(res.data.leads);
      setPagination(res.data.pagination);
    } catch (error) {
      console.error("Error fetching leads:", error);
      alert("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [
    pagination.page,
    filters.status,
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
        await axios.delete(`${API_URL}/leads/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchLeads();
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Failed to delete lead");
      }
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(
        `${API_URL}/leads/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchLeads();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
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

  const clearFilters = () => {
    setFilters({
      status: "all",
      search: "",
      startDate: "",
      endDate: "",
    });
  };

  const hasActiveFilters =
    filters.status !== "all" ||
    filters.startDate ||
    filters.endDate;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Leads Management
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {pagination.total} total leads
          </p>
        </div>
        <div className="flex items-center gap-2">
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
            onClick={fetchLeads}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} size={18} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      {/* Search Bar - Always Visible */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
                <option value="closed">Closed</option>
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
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 text-sm font-semibold border-b border-slate-100">
                  <tr>
                    <th className="p-4">Date</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">City</th>
                    <th className="p-4">Message</th>
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
                      <td className="p-4 font-medium text-slate-800">
                        {lead.name}
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
                            className="text-blue-500 hover:underline flex items-center gap-1.5"
                          >
                            <FiMail size={14} /> {lead.email}
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600">
                        {lead.city || "-"}
                      </td>
                      <td
                        className="p-4 text-sm text-slate-600 max-w-[200px] truncate"
                        title={lead.message}
                      >
                        {lead.message || "-"}
                      </td>
                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusUpdate(lead._id, e.target.value)
                          }
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer focus:ring-2 focus:ring-offset-1 ${getStatusColor(lead.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
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
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-4"
              >
                {/* Card Header */}
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
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      handleStatusUpdate(lead._id, e.target.value)
                    }
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer ${getStatusColor(lead.status)}`}
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
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <FiPhone className="text-brand-blue" size={16} />
                    {lead.phone}
                  </a>
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-sm text-blue-600 hover:bg-slate-100 transition-colors"
                  >
                    <FiMail size={16} />
                    {lead.email}
                  </a>
                </div>

                {/* City Badge */}
                {lead.city && (
                  <div>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {lead.city}
                    </span>
                  </div>
                )}

                {/* Message */}
                {lead.message && (
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <FiMessageSquare size={12} /> Message
                    </div>
                    <p className="text-sm text-slate-600">{lead.message}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-end pt-2 border-t border-slate-100">
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
                              ? "bg-brand-blue text-white"
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
            <FiSearch className="text-slate-400 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            No Leads Found
          </h3>
          <p className="text-slate-500">
            {hasActiveFilters
              ? "Try adjusting your filters to see more results."
              : "No leads have been submitted yet."}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LeadsTable;
