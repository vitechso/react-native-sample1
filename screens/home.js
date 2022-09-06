import * as React from 'react';
import {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput  } from 'react-native';
import { Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast';

export default function HomeScreen({navigation}) {
  
  const pageStyle = {
    viewStyle:{
      alignItems: 'center', justifyContent: 'center', backgroundColor: '#E51B2F',width: '100%',height:'100%', padding: 20
    }
  };
  const styles = StyleSheet.create({
    logo_here: {
      height: 69,
      width: 305,
    },
    car_logo: {
      height: 200,
      width: 350,
      zIndex: 99,
      transform: [{translateX:0},{translateY:65}],
    },
    car_logo_width: {
      height: 200,
      width: '100%',
    },
    road_bar: {
      height: 80,
      width: 734,
    },
    road_bar_img: {
      height: 80,
      width: '100%',
    },
    inputMain: {
      width: '85%',
      flexDirection: 'row',
      marginTop: 30
    },
    inputUser: {
      height: 52,
      width: 50,
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 50, 
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 0,
      borderWidth: 1,
      borderColor: '#fff',
    },
    user_login_icons: {
      height: 25,
      width: 22
    },
    input: {
      height: 50,
      margin: 0,
      borderWidth: 1,
      borderColor: '#fff',
      width: '87%',
      backgroundColor: 'transparent',
      borderBottomLeftRadius: 0, 
      borderBottomRightRadius: 50,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 50,
      minHeight: 52,
      paddingHorizontal: 15,
      color: '#fff',
      fontSize: 17,
      marginLeft: -1,
    },
    signinbtn: {
      backgroundColor: '#F8B538',
      minWidth: 150,
      marginTop: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      borderRadius: 50,
    },
    // social_btns: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   flexDirection: 'row',
    // },
    // google_btn: {
    //   backgroundColor: '#fff',
    //   minWidth: 150,
    //   marginTop: 20,
    //   borderRadius: 50, 
    //   height: 45,
    //   marginRight: 8,
    //   marginLeft: 8,
    //   padding: 0,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   lineHeight: 10,
    //   flexDirection: 'row',
    //   flexWrap: 'nowrap',
    // },
    // google_icon: {
    //   width: 21,
    //   height: 21,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // facebook_icon: {
    //   width: 84,
    //   height: 22,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    MainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      flexDirection: 'row',
    },
    FacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: .5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 50,
      margin: 5,
      justifyContent: 'center',
      width: 130,
     
    },
    GooglePlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: .5,
      borderColor: '#fff',
      height: 40,
      width: 130,
      borderRadius: 50,
      margin: 5,
      justifyContent: 'center',
    
   },
     
    ImageIconStyle: {
       padding: 10,
       margin: 5,
       height: 22,
       width: 22,
       resizeMode : 'stretch'
    },
     
    TextStyle :{
      color: "#000",
      marginBottom : 0,
      fontWeight: '600',
      
    },
  })
    const [text, setText] = React.useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleEmailChange = async (e) => {
      console.log(e.target.value)
      
      await setEmailInput(e.target.value);
      console.log(emailInput)
      //console.log("New state DIRECTLY after setState:", emailInput);
  }
  
  const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
      alert(passwordInput)
  }

  const handleLogin = () =>{
   // alert(emailInput+':'+passwordInput)
    let hardcodedCred = {
      email: 'email@email.com',
      password: '123456'
  }

  if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
     navigation.navigate('Dashboard')
  } else {
      //bad combination
     Toast.show('wrong email or password combination', Toast.LONG,Toast.CENTER);
      //alert('wrong email or password combination', Toast.LONG,Toast.CENTER);
  }
  }

    return (
      <React.Fragment>
      <View style={pageStyle.viewStyle}>
        
        <Image style={styles.logo_here} source={require('./../assets/logo-honda.png')} />

        <View style={styles.car_logo}>
          <Image style={styles.car_logo_width} source={require('./../assets/test.png')} />
        </View>

        <View style={styles.road_bar}>
          <Image style={styles.road_bar_img} source={require('./../assets/bar_logins.png')} />
        </View>

        <View style={styles.inputMain}>
        <View style={styles.inputUser}><Image style={styles.user_login_icons} source={require('./../assets/user_login.png')} /></View>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setEmailInput(text)
          }
          value={emailInput}
          placeholder="Login"
          placeholderTextColor = "#fff"
          keyboardType="email-address" 
          
        />
        </View>

        <View style={styles.inputMain}>
           <View style={styles.inputUser}><Image style={styles.user_pass_icons} source={require('./../assets/user_password.png')} /></View>
          <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setPasswordInput(text)}
          value={passwordInput}
          placeholder="Password"
          placeholderTextColor = "#fff"
          keyboardType="default"
        />
        </View>
        
        <Button style={styles.signinbtn} mode="contained" onPress={handleLogin}>SIGN IN</Button>

        

        <View style={styles.MainContainer}>

        <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
        <Image 
          source={require('./../assets/google_icon.png')} 
          style={styles.ImageIconStyle} 
          />
 
 <View style={styles.SeparatorLine} />

 <Text style={styles.TextStyle}> Google </Text>

</TouchableOpacity>
 
      <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
 
      <Image 
  source={require('./../assets/facebook_icon.png')} 
  style={styles.ImageIconStyle} 
  />

 
         <View style={styles.SeparatorLine} />
 
         <Text style={styles.TextStyle}> Facebook </Text>
 
       </TouchableOpacity>
       
      
       
 
     </View>

      </View>
      </React.Fragment>
    );
  }