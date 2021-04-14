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
const sc4=width*80/100;

export default class ProductDetails extends React.Component {
    constructor(props){
      super(props);
      this.state={qty:1,del_time:''}
    }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
  }

  async chk_qty(type){
      //alert(type)
      if(type=='add'){
        var newq=this.state.qty+1;
        this.setState({qty:newq});
      }else if(this.state.qty>1){
        var newq=this.state.qty-1;
        this.setState({qty:newq});
      }
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ScrollView style={{backgroundColor:'#eaeaea'}}>
        <StatusBar barStyle = "dark-content"  backgroundColor = "#fff"/>
          <Animatable.View animation="fadeInUpBig" style={{flex:2,backgroundColor:'#fff',borderRadius:20}}>
                    <Image style={{width:'100%',height:200,borderBottomLeftRadius:20,borderBottomRightRadius:20}} 
                    source={require(".././assets/product.jpg")} />
                    <View style={{flexDirection:'row',padding:10}}>
                    <Ionicons name="md-radio-button-on" color="#00816b" size={30}/>
                    <View style={{marginLeft:5}}>
                    <Text style={{fontSize:18,fontFamily:customfonts}}>Prawn Spaghetti in Red Sauce</Text>
                    <Text style={{fontSize:14,fontFamily:customfonts,textAlign:'justify'}}>
                        Authentic Flavourful home made spaghetti in fresh nepolitan sauce, with prawns</Text>
                    </View>
                    </View>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{flex:3,padding:20}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:40, height:40,margin:5,borderRadius:10}} source={require(".././assets/dish.jpg")} />
                    <View style={{padding:5}}>
                    <Text style={{fontSize:16,fontFamily:customfonts}}>The Italian Kitchen</Text>
                    <Text style={{fontSize:12,fontFamily:customfonts,fontStyle:'italic',color:'grey'}}>Authentic Italic Food</Text>
                    </View>
                </View>
                <Card style={{borderRadius:20,flexDirection:'row',justifyContent:'space-between',padding:15}}>
                        <Text style={{fontSize:20,fontFamily:customfonts}}>$8</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity onPress={()=>this.chk_qty('remove')} style={{justifyContent:'center'}}>
                                <Ionicons name="md-remove" color="#00816b" size={20}/>
                            </TouchableOpacity>
                            <Text style={{backgroundColor:'#ffc121',color:'#fff',borderRadius:20,paddingHorizontal:15,paddingVertical:5,
                        marginHorizontal:5,fontSize:18}}>{this.state.qty}</Text>
                            <TouchableOpacity onPress={()=>this.chk_qty('add')} style={{justifyContent:'center'}}>
                                <Ionicons name="md-add" color="#00816b" size={20}/>
                            </TouchableOpacity>
                        </View>
                </Card>
                <Card style={{borderRadius:20,padding:15}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,fontFamily:customfonts}}>Add Extra</Text>
                    <TouchableOpacity>
                        <Ionicons name="md-add" color="grey" size={26}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:12,fontFamily:customfonts}}>Permesson, Cheese, Prawns etc</Text>
                </Card>
                <Card style={{flexDirection:'row',width:sc3,padding:20,borderRadius:20,backgroundColor:'#00816b'}}>
                    <View style={{flex:3,justifyContent:'center'}}>
                    <Text style={{fontSize:20,fontFamily:customfonts,color:'#fff'}}>Subscribe & get this meal at $6/Meal</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center'}}>
                    <Image style={{width:100, height:100,margin:5,borderRadius:100}}
                      source={require(".././assets/dish.jpg")} />
                    </View>
                </Card>
                <Card style={{borderRadius:20,padding:15}}>
                    <Text style={{fontSize:16,fontFamily:customfonts,marginBottom:10}}>Select a Time Slot</Text>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.setState({del_time:1})}
                style={this.state.del_time==1?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:12}}>12:00 PM-12:45 PM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({del_time:2})}
                style={this.state.del_time==2?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:12}}>12:45 PM-01:00 PM</Text></TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <TouchableOpacity onPress={()=>this.setState({del_time:3})}
                style={this.state.del_time==3?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:12}}>12:00 PM-12:45 PM</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({del_time:4})}
                style={this.state.del_time==4?{flex:1,padding:5,borderWidth:2,borderColor:'#ffc121',borderRadius:50,margin:4,
                        }:{flex:1,padding:8,borderWidth:1,borderColor:'grey',borderRadius:50,margin:4}}>
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:12}}>12:45 PM-01:00 PM</Text></TouchableOpacity>
                    </View>
                </Card>
                <Card style={{borderRadius:20,padding:15,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,fontFamily:customfonts,marginTop:10}}>Apply Coupon</Text>
                    <TextInput style={{fontFamily:customfonts,backgroundColor:'#eaeaea',padding:5,textTransform: 'capitalize',
                    width:'60%', height:38,borderRadius:20,textAlign:'center'}}/>
                </Card>
            </Animatable.View>
            <View style={{backgroundColor:'#fff',borderTopLeftRadius:20,borderTopRightRadius:20,paddingHorizontal:40,paddingVertical:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20,fontFamily:customfonts}}>Item Total</Text>
                        <Text style={{fontSize:14,fontFamily:customfonts,color:'#00816b'}}>Delivery Fee</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{fontSize:20,fontFamily:customfonts}}>$8</Text>
                        <Text style={{fontSize:14,fontFamily:customfonts,color:'#00816b'}}>Free</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlanStart')}
             style={{padding:10,backgroundColor:'#ffc121',borderRadius:20,width:'100%',marginTop:10}}>
                <Text style={{fontFamily:customfonts,fontSize:18,color:'#fff',alignSelf:'center'}}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
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
