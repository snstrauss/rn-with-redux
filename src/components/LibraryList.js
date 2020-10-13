import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './LibraryItem';

const S = StyleSheet.create({

});

class LibraryList extends Component {

    render() {

        console.log(this.props.list);

        return (
            <FlatList
                data={this.props.list}
                keyExtractor={(lib) => lib.id.toString()}
                renderItem={({ item }) => (
                    <ListItem library={item} />
                )}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList);