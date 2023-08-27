import { View, Text, PermissionsAndroid, Alert } from 'react-native';
import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

interface useFilesHook {
  __checkPermissions: () => Promise<boolean>;
  __selectFile: () => Promise<false | undefined>;
  singleFile: DocumentPicker.DocumentPickerResult | null | undefined;
}

const useFiles = (): useFilesHook => {
  const [fileStatus, setFileStatus] = useState<string>('undetermined');
  const [singleFile, setSingleFile] =
    useState<DocumentPicker.DocumentPickerResult | null>();

  const __checkPermissions = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (!result) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'You need to give storage permission to upload the file',
            message: 'App needs access to your storage ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setFileStatus('granted');
          console.log('You can use the camera');
          return true;
        } else {
          Alert.alert('Error to access the camera');
          setFileStatus('denied');

          console.log('Camera permission denied');
          return false;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const __selectFile = async () => {
    try {
      const result = await __checkPermissions();

      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: true,
          type: ['image/*', 'application/pdf'],
          multiple: true,
        });

        if (result) {
          setSingleFile(result);
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  };

  return { __checkPermissions, __selectFile, singleFile };
};

export default useFiles;
