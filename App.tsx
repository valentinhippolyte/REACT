
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Headline, TextInput } from 'react-native-paper';

export default function App() {
  const [email, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline style={styles.headline}>Space</Headline>
      </View>
      <View style={styles.form}>
        <View style={styles.formInput}> 
          <TextInput
          label="Email"
            value={email}
            onChangeText={email => setText(email)}
            autoComplete={false}
          /></View>
       
        <StatusBar style="auto" />
        <TextInput
          label="password"
          value={password}
          onChangeText={password => setPassword(password)}
          autoComplete={false}
        />
        <View style={styles.formButton}><Button icon="" mode="contained" onPress={() => console.log('Pressed')}>Log in</Button></View>
        
        <StatusBar style="auto" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#7950F2",
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    color: '#ffffff',
  }, 
  form:{
    paddingTop:32,
    paddingHorizontal:24,
  },
  formInput:{
    paddingBottom:16,
  },
  formButton:{
    paddingTop:16,
  }
});