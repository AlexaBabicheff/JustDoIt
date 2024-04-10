import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCheckboxValue } from '../actions';
import List from '../components/List';

const SortingFilteringPanel = () => {
    const [filteredData, setFilteredData] = useState([]);
    
    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* <List data={filteredData} /> */}
            
        </div>
    );
}

export default SortingFilteringPanel;