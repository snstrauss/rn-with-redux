import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Card, CardSection, Header, Input, Spinner } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';


const appPurple = '#B10DC9';

const S = StyleSheet.create({
    appContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    listContainer: {
        height: '100%'
    }
});

const store = createStore(reducers);

export default class App extends Component {

    state = {
        text: ''
    };

    changeText = (newText) => {
        this.setState({
            text: newText
        });
    }

    render() {
        return (
            <View style={S.appContainer}>
                <SafeAreaView>
                    <StatusBar barStyle="light-content" />
                    <Provider store={store}>
                        <View style={S.listContainer}>
                            <Header bgColor="white" color={appPurple}>
                                techStax
                            </Header>
                            <LibraryList />
                        </View>
                    </Provider>
                </SafeAreaView>
            </View>
        );
    }
}
