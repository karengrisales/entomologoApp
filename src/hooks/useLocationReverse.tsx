import { useEffect, useState } from 'react';
import locationDB from '../api/locationDB';
import { TLocationResponse } from '../types/types';

export const useLocationReverse = (lat: number, lon: number) => {
  const [locationReverseResponse, setlocationReverseResponse] =
    useState<TLocationResponse>({
      results: [],
    });

  const getLocationResponse = async () => {
    const response = await locationDB.get<TLocationResponse>('/reverse', {
      params: { lat, lon },
    });
    setlocationReverseResponse({ results: response.data.results });
  };

  useEffect(() => {
    getLocationResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...locationReverseResponse };
};
