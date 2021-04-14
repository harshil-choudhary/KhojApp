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

export default class ProductDetails2 extends React.Component {
    constructor(props){
      super(props);
      this.state={qty:1,del_time:'',selected_day:'',days:[{"day":"Mon","date":"20"},{"day":"Tue","date":"21"},{"day":"Wed","date":"22"},
      {"day":"Thu","date":"23"},{"day":"Fri","date":"24"},{"day":"Sat","date":"25"},{"day":"Sun","date":"26"},{"day":"Mon","date":"27"},
      {"day":"Tue","date":"28"},{"day":"Wed","date":"29"},{"day":"Thu","date":"30"}],
        plans:[1,2,3,4,5],prices:[{"day":1,"price":8},{"day":3,"price":7.5},{"day":7,"price":6.5},{"day":30,"price":6}]}
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
                    <View style={{flexDirection:'row',paddingHorizontal:20,marginTop:10}}>
                    <Ionicons name="md-radio-button-on" color="#00816b" size={30}/>
                    <View style={{marginLeft:5}}>
                    <Text style={{fontSize:18,fontFamily:customfonts}}>Prawn Spaghetti in Red Sauce</Text>
                    </View>
                    </View>
                    <View style={{paddingHorizontal:20,marginVertical:10}}>
                        <Text style={{fontSize:16,fontFamily:customfonts,color:'grey'}}>The Italian Kitchen</Text>
                        <Text style={{fontSize:12,fontFamily:customfonts}}>
                            Give Your Tummy a taste of authentic Italian Flavours with these Italian Meals
                        </Text>
                        <Card style={{borderRadius:10,borderColor:'#31c47f',paddingVertical:10,borderWidth:5,
                        backgroundColor:'#e8fff5',paddingHorizontal:20}}>
                            <Text style={{fontSize:12,fontFamily:customfonts,color:'#46433b'}}>50% off upto $15 on First Order</Text>
                            <Text style={{fontSize:18,fontFamily:customfonts,color:'#46433b'}}>DAILY50</Text>
                        </Card>
                    </View>
          </Animatable.View>
          <Animatable.View animation="fadeInUpBig" style={{flex:3,padding:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                <Text style={{fontSize:18,fontFamily:customfonts,marginBottom:10}}>A Sneak-Peek into the Plan</Text>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
                data={this.state.days}
                renderItem={({item}) => 
                <TouchableOpacity onPress={()=>this.setState({selected_day:item.date})}
                style={item.date==this.state.selected_day?{
                    padding:10,justifyContent:'center',backgroundColor:'#ffc121',borderRadius:20,marginRight:10,minWidth:60,
                }:{padding:10,justifyContent:'center',backgroundColor:'#fff',borderRadius:20,marginRight:10,minWidth:60,}}>
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:14}}>{item.day}</Text>
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:20}}>{item.date}</Text>
                </TouchableOpacity>}/>
            </Animatable.View>
            <View style={{backgroundColor:'#fff',padding:20,borderRadius:20}}>
                <Text style={{fontSize:22,fontFamily:customfonts,marginBottom:10}}>The Italian Kitchen</Text> 
                <Text style={{fontSize:12,fontFamily:customfonts,marginBottom:10}}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
                    visual form of a document or a typeface without relying on meaningful content</Text>
                    <Image style={{width:'100%',height:150,borderRadius:20}} 
                    source={require(".././assets/product.jpg")} />
                <Text style={{fontSize:12,fontFamily:customfonts,marginTop:10}}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
                    visual form of a document or a typeface without relying on meaningful content</Text>
            </View>
            <View style={{padding:20}}>
                <Text style={{fontSize:22,fontFamily:customfonts,marginBottom:10}}>Most Flexible Plan Ever</Text>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
                data={this.state.plans} renderItem={({item}) => 
                <TouchableOpacity style={{padding:10,justifyContent:'center',maxWidth:200,
                backgroundColor:'#fff',borderRadius:20,marginRight:10}}>
                    <View style={{flexDirection:'row'}}>
                    <Image style={{width:50,height:50,borderRadius:10,marginRight:10}} 
                    source={require(".././assets/swap_meal.jpg")} />
                    <Text style={{fontFamily:customfonts,alignSelf:'center',fontSize:18}}>Swap Meal</Text>
                    </View>
                    <Text style={{fontFamily:customfonts,fontSize:12}}>Craving a Change? Swap upcoming Meal
                    any other meal</Text>
                </TouchableOpacity>}/> 
            </View>
            <View style={{padding:20}}>
                <Text style={{fontSize:20,fontFamily:customfonts,marginBottom:10}}>Choose Your Plan</Text>
                <Card style={{borderRadius:10,borderColor:'#31c47f',paddingVertical:10,borderWidth:5,
                                backgroundColor:'#e8fff5',paddingHorizontal:20}}>
                    <Text style={{fontSize:12,fontFamily:customfonts,color:'#46433b'}}>50% off upto $15 on First Order</Text>
                    <Text style={{fontSize:18,fontFamily:customfonts,color:'#46433b'}}>DAILY50</Text>
                </Card>

                <FlatList keyExtractor={(item, index) => index.toString()} 
                data={this.state.prices} renderItem={({item}) => 
                    <Card style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,
                    paddingHorizontal:20,borderRadius:20,paddingVertical:10}}>
                    <View>
                        <Text style={{fontSize:12,fontFamily:customfonts,color:'grey'}}>{item.day} Day</Text>
                        <Text style={{fontSize:16,fontFamily:customfonts}}>${item.price} / meal</Text>
                    </View>
                    <TouchableOpacity style={{padding:10,backgroundColor:"#ffc121",borderRadius:10}}>
                        <Text style={{fontSize:14,fontFamily:customfonts,color:'#fff'}}>Select</Text>
                    </TouchableOpacity>
                    </Card>}/> 
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('PlanStart')} style={{backgroundColor:'#ffc121',borderTopLeftRadius:20,borderTopRightRadius:20,paddingHorizontal:40,paddingVertical:20}}>
                <Text style={{fontFamily:customfonts,fontSize:20,color:'#fff',alignSelf:'center'}}>Choose Your Plan</Text>
            </TouchableOpacity>
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
