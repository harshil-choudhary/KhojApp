import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import { Ionicons } from 'react-native-vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class Payments extends React.Component {
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
        <ImageBackground source={require('.././assets/usermenu.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <View style={{flex:1,padding:40}}>
              <Text style={{fontSize:26,fontFamily:customfonts}}>Payments</Text>
            </View>
            <View style={{flex:3,paddingHorizontal:40}}>
              <Text style={{fontSize:20,fontFamily:customfonts,marginBottom:10}}>Cards</Text> 
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                    <Image style={{width:130, height:80,borderRadius:10}} source={require(".././assets/card1.jpg")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                    <Image style={{width:130, height:80,borderRadius:10}} source={require(".././assets/card2.jpg")} />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                  <Image style={{width:130, height:80,borderRadius:10}} source={require(".././assets/newcard.jpg")} />
                </TouchableOpacity>
              </View>
              <Text style={{fontSize:20,fontFamily:customfonts,marginBottom:10,marginTop:20}}>Wallets</Text> 
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                <Image style={{width:80, height:80,borderRadius:10}} source={require(".././assets/paytm.jpg")} /></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                <Image style={{width:80, height:80,borderRadius:10}} source={require(".././assets/paypal.jpg")} /></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                <Image style={{width:80, height:80,borderRadius:10}} source={require(".././assets/gpay.jpg")} /></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderDetails')}>
                <Image style={{width:80, height:80,borderRadius:10}} source={require(".././assets/newq.jpg")} /></TouchableOpacity>
              </View>
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
