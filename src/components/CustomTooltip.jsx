/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function formatNumber(value, symbol) {
    if (symbol === '$') {
        // Si el símbolo es '$', formatea el número con separadores de miles
        return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    }
    // Si no hay símbolo especial, retorna el valor tal cual
    return value;
}


function CustomTooltip({ payload, label, desc, active }) {
    if (active) {
        const formattedValue = formatNumber(payload[0].value, desc);
        return (
            <div style={{ background: 'white', padding: '10px', border: '1px solid #ccc' }}>
                <p className="label">{`${label}`}</p>
                <p className="desc">{formattedValue} {desc !== '$' ? desc : ''}</p>
            </div>
        );
    }
    return null;
}

export default CustomTooltip;
