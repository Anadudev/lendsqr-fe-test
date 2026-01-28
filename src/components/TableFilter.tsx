import React from "react";
import "../styles/components/table-filter.scss";

interface TableFilterProps {
  onClose: () => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ onClose }) => {
  return (
    <div className="table-filter" onClick={(e) => e.stopPropagation()}>
      <div className="form-group">
        <label>Organization</label>
        <select defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="lendsqr">Lendsqr</option>
          <option value="irorun">Irorun</option>
        </select>
      </div>

      <div className="form-group">
        <label>Username</label>
        <input type="text" placeholder="User" />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>

      <div className="form-group">
        <label>Date</label>
        <div className="date-input-wrapper">
          <input type="date" placeholder="2024-01-01" />
        </div>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="form-group">
        <label>Status</label>
        <select defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className="filter-actions">
        <button className="btn-reset" onClick={onClose}>
          Reset
        </button>
        <button className="btn-filter" onClick={onClose}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default TableFilter;
