import React, { useEffect, useState } from "react";
import { MoreVertical, Filter, Users as UsersIcon } from "lucide-react";
import { userService } from "../services/userService";
import type { User } from "../types/user";
import "../styles/pages/users.scss";

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

      <div className="stats-cards">
        <div className="card">
          <div className="icon-wrapper users">
            <UsersIcon size={20} />
          </div>
          <p className="label">USERS</p>
          <p className="value">2,453</p>
        </div>
        <div className="card">
          <div className="icon-wrapper active">
            <UsersIcon size={20} />
          </div>
          <p className="label">ACTIVE USERS</p>
          <p className="value">2,453</p>
        </div>
        <div className="card">
          <div className="icon-wrapper loan">
            <UsersIcon size={20} />
          </div>
          <p className="label">USERS WITH LOANS</p>
          <p className="value">12,453</p>
        </div>
        <div className="card">
          <div className="icon-wrapper savings">
            <UsersIcon size={20} />
          </div>
          <p className="label">USERS WITH SAVINGS</p>
          <p className="value">102,453</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>
                ORGANIZATION <Filter size={14} />
              </th>
              <th>
                USERNAME <Filter size={14} />
              </th>
              <th>
                EMAIL <Filter size={14} />
              </th>
              <th>
                PHONE NUMBER <Filter size={14} />
              </th>
              <th>
                DATE JOINED <Filter size={14} />
              </th>
              <th>
                STATUS <Filter size={14} />
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
                  <td onClick={(e) => e.stopPropagation()}>
                    <MoreVertical size={16} cursor="pointer" />
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
          <select value={itemsPerPage} onChange={() => {}}>
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
