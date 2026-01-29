import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { User as Star } from "lucide-react";
import { userService } from "../services/userService";
import type { User } from "../types/user";
import "../styles/pages/userDetails.scss";
import Icon from "../components/Icon";

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;

      // Check local storage first
      const cached = localStorage.getItem(`user_${id}`);
      if (cached) {
        setUser(JSON.parse(cached));
        setLoading(false);
        return;
      }

      setLoading(true);
      const data = await userService.getUserById(id);
      if (data) {
        setUser(data);
        localStorage.setItem(`user_${id}`, JSON.stringify(data));
      }
      setLoading(false);
    };
    fetchUser();
  }, [id]);

  if (loading) return <div>Loading user details...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-details-page">
      <Link to="/users" className="back-link">
        <Icon src="/icons/back-arrow-left.svg" size={16} />
        <span>Back to Users</span>
      </Link>

      <div className="header-actions">
        <h1>User Details</h1>
        <div className="btns">
          <button className="blacklist-btn">BLACKLIST USER</button>
          <button className="activate-btn">ACTIVATE USER</button>
        </div>
      </div>

      <div className="user-summary-card">
        <div className="summary-header">
          <div className="profile-info">
            <div className="avatar">
              <Icon src="/icons/profile-avatar-placeholder.svg" size={40} />
            </div>
            <div className="info">
              <h2>{user.fullName}</h2>
              <p>{user.id}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <Icon
                src={
                  user.userTier >= 1
                    ? "/icons/rating-star-fill.svg"
                    : "/icons/rating-star.svg"
                }
                size={16}
              />
              <Icon
                src={
                  user.userTier >= 2
                    ? "/icons/rating-star-fill.svg"
                    : "/icons/rating-star.svg"
                }
                size={16}
              />
              <Icon
                src={
                  user.userTier >= 3
                    ? "/icons/rating-star-fill.svg"
                    : "/icons/rating-star.svg"
                }
                size={16}
              />
            </div>
          </div>
          <div className="divider"></div>
          <div className="bank-info">
            <h2>{user.accountBalance}</h2>
            <p>
              {user.accountNumber}/{user.bankName}
            </p>
          </div>
        </div>
        <div className="summary-tabs">
          <button className="active">General Details</button>
          <button>Documents</button>
          <button>Bank Details</button>
          <button>Loans</button>
          <button>Savings</button>
          <button>App and System</button>
        </div>
      </div>

      <div className="details-card">
        <section>
          <h3>Personal Information</h3>
          <div className="grid">
            <div className="item">
              <p className="label">FULL NAME</p>
              <p className="val">{user.personalInfo.fullName}</p>
            </div>
            <div className="item">
              <p className="label">PHONE NUMBER</p>
              <p className="val">{user.personalInfo.phoneNumber}</p>
            </div>
            <div className="item">
              <p className="label">EMAIL ADDRESS</p>
              <p className="val">{user.personalInfo.email}</p>
            </div>
            <div className="item">
              <p className="label">BVN</p>
              <p className="val">{user.personalInfo.bvn}</p>
            </div>
            <div className="item">
              <p className="label">GENDER</p>
              <p className="val">{user.personalInfo.gender}</p>
            </div>
            <div className="item">
              <p className="label">MARITAL STATUS</p>
              <p className="val">{user.personalInfo.maritalStatus}</p>
            </div>
            <div className="item">
              <p className="label">CHILDREN</p>
              <p className="val">
                {user.personalInfo.children === "0"
                  ? "None"
                  : user.personalInfo.children}
              </p>
            </div>
            <div className="item">
              <p className="label">RESIDENCE TYPE</p>
              <p className="val">{user.personalInfo.residenceType}</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Education and Employment</h3>
          <div className="grid">
            <div className="item">
              <p className="label">LEVEL OF EDUCATION</p>
              <p className="val">
                {user.educationAndEmployment.levelOfEducation}
              </p>
            </div>
            <div className="item">
              <p className="label">EMPLOYMENT STATUS</p>
              <p className="val">
                {user.educationAndEmployment.employmentStatus}
              </p>
            </div>
            <div className="item">
              <p className="label">SECTOR OF EMPLOYMENT</p>
              <p className="val">
                {user.educationAndEmployment.employmentSector}
              </p>
            </div>
            <div className="item">
              <p className="label">DURATION OF EMPLOYMENT</p>
              <p className="val">
                {user.educationAndEmployment.employmentDuration}
              </p>
            </div>
            <div className="item">
              <p className="label">OFFICE EMAIL</p>
              <p className="val">{user.educationAndEmployment.officeEmail}</p>
            </div>
            <div className="item">
              <p className="label">MONTHLY INCOME</p>
              <p className="val">
                {user.educationAndEmployment.monthlyIncome.join(" - ")}
              </p>
            </div>
            <div className="item">
              <p className="label">LOAN REPAYMENT</p>
              <p className="val">{user.educationAndEmployment.loanRepayment}</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Socials</h3>
          <div className="grid">
            <div className="item">
              <p className="label">TWITTER</p>
              <p className="val">{user.socials.twitter}</p>
            </div>
            <div className="item">
              <p className="label">FACEBOOK</p>
              <p className="val">{user.socials.facebook}</p>
            </div>
            <div className="item">
              <p className="label">INSTAGRAM</p>
              <p className="val">{user.socials.instagram}</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Guarantor</h3>
          {user.guarantors.map((g, idx) => (
            <div key={idx} className="grid">
              <div className="item">
                <p className="label">FULL NAME</p>
                <p className="val">{g.fullName}</p>
              </div>
              <div className="item">
                <p className="label">PHONE NUMBER</p>
                <p className="val">{g.phoneNumber}</p>
              </div>
              <div className="item">
                <p className="label">EMAIL ADDRESS</p>
                <p className="val">{g.email}</p>
              </div>
              <div className="item">
                <p className="label">RELATIONSHIP</p>
                <p className="val">{g.relationship}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default UserDetails;
