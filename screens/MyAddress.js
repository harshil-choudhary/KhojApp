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

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class MyAddress extends React.Component {
    constructor(props){
      super(props);
      this.state={address:[{'type':'Work','add':'B 24, Building Name, Street, City','img':'work.jpg'},
      {'type':'Home','add':'B-34 Western Heights, DLF Phase 5 Gurgaon','img':'home.jpg'},
      {'type':'Other','add':'','img':'other.jpg'}]
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
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
            <View style={{flex:1,padding:40}}>
              <Text style={{fontSize:14,fontFamily:customfonts,color:'#fff',marginBottom:10}}>Back</Text>
              <Text style={{fontSize:16,fontFamily:customfonts}}>Manage</Text>
              <Text style={{fontSize:26,fontFamily:customfonts}}>Addresses</Text>
            </View>
            <View style={{flex:3,padding:20}}>
                <FlatList keyExtractor={(item, index) => index.toString()} 
                data={this.state.address} renderItem={({item}) =>
                <Card style={{borderRadius:20,padding:10,flexDirection:'row'}}>
                <Image style={{width:40, height:40,margin:5}} source={require(".././assets/work.jpg")} />
                <View style={{padding:5}}>
                <Text style={{fontSize:16,fontFamily:customfonts}}>{item.type}</Text>
                <Text style={{fontSize:14,fontFamily:customfonts,color:'grey'}}>{item.add}</Text>
                </View>
                </Card>}/>
            <TouchableOpacity>
            <Image style={{width:40, height:40,margin:5,alignSelf:'center'}} source={require(".././assets/new_add.jpg")} />
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
