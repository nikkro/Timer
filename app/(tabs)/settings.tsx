import {StyleSheet, TouchableOpacity} from 'react-native';
import ScrollView from '@/components/ScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useTranslation} from "react-i18next";

export default function TabFourScreen() {
  const { t, i18n } = useTranslation();

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle">{t('settings.sample')}</ThemedText>

      <TouchableOpacity
          style={styles.button}
          onPress={() => handleLangChange('pl')}
      >
        <ThemedText>PL</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.button}
          onPress={() => handleLangChange('en')}
      >
        <ThemedText>EN</ThemedText>
      </TouchableOpacity>
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
  button: {
    width: '20%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
