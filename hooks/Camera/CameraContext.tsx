import React, { createContext, useContext } from 'react';
import useCamera, { UseCameraHook } from './useCamera'; // Adjust the path as needed

interface CameraContextType {
  cameraHook: UseCameraHook;
}

interface CameraProviderProps {
  children: React.ReactNode;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<CameraProviderProps> = ({ children }) => {
  const cameraHook = useCamera();

  return (
    <CameraContext.Provider value={{ cameraHook }}>
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraContext = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCameraContext must be used within a CameraProvider');
  }
  return context;
};
