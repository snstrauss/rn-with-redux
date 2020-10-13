import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { selectLibrary } from '../actions';
import { CardSection } from './common';

const S = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingHorizontal: 15
    },
    description: {
        padding: 15
    }
});

class LibraryItem extends Component {

    componentDidUpdate() {

        debugger;

    }

    getSnapshotBeforeUpdate() {

        debugger;

        LayoutAnimation.spring();

        return null;
    }

    selectItem = (selectedId) => {
        this.props.select(selectedId);
    }

    render() {
        const { title, id, description } = this.props.library;

        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.selectItem(id)}>
                <CardSection>
                    <Text style={S.title}>{title}</Text>
                </CardSection>
                {
                    this.props.extended &&
                    <CardSection>
                        <Text style={S.description}>
                            {description}
                        </Text>
                    </CardSection>
                }
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        extended: state.current === props.library.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        select: (selectedId) => {
            dispatch(selectLibrary(selectedId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryItem);