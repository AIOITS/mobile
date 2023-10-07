import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GET_HISTORY_PENGISIAN_BY_DATE } from '../../api/graphql/queries/SI-Government/getHistoryPengisianbyDate';
import deleteUnderscore from '../../utils/deleteUnderscore';

function useHistoryPengisianByDate() {
  const { loading, error, data } = useQuery(GET_HISTORY_PENGISIAN_BY_DATE);
  const [historyPengisianByDate, setHistoryPengisianByDate] =
    useState<HistoryPengisianByDate>({
      labels: [],
      subsidi: [],
      non_subsidi: [],
    });

  useEffect(() => {
    if (!data) return;

    let labels = [];
    let subsidi = [];
    let non_subsidi = [];

    for (const month in data) {
      labels.push(deleteUnderscore(month));
      const monthData = data[month];
      let subsidiTotal = 0;
      let nonSubsidiTotal = 0;

      for (const item of monthData) {
        if (item.kategori_pengisian === 'subsidi') {
          subsidiTotal += item._sum.jumlah;
        } else if (item.kategori_pengisian === 'non_subsidi') {
          nonSubsidiTotal += item._sum.jumlah;
        }
      }

      subsidi.push(subsidiTotal);
      non_subsidi.push(nonSubsidiTotal);
    }

    setHistoryPengisianByDate({
      labels,
      subsidi,
      non_subsidi,
    });
  }, [data]);

  return { loading, error, historyPengisianByDate };
}

export default useHistoryPengisianByDate;
