import React from "react";

// customized card for displaying job information

function Card({ data }) {
  return (
    <div className="card">
      <div className="chip">⏳ Posted 10 days ago</div>
      <div className="company">
        <div className="logo-div">
          <div className="logo">
            <img src={data.logoUrl} alt="logo" />
          </div>
        </div>
        <div className="info-div">
          <a href={data.jdLink} className="name">
            {data.companyName}
          </a>
          <div className="role">{data.jobRole}</div>
          <div className="location">{data.location}</div>
        </div>
      </div>
      <div className="salary">
        Estimated Salary:{" "}
        {data.maxJdSalary && data.minJdSalary
          ? data.minJdSalary + "K - " + data.maxJdSalary + "K"
          : data.maxJdSalary
          ? data.maxJdSalary + "K"
          : data.minJdSalary + "K "}{" "}
        {data.salaryCurrencyCode} ✅
      </div>
      <div className="job-disc">
        <div style={{ fontSize: "1rem", lineHeight: "1.5", fontWeight: "400" }}>
          About Company:
        </div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>About us</div>
        <div className="jd">{data.jobDetailsFromCompany}</div>
        <div className="more">View Job</div>
      </div>
      <div className="exp">
        <div className="exp-name">Minimum Experience</div>
        {data.minExp ? (
          <div className="role">{data.minExp} years</div>
        ) : (
          <div>-</div>
        )}
      </div>
      <div className="btn-div">
        <button className="apply">⚡ Easy Apply</button>
        <button className="referral">Unlock referral asks</button>
      </div>
    </div>
  );
}

export default Card;
