import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 25,
    width: '70%',
  },
});

export default GoalItem;
