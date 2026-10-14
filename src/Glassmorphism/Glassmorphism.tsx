import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

interface GlassmorphismProps {
    isGlassTheme: boolean;
    setIsGlassTheme: (value: boolean) => void;
}

export default function Glassmorphism({ isGlassTheme, setIsGlassTheme }: GlassmorphismProps) {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [isGlass, setIsGlass] = useState(true);

    // Wrapper Component to conditionally render BlurView or a regular View
    const CardWrapper = isGlass ? BlurView : View;

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>UI Theme Showcase</Text>
            </View>

            {/* Toggle Switch */}
            <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>
                    {isGlass ? 'Glassmorphism Mode' : 'Solid Dark Mode'}
                </Text>
                <Switch
                    value={isGlass}
                    onValueChange={(value) => setIsGlass(value)}
                    trackColor={{ false: '#555', true: '#81b0ff' }}
                    thumbColor={isGlass ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>

            {/* Single Content Block (No Duplicated Component Code) */}
            <View style={styles.contentContainer}>
                <CardWrapper
                    {...(isGlass ? { intensity: 80, tint: 'dark' } : {})}
                    style={[
                        styles.cardBase,
                        isGlass ? styles.glassCard : styles.darkCard
                    ]}
                >
                    <Text style={styles.cardTitle}>
                        {isGlass ? 'Glassmorphism UI' : 'Dark Mode UI'}
                    </Text>
                    <Text style={styles.cardText}>
                        {isGlass
                            ? 'Frosted glass effect layered over dynamic gradients.'
                            : 'Solid high-contrast dark surfaces for low-light conditions.'}
                    </Text>

                    {/* Input 1 */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Your Name</Text>
                        <TextInput
                            style={[styles.inputBase, isGlass ? styles.glassInput : styles.darkInput]}
                            placeholder="Enter Your Full Name"
                            placeholderTextColor={isGlass ? 'rgba(255,255,255,0.4)' : '#777777'}
                            value={nameInput}
                            onChangeText={setNameInput}
                        />
                    </View>

                    {/* Input 2 */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Email Address</Text>
                        <TextInput
                            style={[styles.inputBase, isGlass ? styles.glassInput : styles.darkInput]}
                            placeholder="Enter Your Email"
                            placeholderTextColor={isGlass ? 'rgba(255,255,255,0.4)' : '#777777'}
                            value={emailInput}
                            onChangeText={setEmailInput}
                        />
                    </View>

                    {/* Button */}
                    <TouchableOpacity
                        style={[styles.buttonBase, isGlass ? styles.glassButton : styles.darkButton]}
                        onPress={() => alert(`Hello, ${nameInput || 'Designer'}!`)}
                    >
                        <Text style={styles.buttonText}>Explore UI</Text>
                    </TouchableOpacity>
                </CardWrapper>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
        margin:10
    },
    header: {
        marginTop: 24,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    /* Base Shared Card Styles */
    cardBase: {
        width: '100%',
        borderRadius: 24,
        padding: 24,
        overflow: 'hidden',
    },
    glassCard: {
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    darkCard: {
        backgroundColor: '#1e1e1e',
        borderWidth: 1,
        borderColor: '#333333',
    },

    cardTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: 22,
        marginBottom: 16,
    },
    inputGroup: {
        marginBottom: 16,
    },
    inputLabel: {
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 6,
        marginLeft: 4,
    },

    /* Inputs */
    inputBase: {
        width: '100%',
        height: 50,
        borderRadius: 14,
        paddingHorizontal: 16,
        color: '#ffffff',
        fontSize: 15,
    },
    glassInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.18)',
    },
    darkInput: {
        backgroundColor: '#121212',
        borderWidth: 1,
        borderColor: '#333333',
    },

    /* Buttons */
    buttonBase: {
        width: '100%',
        height: 52,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    glassButton: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    darkButton: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.4)',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
});