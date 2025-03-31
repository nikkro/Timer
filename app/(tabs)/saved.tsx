import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import ScrollView from '@/components/ScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useTranslation} from "react-i18next";
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StoredData} from "@/types/storage";


export default function TabThreeScreen() {
  const { t } = useTranslation();
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [storedValue, setStoredValue] = useState<StoredData | undefined>(undefined);

  const storeData = async (value : StoredData) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
    } catch (e) {
      // setError(e.toString())
    }
  };

  const getData = async (): Promise<StoredData | undefined> => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      return jsonValue != null ? JSON.parse(jsonValue) : undefined;
    } catch (e) {
    }
  };

  const handleChange = (text: string) => {
    setInput(text)

  }

  const handleSave = async () => {
    const data: StoredData = {
      value: input,
      timestamp: new Date().toISOString(),
    }
    await storeData(data);
    const value = await getData();
    setStoredValue(value);
  }


  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('saved.title')}</ThemedText>
      </ThemedView>

      <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={handleChange}
          placeholder={'Napisz coś'}
      />

      <TouchableOpacity
          style={styles.button}
          onPress={async () => handleSave()}
      >
        <ThemedText>Zapisz</ThemedText>
      </TouchableOpacity>

      <ThemedText type={'subtitle'}>Wartość guzior: {input} </ThemedText>
      <ThemedText type={'subtitle'}>Wartość AsyncStorage: {storedValue?.value} </ThemedText>
      <ThemedText type={'subtitle'}>Timestamp AsyncStorage: {storedValue?.timestamp} </ThemedText>
      <ThemedText type={'subtitle'}>Error: {error} </ThemedText>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 16,
    gap: 8,
  },
  inputText: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    color: '#000000',
    fontSize: 20,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
