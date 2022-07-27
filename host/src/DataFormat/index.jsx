import React, { useEffect, useState } from 'react';

import TableData from 'components/DataTable';
import { useApi } from '../Provider';

const pageSize = [10, 20, 30];

const categories = [
    { name: 'IP Address', align: 'left' },
    { name: 'Device', align: 'left' },
    { name: 'Viewed', align: 'left' },
    { name: 'Page', align: 'right' },
    { name: 'Country', align: 'right' },
];

export const DataFormat = () => {
    const [{ geolocations }, { queryData }] = useApi();
    const row = geolocations.data;

    useEffect(() => {
        queryData(pageSize[0])
    }, [queryData, pageSize[0]]);

    const counts = {};
    row.map(i => i.countrycode).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    return (
        <>
            <TableData useState={useState} pageSize={pageSize} array={{ head: categories, body: row }} />
        </>

    )
}
export default DataFormat;