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
import StarRating from 'react-native-star-rating';
import MapView from 'react-native-maps';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class Checkout extends React.Component {
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
        <View style={{flex:1,backgroundColor:'#eee',padding:20,alignContent:'center'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
            <Text style={{fontSize:14,fontFamily:customfonts,marginBottom:10,marginTop:20}}>Back</Text>
            <View style={{borderWidth:4,borderColor:'#fff',borderRadius:10}}>
            <MapView style={{width:'100%',height:250}} initialRegion={{latitude: 22.7196,longitude: 75.8577,
            latitudeDelta: 0.0922,longitudeDelta: 0.0421,}}/>
            </View>
            <TouchableOpacity style={{padding:10,backgroundColor:'#03816b',borderRadius:30,alignSelf:'center',marginTop:-30,
             borderWidth:4,borderColor:'#fff'}}>
                <Text style={{fontFamily:customfonts,fontSize:16,color:'#fff',alignSelf:'center'}}>Move & Adjust</Text>
                </TouchableOpacity>
            <Text style={{fontSize:18,fontFamily:customfonts,marginBottom:10,marginTop:10}}>Set Delivery Location</Text>
            <TextInput style={styles.input} placeholder="Location"/>
            <TextInput style={styles.input} placeholder="House/Flat No."/>
            <TextInput style={styles.input} placeholder="Landmark"/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Card style={{borderRadius:20,padding:5,flexDirection:'row'}}>
                    <Image style={{width:20, height:20,margin:4}} source={require(".././assets/work.jpg")} />
                    <Text style={{fontSize:16,fontFamily:customfonts,margin:6}}>Work</Text>
                </Card>
                <Card style={{borderRadius:20,padding:5,flexDirection:'row'}}>
                    <Image style={{width:20, height:20,margin:4}} source={require(".././assets/home.jpg")} />
                    <Text style={{fontSize:16,fontFamily:customfonts,margin:6}}>Home</Text>
                </Card>
                <Card style={{borderRadius:20,padding:5,flexDirection:'row'}}>
                    <Image style={{width:20, height:20,margin:4}} source={require(".././assets/other.jpg")} />
                    <Text style={{fontSize:16,fontFamily:customfonts,margin:6}}>Other</Text>
                </Card>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Payments')} style={{padding:5,alignSelf:'center',borderWidth:4,borderColor:'#03816b',borderRadius:50,
                        width:'50%',marginTop:20,backgroundColor:'#fff'}}>
                <Text style={{fontFamily:customfonts,fontSize:16,color:'#ffc121',alignSelf:'center'}}>Save</Text>
            </TouchableOpacity>
        </View>
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
  input:{width:'100%',fontFamily:customfonts, borderWidth:1, height:40,borderRadius:20,marginBottom:10,
  padding:10,fontSize:18,backgroundColor:'#fff',borderColor:'#E5E7E9'},
  textWithShadow:{
      textShadowColor: '#fff',fontFamily:customfonts,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,fontSize:24,color:'#fff'
  },btn:{width:'45%', padding:10, backgroundColor:'#fff',borderRadius:20},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:customfonts}
});
