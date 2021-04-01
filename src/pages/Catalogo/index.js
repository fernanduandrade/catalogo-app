import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
});

export default function Catalogo() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>
           catalogooo
          </Text>
      </View>
    </>
  );
};
