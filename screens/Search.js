import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import { Ionicons } from 'react-native-vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title, } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*33/100;
const sc4=width*70/100;

export default class SeriesDetails extends React.Component {
    constructor(props){
      super(props);
      this.state={
        movies:[],people:[],sword:'',
        search_type:'Movies and TV Shows'
      }
    }
  
    searchContacts = value => {
      if(value!=""){
      const filteredContacts = this.state.movies.filter(contact => {
        let contactLowercase = (
          contact.title 
        ).toLowerCase();
        let searchTermLowercase = value.toLowerCase();
        return contactLowercase.indexOf(searchTermLowercase) > -1;
      });
      this.setState({ movies: filteredContacts });
      }else{
          this.setState({movies:this.state.allmovies})
      }
    };

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
  }

  async fullsearch(){
    if(this.state.sword.length>=3){
      this.props.navigation.navigate("FullSearch",{key:this.state.sword})
    }else{
      alert("Please Enter Search Words.")
    }
  }

  async searchmovie(v){
    var key=v;
    if(key==''){
      this.setState({movies:[]});
    }else{
      this.setState({sword:v})
      const urlmore='https://khojapp.com/api/search?data='+key;
      fetch(urlmore).then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson.movies)
        this.setState({movies:responseJson.movies,people:responseJson.cast})
        this.setState({spinner:false})
      }).catch((error)=>{
        console.log(error)
      });
    }
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <View style={{flex:1,backgroundColor:'#000',padding:20}}>
          <StatusBar barStyle = "light-content" backgroundColor = "#000"/>
          <View style={{flexDirection:'row'}}>
          <TextInput placeholderTextColor="#fff" autoCapitalize = 'none' onChangeText={value => this.searchmovie(value)}  
            style={styles.input} placeholder="Search here"/>
            <TouchableOpacity onPress={()=>this.fullsearch()}>
            <Ionicons  name="md-search" color="#fff" style={{marginLeft:5,margin:4}} size={20}/>
            </TouchableOpacity>
          </View>
          <View style={{height:'100%',borderRadius:20,backgroundColor:'#2c2c2c',padding:10}}>
            <View style={{flexDirection:'row',paddingHorizontal:10,marginBottom:20}}>
              <TouchableOpacity onPress={()=>this.setState({search_type:'Movies and TV Shows'})}
              style={this.state.search_type=='Movies and TV Shows'?{borderBottomColor:'#01c72c',borderBottomWidth:2,marginRight:10}:{marginRight:10}}>
                <Text style={{color:'#fff',fontFamily:customfonts,fontSize:12}}> Movies and TV Shows</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({search_type:'People'})}
              style={this.state.search_type=='People'?{borderBottomColor:'#01c72c',borderBottomWidth:2,marginRight:10}:{marginRight:10}}>
                <Text style={{color:'#fff',fontFamily:customfonts,fontSize:12}}>People</Text></TouchableOpacity>
            </View>
            {this.state.search_type!='People' &&
            <FlatList keyExtractor={(item, index) => index.toString()} data={this.state.movies} renderItem={({item}) => 
            <TouchableOpacity style={{flexDirection:'row',marginBottom:10}} 
            onPress={()=>this.props.navigation.navigate("SeriesDetails",{id:item.content_id})}>
              <Image style={{width:40, height:70,borderRadius:10,flex:2,marginRight:10}} 
              resizeMode="contain" source={{uri:'https://khojapp.com/poster/'+item.poster}}/>
              <View style={{flex:8}}>
                <Text style={{color:'grey',fontFamily:customfonts,fontSize:16}}>{item.title}</Text>
                <Text style={{color:'grey',fontFamily:customfonts,fontSize:10}}>
                {item.original_release_year}
                </Text>
              </View>
            </TouchableOpacity>}/>}
            {this.state.search_type=='People' &&
            <FlatList keyExtractor={(item, index) => index.toString()} data={this.state.people} renderItem={({item}) => 
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate("FullSearch",{cast_id:item.person_id})}
             style={{marginBottom:10,padding:10,backgroundColor:'#000',borderRadius:5}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:10}}>{item.name}</Text>
            </TouchableOpacity>}/>}
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
  input:{width:'90%',fontFamily:customfonts, borderWidth:1, height:30,borderRadius:20,marginBottom:10,color:'#fff',
  paddingHorizontal:20,paddingVertical:5,fontSize:14,backgroundColor:'#2c2c2c'},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:customfonts}
});
