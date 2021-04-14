import React from 'react';
import { StyleSheet,StatusBar,AsyncStorage,KeyboardAvoidingView,ScrollView,Button,TextInput,ActivityIndicator,ImageBackground,
  FlatList, Text, View,Image,TouchableOpacity  } from 'react-native';
import { Icon } from 'native-base';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import AnimatedLoader from "react-native-animated-loader";
console.disableYellowBox = true;
import {LinearGradient} from 'react-native-linear-gradient';

export default class ForgotPassword extends React.Component {
 
  constructor(props){
    super(props);
     this.state={assetsLoaded:false,
       cats:[{'name':'category1'},{'name':'category2'},{'name':'category3'},{'name':'category3'},{'name':'category3'}],
       spinner: false,username:'',password:''
     }
  }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
    const userToken = await AsyncStorage.getItem('LoggedIn');
    if(userToken){
      this.props.navigation.replace('Dashboard');
    }
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <StatusBar barStyle = "light-content"  backgroundColor = "#000"/>
            <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
        animationStyle={{width: 100,height: 100}}speed={1}/>
      <ImageBackground source={require('.././assets/bg.jpg')} style={{width: '100%', height: '100%'}}>
                       <View style={{paddingHorizontal:30, flex:1,justifyContent:'center'}}>
            <Image style={{width:200,height:150,alignSelf:'center'}} source={require(".././assets/logo.png")}/>
            <Text style={{fontSize:24,fontFamily:customfonts,color:'#fff',marginBottom:5}}>Sit Back & Relax !</Text>
            <Text style={{fontSize:16,fontFamily:customfonts,color:'#fff',marginBottom:30}}>It will take less than a minute to reset a password</Text>
            <TextInput placeholderTextColor="#f5f5f5" autoCapitalize = 'none' onChangeText={(username)=>this.setState({username})}  
            style={styles.input} placeholder="Enter Registered Email Id"/>
            
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
            colors={['#c86801', '#7b9c1a', '#3dc630']} style={styles.btn3}
                onPress={()=>this.props.navigation.navigate('Dashboard')}>
                  <Text style={styles.btnText}>Sign in</Text></LinearGradient>
           
            </View>
      </ImageBackground></KeyboardAvoidingView>
    );}else {
      return (
          <View style={styles.container}>
              <ActivityIndicator />
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input:{width:'100%',fontFamily:customfonts, borderWidth:1, height:40,borderRadius:5,marginBottom:10,
  paddingHorizontal:20,paddingVertical:8,fontSize:18,backgroundColor:'#333',borderColor:'#333',color:'#fff'},
  btn:{borderRadius:5, padding:8,backgroundColor:'#336799',width:'48%'},
  btn3:{borderRadius:5, padding:8},
  btn2:{borderRadius:5, padding:8, backgroundColor:'#fff',width:'48%'},
  btnText:{fontSize:18, textAlign:'center', color:'#fff',fontFamily:customfonts},
  btnText2:{fontSize:18, textAlign:'center',fontFamily:customfonts},
  points:{color:'#6C3483',fontSize:20},
  points2:{color:'#F39C12',fontSize:18,marginBottom:5,borderBottomWidth:0.5,borderBottomColor:'grey'},
  points3:{color:'#34495E',fontSize:16,marginBottom:5,fontWeight:'600'},
})
