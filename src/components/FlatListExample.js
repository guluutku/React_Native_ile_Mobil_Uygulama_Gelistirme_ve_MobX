/* eslint-disable no-shadow */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import data from '../../data';

class FlatListExample extends Component {

    state = {
        text: '',
        contacts: [],
        loading: true,
    };

    componentDidMount() {
        this.getContacts();
    }

    getContacts = async () => {
        this.setState({
            loading: true,
        });
        const { data: { results: contacts } } = await axios.get('https://randomuser.me/api/?results=30');

        this.setState({
            contacts,
            loading: false,
        });
    };

    renderContactsItem = ({ item, index }) => {
        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#fafafa' : '' }]}>
                <Image
                    style={styles.avatar}
                    source={{ uri: item.picture.thumbnail }}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                    <Text>{item.location.state}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    searchFilter = text => {
        const newData = data.filter(item => {
            const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()} `;

            return listItem.indexOf(text.toLowerCase()) > -1;
        });
        this.setState({
            contacts: newData,
        });
    };

    renderHeader = () => {
        const { text } = this.state;

        return (
            <View style={styles.searchContainer}>
                <TextInput
                    value={text}
                    onChangeText={text => {
                        this.setState({ text });

                        this.searchFilter(text);
                    }}
                    style={styles.searchInput}
                    placeholder="Search....."
                />
            </View>
        );
    };

    renderFooter = () => {
        if (!this.state.loading) {
            return;
        }
        return (
            <View>
                <ActivityIndicator
                    size="large"
                />
            </View>
        );
    };

    render() {
        return (
            <FlatList
                ListFooterComponent={this.renderFooter()}
                ListHeaderComponent={this.renderHeader()}
                renderItem={this.renderContactsItem}
                keyExtractor={item => item.login.uuid}
                data={this.state.contacts}
            />

        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    },
    textContainer: {
        justifyContent: 'space-around',
    },
    name: {
        fontSize: 16,
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
});

export default FlatListExample;
