import React from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal, visible }) {
  const [enteredGoal, setEnteredGoal] = React.useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 15,
  },
});

export default GoalInput;
