import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Aufgaben</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 52,
    color: 'rgba(175,47,147,0.25)',
    fontWeight: '100',
  },
});

export default Heading;
