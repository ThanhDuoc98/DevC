import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { TODOS } from '../utils/data.js';
import { Ionicons, Entypo, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';


class TodoItem extends React.Component {
    render() {

        statusStyle = {
            textDecorationLine: this.props.todo.status === 'Done' ? 'line-through' : '',
            textDecorationStyle: this.props.todo.status === 'Done' ? 'solid' : ''
        };
        
        return (
            <View style={styles.todoItem}>
                <TouchableOpacity
                    key={this.props.todo.body}
                    onPress={() => this.props.onSingleTodo(this.props.todo.id)}
                >
                    <Text style={[styles.todoText, statusStyle]}>
                        {this.props.todo.body}
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.onToggleTodo(this.props.todo.id)}>
                        <FontAwesome
                            name='toggle-on'
                            size={25}
                            color='green'
                        />
                    </TouchableOpacity>
                    <View style={{ width: 10 }}>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.onLongPress(this.props.todo)}
                    >
                        <MaterialIcons
                            name='delete'
                            size={25}
                            color='gray'>
                        </MaterialIcons>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
};


export default class AllScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: TODOS,
            textInput: '',
        };
    }

    onSingleTodo = id => {
        const todo = this.state.todoList.find(todo => todo.id === id);
        setTimeout(() => {
            this.props.navigation.navigate('SingleTodo', {
                updatedTodo: todo
            });
        }, 100);
    };

    onToggleTodo = id => {
        const todo = this.state.todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = this.state.todoList.findIndex(todo => todo.id === id);
        this.state.todoList[foundIndex] = todo;
        const newTodoList = [...this.state.todoList];
        this.setState({ todoList: newTodoList });
    };

    onDeleteTodo = id => {
        const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
        this.setState({ todoList: newTodoList });
    };

    onLongPress = todo => {
        const prompt = `"${todo.body}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => this.onDeleteTodo(todo.id) }
            ],
            { cancelable: true }
        );
    };

    onSubmitTodo = () => {
        const newTodo = {
            id: this.state.todoList.length + 1,
            status: 'Active',
            body: this.state.textInput,
        };
        const newTodoList = [...this.state.todoList, newTodo];
        this.setState({
            todoList: newTodoList,
            textInput: ''
        })
    };

    render() {
        return (
            <KeyboardAvoidingView
                enabled
                behavior="padding"
                style={styles.container}
            >
                <View style={styles.headerContainer}>
                    <Ionicons
                        name='md-menu'
                        size={30}
                        color='gray'
                    />
                    <Text style={styles.titleHeader}>
                        All TASKS
                    </Text>


                    <Ionicons
                        name='md-information'
                        size={30}
                        color='gray'
                    />
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView>
                        {this.state.todoList.map((todo, idx) => {
                            return <TodoItem
                                key={todo.body}
                                todo={todo} idx={idx}
                                onToggleTodo={this.onToggleTodo}
                                onDeleteTodo={this.onDeleteTodo}
                                onLongPress={this.onLongPress}
                                onSingleTodo={this.onSingleTodo} />;
                        })}
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.todoInput}
                                onChangeText={text => { this.setState({ textInput: text }) }}
                                value={this.state.textInput}
                            />
                            <TouchableOpacity onPress={this.onSubmitTodo}>
                                <Ionicons
                                name='ios-add-circle'
                                size={35}
                                color='blue'/>
                            </TouchableOpacity>

                        </View>
                        <View style={{ height: 100 }}>

                        </View>
                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

AllScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    headerContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#f5f5f0'
    },
    titleHeader: {
        fontSize: 22,
        fontWeight: '400',
        color: '#3399ff'
    },
    contentContainer: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 10
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        margin: 5,
        paddingBottom: 10,
        minHeight: 20,
        color: 'white',
        borderRadius: 0,
        flexWrap: 'wrap',
    },
    todoText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
    },
    todoInput: {
        width: '80%',
        minHeight: 40,
        color: 'black',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 25,
        paddingLeft: 20
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginTop: 50,
        marginLeft: 0,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});