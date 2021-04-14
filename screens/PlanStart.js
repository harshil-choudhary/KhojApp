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
          style={{flex:5,backgroundColor:'#fff',marginTop:-100,borderTopRightRadius:30,borderTopLeftRadius:30,padding:20}}>
              <Text style={{fontSize:14,fontFamily:customfonts}}>1 Meal Plan</Text>
              <Text style={{fontSize:20,fontFamily:customfonts}}>Select Start Date</Text>
              <View style={{marginVertical:20,backgroundColor:'#f6f6f6',padding:20,borderRadius:20}}>
              {this.state.dates.map((sitem,i) => {
                return <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}} onPress={()=>this.setState({selected_date:sitem})}>
                    <Text style={{fontFamily:customfonts,fontSize:18}}>{sitem}</Text>
                    <Ionicons name="md-radio-button-on" style={sitem==this.state.selected_date?{
                    color:'#ffc121'}:{color:'grey'}} size={20}/>
                    </TouchableOpacity>
                    })}
              </View>
              <Text style={{fontSize:20,fontFamily:customfonts,textAlign:'center'}}>Plan Ends at 21 Dec, Sat</Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Checkout')}
             style={{padding:10,backgroundColor:'#ffc121',borderRadius:20,marginTop:20}}>
                <Text style={{fontFamily:customfonts,fontSize:18,color:'#fff',alignSelf:'center'}}>Set Starting Date</Text>
              </TouchableOpacity>
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
