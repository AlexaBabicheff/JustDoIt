import React, { useState } from 'react';

const CategoriesGoodsFilterPanel = ({ applyFilters }) => {
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [showDiscounted, setShowDiscounted] = useState(false);
    const [sortBy, setSortBy] = useState('default');

    const handleApplyFilters = () => {
        applyFilters({ priceFrom, priceTo, showDiscounted, sortBy });
    };

    return (
        <div className="filter-panel">
            <label>Price:</label>
            <input type="number" placeholder="From" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
            <input type="number" placeholder="To" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
            <br />
            <label>
                <input type="checkbox" checked={showDiscounted} onChange={() => setShowDiscounted(!showDiscounted)} />
                Discounted items
            </label>
            <br />
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
            </select>
            <br />
            <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    );
};

export default CategoriesGoodsFilterPanel;