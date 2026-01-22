import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FiSearch,
  FiFilter,
  FiTrash2,
  FiRefreshCw,
  FiCalendar,
} from "react-icons/fi";

const API_URL = "http://localhost:5000/api";

const LeadsTable = ({ token }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    service: "all",
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
    filters.service,
    filters.status,
    filters.startDate,
    filters.endDate,
  ]);

  // Debounced search
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
        { headers: { Authorization: `Bearer ${token}` } },
      );
      fetchLeads();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Leads Management</h2>
        <button
          onClick={fetchLeads}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-600"
        >
          <FiRefreshCw className={loading ? "animate-spin" : ""} /> Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>

        <select
          className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-blue bg-white"
          value={filters.service}
          onChange={(e) => setFilters({ ...filters, service: e.target.value })}
        >
          <option value="all">All Services</option>
          <option value="MBBS Abroad">MBBS Abroad</option>
          <option value="Study Abroad">Study Abroad</option>
          <option value="Ausbildung">Ausbildung</option>
          <option value="Language Coaching">Language Coaching</option>
          <option value="Visa Service">Visa Service</option>
        </select>

        <select
          className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-blue bg-white"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
          <option value="closed">Closed</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="date"
            className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
          <span className="text-slate-400">-</span>
          <input
            type="date"
            className="px-3 py-2 rounded-lg border border-slate-200 text-sm"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-600 text-sm font-semibold border-b border-slate-100">
              <tr>
                <th className="p-4">Date</th>
                <th className="p-4">Name</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Service Interest</th>
                <th className="p-4">Message</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-slate-500">
                    <div className="inline-block w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p>Loading leads...</p>
                  </td>
                </tr>
              ) : leads.length > 0 ? (
                leads.map((lead) => (
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
                      <div className="flex flex-col text-sm">
                        <span className="text-slate-800">{lead.phone}</span>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-blue-500 hover:underline"
                        >
                          {lead.email}
                        </a>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {lead.service}
                      </span>
                    </td>
                    <td
                      className="p-4 text-sm text-slate-600 max-w-xs truncate"
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
                        className={`text-xs font-semibold px-2 py-1 rounded-full border-none focus:ring-2 focus:ring-offset-1 cursor-pointer ${
                          lead.status === "new"
                            ? "bg-green-100 text-green-700"
                            : lead.status === "contacted"
                              ? "bg-yellow-100 text-yellow-700"
                              : lead.status === "converted"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-slate-100 text-slate-700"
                        }`}
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
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-slate-500">
                    No leads found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="p-4 border-t border-slate-100 flex justify-between items-center text-sm">
            <div className="text-slate-500">
              Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
              {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
              of {pagination.total} entries
            </div>
            <div className="flex gap-2">
              <button
                disabled={pagination.page === 1}
                onClick={() =>
                  setPagination({ ...pagination, page: pagination.page - 1 })
                }
                className="px-3 py-1 border rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(pagination.pages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPagination({ ...pagination, page: i + 1 })}
                  className={`px-3 py-1 border rounded ${
                    pagination.page === i + 1
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={pagination.page === pagination.pages}
                onClick={() =>
                  setPagination({ ...pagination, page: pagination.page + 1 })
                }
                className="px-3 py-1 border rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsTable;
