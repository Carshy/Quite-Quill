import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actionCreators/authAction';
import { RootState } from '../redux/configStore';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      {auth.isAuthenticated ? (
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      ) : null}
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
