import React from 'react';
import { StyleSheet,StatusBar,AsyncStorage,KeyboardAvoidingView,ScrollView,Button,TextInput,ActivityIndicator,ImageBackground,
  FlatList, Text, View,Image,TouchableOpacity,Alert} from 'react-native';
import { Icon } from 'native-base';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import AnimatedLoader from "react-native-animated-loader";
console.disableYellowBox = true;
import {LinearGradient} from 'react-native-linear-gradient';
import { Ionicons } from 'react-native-vector-icons';

export default class ChangePassword extends React.Component {
 
  constructor(props){
    super(props);
     this.state={oldpass:'',newpass:'',cpass:''
     }
  }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
  }

  async logout(){
    Alert.alert(
        'Confirm Action',
        'Sure you want to Logout?',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Yes', 
            onPress:()=>{
                AsyncStorage.removeItem('LoggedIn');
                this.props.navigation.navigate("Login");
            }
          },
        ],
        {cancelable: false},
      );
  }

  updatePassword(){

  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ImageBackground source={require('.././assets/bg.jpg')} style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle = "light-content"  backgroundColor = "#000"/>
      <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
        animationStyle={{width: 100,height: 100}}speed={1}/>
                <View style={{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                    <Ionicons name="md-arrow-back" color="#fff" size={26} />
                </TouchableOpacity>
                <Text style={{color:'#fff',fontFamily:customfonts,fontSize:20}}>CHANGE PASSWORD</Text>
                <View></View>
                </View>
                <View style={{padding:20}}>
                <Text style={{fontFamily:customfonts,color:'#fff',marginLeft:20}}>Current Password</Text>
                <TextInput secureTextEntry placeholderTextColor="#27FF09" placeholder='******' onChangeText={(oldpass)=>this.setState({oldpass})}  
                            style={styles.input}/>
                <Text style={{fontFamily:customfonts,color:'#fff',marginLeft:20}}>New Password</Text>
                <TextInput secureTextEntry placeholderTextColor="#27FF09" placeholder='******' onChangeText={(newpass)=>this.setState({newpass})}  
                            style={styles.input}/>
                <Text style={{fontFamily:customfonts,color:'#fff',marginLeft:20}}>Confirm Password</Text>
                <TextInput secureTextEntry placeholderTextColor="#27FF09" placeholder='******' onChangeText={(cpass)=>this.setState({cpass})}  
                            style={styles.input} />
                <TouchableOpacity onPress={()=>this.updatePassword()} 
                        style={{paddingVertical:8,alignSelf:'center',paddingHorizontal:40,marginTop:10,
                        borderRadius:20,backgroundColor:'#01cc34'}}>
                    <Text style={{fontFamily:customfonts,color:'#fff'}}>Done</Text>
                </TouchableOpacity>
                </View>
      </ImageBackground>
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
    flex: 1
  },
  input:{width:'100%',fontFamily:customfonts, borderWidth:1, height:40,borderRadius:5,marginBottom:10,color:'#27FF09',
  paddingHorizontal:20,paddingVertical:8,fontSize:14,backgroundColor:'#333',borderColor:'#333'},
  btn:{borderRadius:5, padding:8,backgroundColor:'#336799',width:'48%'},
  btn3:{borderRadius:5, padding:8},
  btn2:{borderRadius:5, padding:8, backgroundColor:'#fff',width:'48%'},
  btnText:{fontSize:18, textAlign:'center', color:'#fff',fontFamily:customfonts},
  btnText2:{fontSize:18, textAlign:'center',fontFamily:customfonts},
  points:{color:'#6C3483',fontSize:20},
  points2:{color:'#F39C12',fontSize:18,marginBottom:5,borderBottomWidth:0.5,borderBottomColor:'grey'},
  points3:{color:'#34495E',fontSize:16,marginBottom:5,fontWeight:'600'},
})
