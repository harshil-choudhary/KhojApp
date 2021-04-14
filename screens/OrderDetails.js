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

export default class OrderDetails extends React.Component {
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
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontFamily:customfonts,padding:10,backgroundColor:'#fff',
                        textAlign:'center',borderRadius:20}}>Order #12312</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity>
                    <Text style={{fontSize:16,fontFamily:customfonts,padding:10,backgroundColor:'#fff',color:'#ffc121',
                        textAlign:'center',borderRadius:20,borderWidth:2,borderColor:'#03816b'}}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10,marginLeft:5,borderRadius:50,backgroundColor:'#03816b',width:40,
                    alignItems:'center'}}>
                        <Ionicons name="md-close"  color="#ffc121" size={22}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{fontSize:16,fontFamily:customfonts,padding:8,backgroundColor:'#fff',
                        borderRadius:20,marginVertical:10}}>Order #123123123</Text>
            <Card style={{borderRadius:20,marginVertical:20}}>
            <Image style={{width:'100%', height:150,borderRadius:20}} source={require(".././assets/order.jpg")} />
            <Text style={{fontSize:16,fontFamily:customfonts,marginTop:20,textAlign:'center'}}>Today, 7:00 PM - 7:45 PM</Text>
            <Text style={{fontSize:10,fontFamily:customfonts,textAlign:'center',marginBottom:10}}>Delivering to B-34 Western Heights DLF-5</Text>
            </Card>
            <View style={{flexDirection:'row',marginTop:20}}>
            <Image style={{width:30, height:30,borderRadius:5,marginRight:5}} source={require(".././assets/try.png")} />
            <View>
                <Text style={{fontSize:18,fontFamily:customfonts}}>Meal Details</Text>
                <Card style={{borderRadius:20,padding:10}}>
                    <Text style={{fontSize:16,fontFamily:customfonts}}>Prawn Spaghetti in Red Sauce</Text>
                    <Text style={{fontSize:10,fontFamily:customfonts}}>From The Italian Kitchen</Text>
                </Card>
            </View>
            <View>
            </View>
            </View>
            <Card style={{flexDirection:'row',width:sc4,padding:10,borderRadius:20,backgroundColor:'#00816b',marginTop:20}}>
                <View style={{flex:3,justifyContent:'center'}}>
                <Text style={{fontSize:20,fontFamily:customfonts,color:'#fff'}}>Subscribe & get this meal at $6/Meal</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                <Image style={{width:100, height:100,margin:5,borderRadius:100}}
                  source={require(".././assets/dish.jpg")} />
                </View>
            </Card>
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
