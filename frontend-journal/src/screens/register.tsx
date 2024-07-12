import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actionCreators/authAction';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(register(username, password, email, firstName, lastName));
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;
