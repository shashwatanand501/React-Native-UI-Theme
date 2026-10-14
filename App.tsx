import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Switch } from 'react-native';
import Glassmorphism from './src/Glassmorphism/Glassmorphism';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [isGlassTheme, setIsGlassTheme] = useState(true);

  return (
    <LinearGradient
      colors={isGlassTheme ? ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'] : ['#121212', '#1e1e1e']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>
              {isGlassTheme ? 'Glassmorphism Mode' : 'Dark Mode'}
            </Text>
            <Switch
              value={isGlassTheme}
              onValueChange={(value) => setIsGlassTheme(value)}
              trackColor={{ false: '#555', true: '#81b0ff' }}
              thumbColor={isGlassTheme ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>


          {isGlassTheme ? (
            <Glassmorphism
              isGlassTheme={isGlassTheme}
              setIsGlassTheme={setIsGlassTheme}
            />
          ) : (
            <View style={styles.workInProgressContainer}>
              <Text style={styles.wipText}>Work in progress (Dark Mode)</Text>
            </View>
          )}

        </View>  
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  switchLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  workInProgressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wipText: {
    color: '#ffffff',
    fontSize: 18,
  },
});