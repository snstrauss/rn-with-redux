import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default function Spinner({ large, color }) {
    return (
        <View style={S.container}>
            <ActivityIndicator size={large ? 'large' : 'small'} color={color && color} />
        </View>
    );
}
