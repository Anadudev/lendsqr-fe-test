import React, { useEffect, useState } from "react";
import { MoreVertical } from "lucide-react";
import { userService } from "../services/userService";
import type { User } from "../types/user";
import "../styles/pages/users.scss";
import Icon from "../components/Icon";
import TableFilter from "../components/TableFilter";
import StatsRow from "../components/StatsRow";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".dropdown-trigger") &&
        !target.closest(".filter-trigger") &&
        !target.closest(".table-filter")
      ) {
        setActiveDropdown(null);
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const { data, total } = await userService.getUsers(
        currentPage,
        itemsPerPage
      );
      setUsers(data);
      setTotal(total);
      setLoading(false);
    };
    fetchUsers();
  }, [currentPage, itemsPerPage]);

  const getStatusClass = (status: string) => {
    return `status-${status.toLowerCase()}`;
  };

  return (
    <div className="users-page">
      <h1 className="page-title">Users</h1>

      <StatsRow />

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th
                className="filter-trigger"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="th-text">ORGANIZATION</span>
                <Icon
                  src="/icons/filter-results-button.svg"
                  alt="filter"
                  size={16}
                  className="icon-component"
                  style={{ marginBottom: "-2px" }}
                />
                {isFilterOpen && (
                  <TableFilter onClose={() => setIsFilterOpen(false)} />
                )}
              </th>
              <th
                className="filter-trigger"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="th-text">USERNAME</span>
                <Icon
                  src="/icons/filter-results-button.svg"
                  alt="filter"
                  size={16}
                  className="icon-component"
                  style={{ marginBottom: "-2px" }}
                />
              </th>
              <th
                className="filter-trigger"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="th-text">EMAIL</span>
                <Icon
                  src="/icons/filter-results-button.svg"
                  alt="filter"
                  size={16}
                  className="icon-component"
                  style={{ marginBottom: "-2px" }}
                />
              </th>
              <th
                className="filter-trigger"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="th-text">PHONE NUMBER</span>
                <Icon
                  src="/icons/filter-results-button.svg"
                  alt="filter"
                  size={16}
                  style={{ marginBottom: "-2px" }}
                />
              </th>
              <th
                className="filter-trigger"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="th-text">DATE JOINED</span>
                <Icon
                  src="/icons/filter-results-button.svg"
                  alt="filter"
                  size={16}
                  style={{ marginBottom: "-2px" }}
                />
              </th>
              <th
                className="filter-trigger"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="th-text">STATUS</span>
                <Icon
                  src="/icons/filter-results-button.svg"
                  alt="filter"
                  size={16}
                  style={{ marginBottom: "-2px" }}
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7}>Loading...</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => (window.location.href = `/users/${user.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    {new Date(user.dateJoined).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td>
                    <span
                      className={`status-badge ${getStatusClass(user.status)}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(
                        activeDropdown === user.id ? null : user.id
                      );
                    }}
                    className="dropdown-trigger"
                    style={{ position: "relative" }}
                  >
                    <MoreVertical size={16} cursor="pointer" />
                    {activeDropdown === user.id && (
                      <div className="actions-dropdown">
                        <div
                          className="dropdown-item"
                          onClick={() =>
                            (window.location.href = `/users/${user.id}`)
                          }
                        >
                          <Icon src="/icons/menu-eye.svg" alt="eye" size={14} />
                          <span>View Details</span>
                        </div>
                        <div className="dropdown-item">
                          <Icon
                            src="/icons/menu-user-x.svg"
                            alt="user-x"
                            size={14}
                          />
                          <span>Blacklist User</span>
                        </div>
                        <div className="dropdown-item">
                          <Icon
                            src="/icons/menu-user-check.svg"
                            alt="user-check"
                            size={14}
                          />
                          <span>Activate User</span>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="showing">
          Showing
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          out of {total}
        </div>
        <div className="pages">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &lt;
          </button>
          {[1, 2, 3, "...", 15, 16].map((p, i) => (
            <button
              key={i}
              className={currentPage === p ? "active" : ""}
              onClick={() => typeof p === "number" && setCurrentPage(p)}
            >
              {p}
            </button>
          ))}
          <button
            disabled={currentPage === Math.ceil(total / itemsPerPage)}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
