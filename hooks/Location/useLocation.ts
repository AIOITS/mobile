import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { useState, useEffect } from 'react';

const LOCATION_TASK_NAME = 'background-location-task';

export interface UseLocationHook {
  __locationPermissions: () => Promise<void>;
  __getLocation: () => void;
  locationName: string;
  loading: boolean;
}

const useLocation = (): UseLocationHook => {
  const [locationStatus, setLocationStatus] = useState<string>('undetermined');
  const [currentLocation, setCurrentLocation] =
    useState<Location.LocationObject | null>(null);
  const [locationName, setLocationName] = useState<string>('Location');
  const [loading, setLoading] = useState<boolean>(false);

  const __locationPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      setLocationStatus('granted');
      await Location.requestBackgroundPermissionsAsync();
    } else {
      setLocationStatus('denied');
    }
  };

  const __getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLoading(true);

      if (status !== 'granted') {
        console.error('Location permission not granted.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);

      const [address] = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      //   console.log(address);

      const formattedAddress = `${address.district}, ${address.city}, ${address.subregion}, ${address.region}, ${address.country}`;
      setLocationName(formattedAddress);
      setLoading(false);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  return {
    __locationPermissions,
    __getLocation,
    locationName,
    loading,
  };
};

export default useLocation;
