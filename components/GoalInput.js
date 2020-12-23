import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function GoalInput({ enteredGoal, goalInputHandler }) {
  return (
    <TextInput
      placeholder="Course Goal"
      style={styles.input}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 15,
  },
});

export default GoalInput;
