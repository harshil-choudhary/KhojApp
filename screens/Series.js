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
const sc3=width*33/100;
const sc4=width*70/100;

export default class Series extends React.Component {
    constructor(props){
      super(props);
      this.state={selected_cat:'All',vid_cats:['All','Comedy','Family','Reality','Drama','Others'],
      movies:[{'name':'mov1.jpg'},{'name':'mov2.jpg'},{'name':'mov3.jpg'},{'name':'mov4.jpg'},{'name':'mov5.jpg'},{'name':'mov6.jpg'},
      {'name':'mov7.jpeg'},{'name':'mov8.jpg'},{'name':'mov9.jpg'},{'name':'mov1.jpg'},{'name':'mov2.jpg'},{'name':'mov3.jpg'},{'name':'mov4.jpg'},{'name':'mov5.jpg'},{'name':'mov6.jpg'},
      {'name':'mov7.jpeg'},{'name':'mov8.jpg'},{'name':'mov9.jpg'}]
      }
    }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
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
          <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
            <Image style={{width:100, height:40}} resizeMode="contain" source={require(".././assets/khoj.png")} />
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{justifyContent:'center'}}>
              <Ionicons  name="md-notifications" color="#fff" size={28}/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10,justifyContent:'center'}}>
              <Ionicons  name="md-search" color="#fff" size={28}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:'#000'}}> 
            {this.state.vid_cats.map((item,i) => {
                return <TouchableOpacity onPress={()=>this.change_cat(item)} 
              style={item==this.state.selected_cat?{
              borderBottomColor:'#01c72c',borderBottomWidth:2}:{}}>
                <Text style={{color:'#fff',fontFamily:customfonts,fontSize:16,padding:10}}>{item}</Text>
              </TouchableOpacity>})}
          </ScrollView>
          <ScrollView style={{marginTop:10,alignContent:'center'}}>
          <FlatList numColumns={3} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} 
            data={this.state.movies} renderItem={({item}) => 
              <Image style={{width:sc3, height:140,borderRadius:5,marginBottom:10}} 
              resizeMode="contain" source={{uri:'http://supperme.com/health/assets/images/'+item.name}}/>}/>
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
