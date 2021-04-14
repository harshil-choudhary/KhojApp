import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SliderBox } from "react-native-image-slider-box";
import Swiper from 'react-native-swiper';
import AnimatedLoader from "react-native-animated-loader";
import { Ionicons } from 'react-native-vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import NetInfo from "@react-native-community/netinfo";


const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*33/100;
const sc4=width*70/100;


export default class Dashboard extends React.Component {
    constructor(props){
      super(props);
      this.state={selected_cat:'Home',vid_cats:['Home','Trending','Upcoming','New Release','Viral Videos','Free'],spinner:false,
      movies:[],page:1,banners:[], assetsLoaded:'true', internet:false,
      }
    }
  
    handleConnectivityChange = state => {
      if (state.isConnected) {
        //Alert.alert('Network Connectivity','You are Online');
        this.setState({internet: 'Online'});
      } else {
        Alert.alert('Network Connectivity','You are Offline');
        this.setState({internet: 'Offline'});
      }
    };


  async pageRefresh(){
    var temail=await AsyncStorage.getItem('email');
    var tpass=await AsyncStorage.getItem('pass');
    //console.log(temail+'----'+tpass)
    const urlmore='https://khojapp.com/api/login?email='+temail+'&password='+tpass;
      fetch(urlmore).then((response)=>response.json())
      .then((responseJson)=>{
        //console.log(responseJson)
        this.setState({spinner:false})
        if(responseJson.success==false){
            //alert("Please Login");
            //this.props.navigation.navigate("Login");
        }else{
          //alert("Hi, "+responseJson.data.user.name+' Login Successful.');
          AsyncStorage.setItem("LoggedIn",'1');
          AsyncStorage.setItem("name",responseJson.data.user.name);
          AsyncStorage.setItem("token",responseJson.data.token);
          AsyncStorage.setItem("email",responseJson.data.user.email);
          AsyncStorage.setItem("mobile",responseJson.data.user.mobile);
          AsyncStorage.setItem("userid",responseJson.data.user.id);
        }
      }).catch((error)=>{
        console.log(error)
        // this.setState({spinner:false})
    });
    this.setState({spinner:true});
    var filters=await AsyncStorage.getItem('filters');
    const url='https://khojapp.com/api/latest?'+filters;
    console.log(url)
    fetch(url).then((response)=>response.json())
    .then((responseJson)=>{
      //console.log(responseJson.contents.data)
      this.setState({movies:responseJson.contents.data,spinner:false})
    }).catch((error)=>{
      console.log(error)
      this.setState({spinner:false})
    });
    const urlban='https://khojapp.com/api/banners';
    fetch(urlban).then((response)=>response.json())
    .then((responseJson)=>{
      for(var b=0;b<responseJson.banners.length;b++){
        this.state.banners.push('https://khojapp.com'+responseJson.banners[b].poster)
      }
      console.log(this.state.banners)
    }).catch((error)=>{
      console.log(error)
      // this.setState({spinner:false})
    });
  }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
    NetInfo.addEventListener(this.handleConnectivityChange);
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.pageRefresh();
    });this.pageRefresh();
  }

  async loadmore(){
    var p=this.state.page;
    var newp=p+1;
    console.log(newp)
    this.setState({page:newp})
    this.setState({spinner:true});
    const urlmore='https://khojapp.com/api/latest?page='+newp;
    fetch(urlmore).then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson.contents.data)
      this.setState({movies:[...this.state.movies,...responseJson.contents.data],spinner:false})
    }).catch((error)=>{
      console.log(error)
      
    });
  }

  async change_cat(cat){
    this.setState({selected_cat:cat});
    console.log(this.state.selected_cat);
    var type='latest';
    switch(cat){
      case 'Trending':
      type='trending';break;
      case 'Upcoming':
      type='upcoming';break;
      case 'New Release':
      type='newest';break;
      case 'Viral Videos':
      type='viral';break;
      case 'Free':
      type='free_videos';break;
    }
    this.setState({spinner:true});
    const urlcat='https://khojapp.com/api/'+type;
    fetch(urlcat).then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson.contents.data)
      this.setState({movies:responseJson.contents.data,spinner:false})
    }).catch((error)=>{
      console.log(error)
      this.setState({spinner:false})
    });
  }

  async checklogin(){
    var login=await AsyncStorage.getItem('LoggedIn');
    if(login==null){
      this.props.navigation.navigate("Login"); 
    }else{
      this.props.navigation.navigate("Profile");
    }
  }

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };



  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded) {
      return (
        <View style={{flex:1,backgroundColor:'#1e1e1e'}}>
          <StatusBar barStyle = "light-content"  backgroundColor = "#000"/>
          <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
        animationStyle={{width: 100,height: 100}}speed={1}/>
          <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
            <Image style={{width:100, height:40}} resizeMode="contain" source={require(".././assets/khoj.png")} />
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{justifyContent:'center'}}>
              <Ionicons  name="md-notifications" color="#fff" size={28}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.checklogin()} style={{marginLeft:10,justifyContent:'center'}}>
              <Image style={{width:28, height:28,borderRadius:50}} source={require(".././assets/user.png")} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account')} style={{marginRight:5,marginLeft:10,justifyContent:'center'}}>
              <Ionicons  name="md-menu" color="#fff" size={28}/>
              </TouchableOpacity>
            </View>
          </View>
          
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:'#000'}}> 
            {this.state.vid_cats.map((item,i) => {
                return <TouchableOpacity onPress={()=>this.change_cat(item)} 
              style={item==this.state.selected_cat?{
              borderBottomColor:'#01c72c',borderBottomWidth:2,paddingBottom:10}:{}}>
                <Text style={{color:'#fff',fontFamily:customfonts,fontSize:16,padding:10}}>{item}</Text>
              </TouchableOpacity>})}
          </ScrollView>
          <SliderBox sliderBoxHeight={120} images={this.state.banners} />
          {/* <Swiper showsButtons={true}>
          {this.state.banners.map((item, key) => {
            <Image style={{height:350,width:width}} source={require('.././assets/card1.jpg')}/>})}
          </Swiper> */}
          <ScrollView onScroll={({ nativeEvent }) => {if (this.isCloseToBottom(nativeEvent)) {this.loadmore()}}} 
                      style={{marginTop:10,alignContent:'center'}}>
                        <View style={{alignItems:'center'}}>
          <FlatList //onEndReached={()=>this.loadmore()}
          numColumns={3} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
            data={this.state.movies} renderItem={({item}) => 
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("SeriesDetails",{id:item.content_id})}>
              <Image style={{width:sc3, height:160,borderRadius:5,marginBottom:10}} 
              resizeMode="contain" source={{uri:'https://khojapp.com/poster/'+item.poster}}/>
            </TouchableOpacity>}/>
            {/* <TouchableOpacity style={{alignSelf:'center',padding:5}} onPress={()=>this.loadmore()}>
              <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14}}>LOAD MORE</Text>
            </TouchableOpacity> */}
          </View>
          </ScrollView>
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
