import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
});

export default function Input({ label, placeholder, value, onChange }) {
    return (
        <View style={S.container}>
            <Text style={S.label}>{label}</Text>
            <TextInput
                style={S.input}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder ? placeholder : label}

            />
        </View>
    );
}