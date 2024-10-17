import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button, TextInput } from 'react-native';

export default function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  // 덧셈
  const add = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
  };

  // 뺄셈
  const subtract = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
  };

  // 곱셈
  const multiply = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
  };

  // 나눗셈
  const divide = () => {
    if (input2 !== '0') {
      setResult(parseFloat(input1) / parseFloat(input2));
    } else {
      setResult('Error'); // 나누기 0일 때 처리
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={input1}
        onChangeText={text => setInput1(text)}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={input2}
        onChangeText={text => setInput2(text)}
      />

      <View style={styles.buttonRow}>
        <Button title="+" onPress={add} />
        <Button title="-" onPress={subtract} />
        <Button title="×" onPress={multiply} />
        <Button title="÷" onPress={divide} />
      </View>

      <Text style={styles.result}>Result: {result}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
});
