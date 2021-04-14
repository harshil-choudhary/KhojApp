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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var filterby=[
    {label:'Popularity', value:'Popularity'},
    {label:'Price Low to High', value:'Price Low to High'},
    {label:'Price High to Low', value:'Price High to Low'}
  ]

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class PlanStart extends React.Component {
    constructor(props){
      super(props);
      this.state={dates:['21 Dec, Sat','22 Dec, Sun','23 Dec, Mon','24 Dec, Tue'],selected_date:'21 Dec, Sat'
    }
}

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <View style={{flex:1,justifyContent:'center'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation="fadeInUpBig" style={{flex:3,backgroundColor:'red'}}>
          <Image style={{width:'100%',height:300}} 
                    source={require(".././assets/product.jpg")} blurRadius={10}/>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" 
          style={{flex:5,flexDirection:'row',backgroundColor:'#fff',marginTop:-100,borderTopRightRadius:30,borderTopLeftRadius:30,
          padding:10}}>
              <View style={{flex:3,padding:20}}>
                  <Text style={{fontSize:40,fontFamily:customfonts,marginBottom:40}}>Filter</Text>
                  <Text style={{fontSize:20,fontFamily:customfonts,marginBottom:20,color:'grey'}}>Sort</Text>
                  
                  <Text style={{fontSize:20,fontFamily:customfonts,marginBottom:10}}>Cuisine</Text>
                  <Text style={{fontSize:20,fontFamily:customfonts}}>Kitchen</Text>
              </View>
              <View style={{flex:4,paddingTop:120,backgroundColor:'#eaeaea',borderRadius:20,paddingHorizontal:10}}>
                <RadioForm style={{marginRight:5}} buttonSize={10} 
                    labelStyle={{fontFamily:customfonts}}
                  radio_props={filterby} buttonColor={'#212F3C'} selectedButtonColor={'#ffc121'}
                  initial={0}// formHorizontal={true}  labelHorizontal={true}
                  onPress={(value)=>{this.setState({filter_by:value})}}/>
              </View>
          </Animatable.View>
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
  textWithShadow:{
      textShadowColor: '#fff',fontFamily:customfonts,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,fontSize:24,color:'#fff'
  },btn:{width:'45%', padding:10, backgroundColor:'#fff',borderRadius:20},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:customfonts}
});
