import React, { useState } from "react";

const attributes = ["Name", "Age", "Country"]; // hardcoded attributes
const operations = ["equals", "contains", "starts with"]; // hardcoded operations

function QueryBuilder() {
  const [queries, setQueries] = useState([]);
  const [currentAttribute, setCurrentAttribute] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const addQuery = () => {
    if (currentAttribute && currentOperation && currentValue) {
      setQueries([
        ...queries,
        {
          attribute: currentAttribute,
          operation: currentOperation,
          value: currentValue,
        },
      ]);
      setCurrentAttribute("");
      setCurrentOperation("");
      setCurrentValue("");
    }
  };

  const removeQuery = (index) => {
    const newQueries = queries.filter((_, i) => i !== index);
    setQueries(newQueries);
  };

  return (
    <div className="query-builder">
      <div
        className="search-bar"
        onClick={() => console.log("Clicked on search bar")}
      >
        {currentAttribute === "" ? (
          <Dropdown
            items={attributes}
            onSelect={(item) => setCurrentAttribute(item)}
            placeholder="Select Attribute"
          />
        ) : currentOperation === "" ? (
          <Dropdown
            items={operations}
            onSelect={(item) => setCurrentOperation(item)}
            placeholder="Select Operation"
          />
        ) : (
          <input
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onBlur={addQuery}
            placeholder="Enter Value"
          />
        )}
      </div>
      <div className="queries">
        {queries.map((query, index) => (
          <div key={index} className="query">
            {query.attribute} {query.operation} {query.value}
            <button onClick={() => removeQuery(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dropdown({ items, onSelect, placeholder }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
      <option value="" disabled>
        {placeholder}
      </option>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default QueryBuilder;
