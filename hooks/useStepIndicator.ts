import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const useStepIndicator = (data: string[] = [], idx: number) => {
  const [routeStatus, setRouteStatus] = useState<number[]>(
    Array(data.length).fill(0),
  );

  for (let i = 0; i <= idx; i++) {
    routeStatus[i] = i === idx ? 1 : 2;
  }

  return { title: data, state: routeStatus };
};

export default useStepIndicator;
