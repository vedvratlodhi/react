import React from "react";
import "./sortControl.css";

export default function SortControl({ currentSelection, onSortChange }) {
  // Handle selection change
  const handleSelectionChange = (event) => {
    const newValue = event.target.value;
    onSortChange(newValue); // Call the callback with the new value
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-select" className="sort-label">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={currentSelection}
        onChange={handleSelectionChange}
        className="sort-select"
      >
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}
