import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import AnimatedLoader from "react-native-animated-loader";
import { Ionicons } from 'react-native-vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*45/100;
const sc4=width*70/100;

export default class FullSearch extends React.Component {
    constructor(props){
      super(props);
      this.state={selected_cat:'All',vid_cats:['All','Comedy','Family','Reality','Drama','Others'],
      movies:[]
      }
    }

  async pageRefresh(){

    
  }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
    //const { navigation } = this.props;
    //this.focusListener = navigation.addListener('didFocus', () => {
    //  this.pageRefresh();
    //});this.pageRefresh();
    const { navigation } = this.props;
    const searchkey = navigation.getParam('key', '');
    const cast_id = navigation.getParam('cast_id', '');
    if(searchkey!=''){
      this.setState({spinner:true})
      const urlmore='https://khojapp.com/api/fullsearch?data='+searchkey;
        fetch(urlmore).then((response)=>response.json())
        .then((responseJson)=>{
          //console.log(responseJson.contents)
          this.setState({movies:responseJson.contents})
          this.setState({spinner:false})
        }).catch((error)=>{
          console.log(error)
      });
    }
    if(cast_id!=''){
      this.setState({spinner:true})
      const urlmore='https://khojapp.com/api/casts?cast_id='+cast_id;
        fetch(urlmore).then((response)=>response.json())
        .then((responseJson)=>{
          //console.log(responseJson.contents)
          this.setState({movies:responseJson.contents})
          this.setState({spinner:false})
        }).catch((error)=>{
          console.log(error)
      });
    }
  }

  async change_cat(cat){
    this.setState({selected_cat:cat});
    console.log(this.state.selected_cat)
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
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
              <TouchableOpacity style={{marginLeft:10,justifyContent:'center'}}>
              <Image style={{width:28, height:28,borderRadius:50}} source={require(".././assets/user.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems:'center'}}>
          <ScrollView style={{marginTop:10,alignContent:'center'}}>
          <FlatList numColumns={2} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
            data={this.state.movies} renderItem={({item}) => 
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("SeriesDetails",{id:item.movie_id})}>
              <Image style={{width:sc3, height:200,borderRadius:5,marginBottom:10}} 
            resizeMode="contain" source={{uri:'https://khojapp.com/poster/'+item.poster}}/></TouchableOpacity>}>/</FlatList>
          </ScrollView>
          </View>
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
