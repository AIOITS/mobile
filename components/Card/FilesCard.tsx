import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from '@rneui/themed';
import * as DocumentPicker from 'expo-document-picker';

interface Props {
  files: DocumentPicker.DocumentPickerResult[];
  setFiles: React.Dispatch<
    React.SetStateAction<DocumentPicker.DocumentPickerResult[]>
  >;
}

const FilesCard = ({ files, setFiles }: Props) => {
  const tw = useTailwind();

  return (
    <View style={[tw('flex flex-col my-2'), { gap: 7 }]}>
      {files.length > 0 &&
        files.map((file, index) => {
          return (
            <View
              key={index}
              style={tw(
                'flex flex-row justify-between rounded-md bg-secondary-white p-3',
              )}>
              <View style={[tw('flex flex-row'), { gap: 10 }]}>
                {file.assets?.[0]?.mimeType?.includes('image') && (
                  <Icon
                    name="file-image"
                    type="font-awesome-5"
                    size={20}
                    color={'#00A0F3'}
                  />
                )}
                {file.assets?.[0]?.mimeType?.includes('pdf') && (
                  <Icon
                    name="file-pdf"
                    type="font-awesome-5"
                    size={20}
                    color={'#00A0F3'}
                  />
                )}
                <Text
                  style={[tw('text-cape-storm'), { width: '80%' }]}
                  ellipsizeMode="tail">
                  {file.assets?.[0]?.name ?? ''}
                </Text>
              </View>
              <Icon
                name="times-circle"
                type="font-awesome-5"
                size={20}
                color={'#00A0F3'}
                onPress={() => {
                  const newFiles = files.filter((_, i) => i !== index);
                  setFiles(newFiles);
                }}
              />
            </View>
          );
        })}
    </View>
  );
};

export default FilesCard;
