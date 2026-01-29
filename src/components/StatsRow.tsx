import Icon from "./Icon";
import "../styles/pages/statsRow.scss";
const StatsRow = () => {
  return (
    <div className="stats-cards">
      <div className="card">
        <div className="icon-wrapper users">
          <Icon src="/icons/users-data-card.svg" size={40} />
        </div>
        <p className="label">TOTAL USERS</p>
        <p className="value">2,453</p>
      </div>
      <div className="card">
        <div className="icon-wrapper active">
          <Icon src="/icons/people-data-card.svg" size={40} />
        </div>
        <p className="label">ACTIVE USERS</p>
        <p className="value">2,453</p>
      </div>
      <div className="card">
        <div className="icon-wrapper loan">
          <Icon src="/icons/loan-data-card.svg" size={40} />
        </div>
        <p className="label">USERS WITH LOANS</p>
        <p className="value">12,453</p>
      </div>
      <div className="card">
        <div className="icon-wrapper savings">
          <Icon src="/icons/savings-data-card.svg" size={40} />
        </div>
        <p className="label">USERS WITH SAVINGS</p>
        <p className="value">102,453</p>
      </div>
    </div>
  );
};

export default StatsRow;
