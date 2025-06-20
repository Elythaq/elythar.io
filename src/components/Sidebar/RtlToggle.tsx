import React from "react";
import "@/styles/RtlToggle.css";

const RtlToggle = ({ checked, onChange }) => (
  <div className="toggle-container">
    <div className="toggle-wrap">
      <input
        className="toggle-input"
        id="holo-toggle"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="toggle-track" htmlFor="holo-toggle">
        <div className="track-lines">
          <div className="track-line" />
        </div>
        <div className="toggle-thumb">
          <div className="thumb-core" />
          <div className="thumb-inner" />
          <div className="thumb-scan" />
          <div className="thumb-particles">
            <div className="thumb-particle" />
            <div className="thumb-particle" />
            <div className="thumb-particle" />
            <div className="thumb-particle" />
            <div className="thumb-particle" />
          </div>
        </div>
        <div className="toggle-data">
          <div className="data-text off">Left</div>
          <div className="data-text on">Right</div>
          <div className="status-indicator off" />
          <div className="status-indicator on" />
        </div>
        <div className="energy-rings">
          <div className="energy-ring" />
          <div className="energy-ring" />
          <div className="energy-ring" />
        </div>
        <div className="interface-lines">
          <div className="interface-line" />
          <div className="interface-line" />
          <div className="interface-line" />
          <div className="interface-line" />
          <div className="interface-line" />
          <div className="interface-line" />
        </div>
        <div className="toggle-reflection" />
        <div className="holo-glow" />
      </label>
    </div>
  </div>
);

export default RtlToggle;
