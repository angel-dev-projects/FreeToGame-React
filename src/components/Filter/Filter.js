import React, { useState } from "react";

const Filter = ({ onApplyFilter }) => {
  const [sortBy, setSortBy] = useState("release-date");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");

  //List of available sort options
  const sort_options = [
    { value: "release-date", text: "Release Date" },
    { value: "popularity", text: "Popularity" },
    { value: "alphabetical", text: "Alphabetical" },
    { value: "relevance", text: "Relevance" },
  ];

  // List of available categories
  const categories = [
    { value: "mmo", label: "MMO" },
    { value: "mmorpg", label: "MMORPG" },
    { value: "shooter", label: "Shooter" },
    { value: "strategy", label: "Strategy" },
    { value: "moba", label: "MOBA" },
    { value: "battle-royale", label: "Battle Royale" },
    { value: "card", label: "Card" },
    { value: "racing", label: "Racing" },
    { value: "sports", label: "Sports" },
    { value: "social", label: "Social" },
    { value: "fighting", label: "Fighting" },
  ];

  // List of available platforms
  const platforms = [
    { value: "pc", label: "PC" },
    { value: "browser", label: "Browser" },
  ];

  const handleApplyFilter = () => {
    // Construct query parameters based on selected filter options
    const queryParams = new URLSearchParams();
    if (sortBy) queryParams.append("sort-by", sortBy);
    if (category) queryParams.append("category", category);
    if (platform) queryParams.append("platform", platform);

    // Trigger the callback to apply the filter with the query parameters
    onApplyFilter(queryParams.toString());
  };

  return (
    <div>
      <button
        className="btn deep-grey-background mb-3"
        onClick={handleApplyFilter}
      >
        Apply Filter
      </button>
      <div className="deep-grey-background rounded p-3 mb-3">
        <h5 className="border-bottom">Sort by</h5>
        <select
          className="form-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sort_options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>
      <div className="deep-grey-background rounded p-3 mb-3">
        <h5 className="border-bottom">Genre</h5>
        {categories.map((cat) => (
          <div className="form-check" key={cat.value}>
            <input
              type="radio"
              className="form-check-input"
              name="category"
              value={cat.value}
              checked={category === cat.value}
              onChange={() => setCategory(cat.value)}
            />
            <label className="form-check-label">{cat.label}</label>
          </div>
        ))}
      </div>
      <div className="deep-grey-background rounded p-3 mb-3">
        <h5 className="border-bottom">Platform</h5>
        {platforms.map((plat) => (
          <div className="form-check" key={plat.value}>
            <input
              type="radio"
              className="form-check-input"
              name="platform"
              value={plat.value}
              checked={platform === plat.value}
              onChange={() => setPlatform(plat.value)}
            />
            <label className="form-check-label">{plat.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
