import {StyleSheet} from 'react-native';
import ScrollView from '@/components/ScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useTranslation} from "react-i18next";
import {useState} from "react";
import AmountButton from "@/components/AmountButton";

export default function HomeScreen() {
  const { t } = useTranslation();
  const [reps, setReps] = useState<string>("1");
  const [sets, setSets] = useState<string>("1");

  const handleRepsData = (data: string) => {
    setReps(data);
  };

  const handleSetsData = (data: string) => {
    setSets(data);
  };

  return (
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{t('timer.title')}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.settingContainer}>
          <AmountButton
            sendData={handleSetsData}
            title={t('timer.sets')}/>

          <AmountButton
            sendData={handleRepsData}
            title={t('timer.reps')}/>
        </ThemedView>

        <ThemedText
        type={"title"}>
          Sets: {sets} Reps: {reps}
        </ThemedText>

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
  settingContainer: {
    width:'100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    // flexDirection: 'column',
    // backgroundColor: 'red'
  },
});
