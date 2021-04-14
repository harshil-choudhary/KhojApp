import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Ionicons } from 'react-native-vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';

const width=Math.round(Dimensions.get('window').width);
const height=Math.round(Dimensions.get('window').height);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class Account extends React.Component {
    constructor(props){
      super(props);
      this.state={

      }
    }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ImageBackground source={require('.././assets/bg.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <View style={{flex:1,padding:40}}>
            <Image style={{width:100, height:40}} resizeMode="contain" source={require(".././assets/khoj.png")} />
            </View>
            <View style={{flex:3,padding:40}}>
              <TouchableOpacity 
              style={{flexDirection:'row',marginBottom:10,padding:10,borderRadius:10}}>
                <Ionicons name="md-list" color='#fff' size={20}/>
                <Text style={{fontSize:16,fontFamily:customfonts,marginLeft:5,color:'#fff'}}>Terms & Conditions</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{flexDirection:'row',marginBottom:10,padding:10,borderRadius:10}}>
                <Ionicons name="md-list"   color='#fff'size={20}/>
                <Text style={{fontSize:16,fontFamily:customfonts,marginLeft:5,color:'#fff'}}>About us</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("FAQs")}
                 style={{flexDirection:'row',marginBottom:10,padding:10,borderRadius:10}}>
                <Ionicons name="md-list"  color='#fff' size={20}/>
                <Text style={{fontSize:16,fontFamily:customfonts,marginLeft:5,color:'#fff'}}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Feedback")}
              style={{flexDirection:'row',marginBottom:10,padding:10,borderRadius:10}}>
                <Ionicons name="md-list"  color='#fff' size={20}/>
                <Text style={{fontSize:16,fontFamily:customfonts,marginLeft:5,color:'#fff'}}>Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Privacy")}
              style={{flexDirection:'row',marginBottom:10,padding:10,borderRadius:10}}>
                <Ionicons  name="md-list"  color='#fff' size={20}/>
                <Text style={{fontSize:16,fontFamily:customfonts,marginLeft:5,color:'#fff'}}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>  
      );}else {
      return (
          <View>
              <ActivityIndicator />
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  textWithShadow:{
      textShadowColor: '#fff',fontFamily:customfonts,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,fontSize:24,color:'#fff'
  },btn:{width:'45%', padding:10, backgroundColor:'#fff',borderRadius:20},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:customfonts}
});
