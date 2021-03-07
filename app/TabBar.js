import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => (
  <View style={styles.container}>
    <TabBarItem type={type} title="Alle" setType={() => setType('Alle')} />
    <TabBarItem
      type={type}
      border
      title="Aktiv"
      setType={() => setType('Aktiv')}
    />
    <TabBarItem
      type={type}
      border
      title="Komplett"
      setType={() => setType('Komplett')}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});
export default TabBar;
