/* eslint-disable react/prop-types */
import React from 'react';
// importing components
import EquipmentItem from './EquipmentItem';
// importing data
import EQUIPMENT_DATA from '../../data/equipment';

const EquipmentList = () => (
    <div className="equipment">
        <div className="equipment__container">
        {
            EQUIPMENT_DATA.length > 0 && EQUIPMENT_DATA.map((eq) => (
                <EquipmentItem key={eq.id} {...eq} />
            ))
        }
        </div>
    </div>
);

export default EquipmentList;
