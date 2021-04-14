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

export default class Login extends React.Component {
 
  constructor(props){
    super(props);
     this.state={assetsLoaded:false,
       cats:[{'name':'category1'},{'name':'category2'},{'name':'category3'},{'name':'category3'},{'name':'category3'}],
       spinner: false,email:'',password:''
     }
  }

  loginSubmit=()=>{
    if(this.state.email=="" || this.state.password==""){
        alert("Please Enter Email & Password.");
       // this.setState({errorMsg:'Please Enter Username & Password'});
      }else{
        this.setState({spinner:true})
        const urlmore='https://khojapp.com/api/login?email='+this.state.email+'&password='+this.state.password;
          fetch(urlmore).then((response)=>response.json())
          .then((responseJson)=>{
            console.log(responseJson)
            this.setState({spinner:false})
            if(responseJson.success==false){
                alert(responseJson.error)
            }else{
              //alert("Hi, "+responseJson.data.user.name+' Login Successful.');
              AsyncStorage.setItem("LoggedIn",'1');
              AsyncStorage.setItem("name",responseJson.data.user.name);
              AsyncStorage.setItem("pass",this.state.password);
              AsyncStorage.setItem("token",responseJson.data.token);
              AsyncStorage.setItem("email",responseJson.data.user.email);
              AsyncStorage.setItem("mobile",responseJson.data.user.mobile);
              AsyncStorage.setItem("userid",responseJson.data.user.id);
              this.props.navigation.navigate("Dashboard");
            }
          }).catch((error)=>{
            console.log(error)
          });
        }
}

  async componentDidMount(){
    AsyncStorage.clear();
    this.setState({ assetsLoaded: true });
    /* const userToken = await AsyncStorage.getItem('LoggedIn');
    if(userToken){
      this.props.navigation.replace('Dashboard');
    } */
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
            <TextInput placeholderTextColor="#f5f5f5" autoCapitalize = 'none' onChangeText={(email)=>this.setState({email})}  
            style={styles.input} placeholder="Email Address"/>
            <View style={{flexDirection:'row'}}>
            <TextInput placeholderTextColor="#f5f5f5" onChangeText={(password)=>this.setState({password})} 
             style={styles.input} placeholder="Password" secureTextEntry/>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ForgotPassword")} style={{marginLeft:-60,marginTop:8}}>
            <Text style={{fontFamily:customfonts,color:'orange'}}>Forgot?</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>this.loginSubmit()}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
            colors={['#c86801', '#7b9c1a', '#3dc630']} style={styles.btn3}>
                  <Text style={styles.btnText}>Sign in</Text></LinearGradient></TouchableOpacity>
           <Text style={{alignSelf:'center',fontFamily:customfonts,color:'#fff',marginTop:20,marginBottom:10}}>Continue with</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Facebook</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                  <Text style={styles.btnText2}>Google</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginTop:100,alignSelf:'center'}}>
              <Text style={{alignSelf:'center',fontFamily:customfonts,color:'#fff'}}>Not registered yet?</Text>
            <Text style={{alignSelf:'center',fontFamily:customfonts,color:'orange',marginLeft:5}} 
            onPress={()=>this.props.navigation.navigate('Register')}>Sign up</Text>
              </View>
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
  input:{width:'100%',fontFamily:customfonts, borderWidth:1, height:40,borderRadius:5,marginBottom:10,color:'#fff',
  paddingHorizontal:20,paddingVertical:8,fontSize:18,backgroundColor:'#333',borderColor:'#333'},
  btn:{borderRadius:5, padding:8,backgroundColor:'#336799',width:'48%'},
  btn3:{borderRadius:5, padding:8},
  btn2:{borderRadius:5, padding:8, backgroundColor:'#fff',width:'48%'},
  btnText:{fontSize:18, textAlign:'center', color:'#fff',fontFamily:customfonts},
  btnText2:{fontSize:18, textAlign:'center',fontFamily:customfonts},
  points:{color:'#6C3483',fontSize:20},
  points2:{color:'#F39C12',fontSize:18,marginBottom:5,borderBottomWidth:0.5,borderBottomColor:'grey'},
  points3:{color:'#34495E',fontSize:16,marginBottom:5,fontWeight:'600'},
})
