import React from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoal, setEnteredGoal] = React.useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
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
        <View style={styles.buttons}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="CANCEL" color="purple" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default GoalInput;
