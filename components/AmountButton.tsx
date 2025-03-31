import {StyleSheet, TextInput, type TextProps, TouchableOpacity, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useEffect, useState} from "react";

export type AmountButtonProps = TextProps & {
  title?: string;
  sendData?: (data: string) => void;
};

export default function AmountButton({
  title,
  sendData,
  ...rest
}: AmountButtonProps) {
  const [count, setCount] = useState<string>("1");

  const handleChange = (text: string) => {
    // Allow only numbers
    const numericValue = text.replace(/[^0-9]/g, "");
    setCount(numericValue);
  };


  const handleBlur = () => {
    if (count === '') {
      setCount("1");
      return;
    }
    const numericValue = parseInt(count);
    setCount(Math.min(100, Math.max(1, numericValue)).toString());
  };

  const handleIncrement = () => {
    const numericValue = parseInt(count);
    if (numericValue < 100) setCount((numericValue + 1).toString());
  };

  const handleDecrement = () => {
    const numericValue = parseInt(count);
    if (numericValue > 1) setCount((numericValue - 1).toString());
  };

  useEffect(() => {
    if(!sendData) return;
      sendData(count);
  }, [count]);


  return (
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleDecrement}>
            <ThemedText style={styles.buttonText}>−</ThemedText>
          </TouchableOpacity>

          <View style={styles.titleInput}>
            <ThemedText type={"subtitle"}>{title}</ThemedText>
            <TextInput
                maxLength={3}
                style={styles.countText}
                value={String(count)}
                onChangeText={handleChange}
                onBlur={handleBlur}
                keyboardType="numeric"
            />
          </View>

          <TouchableOpacity onPress={handleIncrement}>
            <ThemedText style={styles.buttonText}>+</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingContainer: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    // flexDirection: 'column',
    // backgroundColor: 'red'
  },
  titleInput: {
    flexDirection: 'column',
    width: '65%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // backgroundColor: 'rgba(104, 104, 104, 0.6)',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  mainContainer: {
    width: '80%',
    height: 70,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(104, 104, 104, 0.6)",
  },
  countText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    width: '100%',
    paddingVertical: 5,
    // backgroundColor: 'green'
  },
});