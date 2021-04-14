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

export default class MyOrders extends React.Component {
    constructor(props){
      super(props);
      this.state={orders:[{'color':'#058169','odate':'17 Jan','otime':'07:35 PM','title':'Prawn Spaghetti in Red Sauce','subtitle':'The Italian Kitchen',
            'price':8.24,'rating':3,'status':'Delivered','rated':'Rated'},{'color':'#f17677','odate':'15 Jan','otime':'07:35 PM','title':'Prawn Spaghetti in Red Sauce','subtitle':'The Italian Kitchen',
            'price':8.24,'rating':1,'status':'Cancelled','rated':'UnRated'}]
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
              <Text style={{fontSize:14,fontFamily:customfonts,color:'#fff'}}>Back</Text>
              <Text style={{fontSize:26,fontFamily:customfonts}}>My Orders</Text>
            </View>
            <View style={{flex:3,padding:20}}>
                <FlatList keyExtractor={(item, index) => index.toString()} 
                data={this.state.orders} renderItem={({item}) =>
                    <View style={{marginBottom:10}}>
                    <Text style={{fontSize:12,fontFamily:customfonts,marginBottom:5}}>{item.odate} {item.otime}</Text> 
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:6}} onPress={()=>this.props.navigation.navigate("OrderDetails")}>
                        <Card style={{borderRadius:20,padding:10}}>
                        <Text style={{fontSize:16,fontFamily:customfonts,marginBottom:5}}>{item.title}</Text> 
                        <Text style={{fontSize:12,fontFamily:customfonts,marginBottom:5}}>From {item.subtitle}</Text> 
                        <Text style={{fontSize:16,fontFamily:customfonts,marginBottom:5}}>$ {item.price}</Text> 
                        </Card>
                        </TouchableOpacity>
                        <View style={{flex:3,marginLeft:5,marginTop:5}}>
                            <Text style={{backgroundColor:item.color,padding:10,color:'#fff',borderRadius:20,
                                textAlign:'center',fontSize:14,fontFamily:customfonts}}>{item.status}</Text>
                            <View style={{backgroundColor:'#f1f1f1',padding:10,marginTop:4,borderRadius:20, justifyContent:'center'}}>
                                <Text style={{fontFamily:customfonts,color:'grey',textAlign:'center',fontSize:14,marginBottom:4}}>{item.rated}</Text>
                                <StarRating fullStarColor="#ffc121" emptyStarColor="grey" starSize={15}
                                 disabled={false} maxStars={5} rating={item.rating}/>
                            </View>
                        </View>
                    </View>
                    </View>}/>
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
