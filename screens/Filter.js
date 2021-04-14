import React from 'react';
import { StatusBar,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator,Slider} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import { Ionicons } from 'react-native-vector-icons';
import AnimatedLoader from "react-native-animated-loader";
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*48/100;
const sc3=width*33/100;
const sc4=width*70/100;
const slen=width*90/100;

export default class Filter extends React.Component {
    constructor(props){
      super(props);
      this.state={cats:[],max_yr:2020,providers:[],
      cats_show:true,chosen_cats:[],tot:1,spinner:true,
      genres:[],chosen_provs:[],inc:1,
      genre_show:true,chosen_genre:[],rated:['All','U','U/A','A'],chosen_rated:'All',rated_show:true,show_provider:true,
      langs:[],langs_show:true,chosen_langs:[],rating_start:1,rating_end:10,yr_start:1994,yr_end:2020
      }
    }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
    const urlmore='https://khojapp.com/api/get_filters';
    fetch(urlmore).then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({spinner:false})
      console.log(responseJson.filters.categories);
      this.setState({cats:responseJson.filters.categories,providers:responseJson.filters.providers});
      this.setState({genres:responseJson.filters.genres,langs:responseJson.filters.langauge});
        //genres:responseJson.filters.genres,langs:responseJson.filters.langauge})
    }).catch((error)=>{
      console.log(error)
      this.setState({spinner:false})
    });
  }

  async onValueChange(v){
    this.setState({max_yr:v});
  }

  async chosen_cats(item){
    //console.log(item);
    var index = this.state.chosen_cats.indexOf(item);
    if (index > -1) {
        this.state.chosen_cats.splice(index, 1);
    }else{
        this.state.chosen_cats.push(item);
    }
    //console.log(this.state.chosen_cats);
    this.get_filter();
  }

  async chosen_provs(item){
    //console.log(item);
    var index = this.state.chosen_provs.indexOf(item);
    if (index > -1) {
        this.state.chosen_provs.splice(index, 1);
    }else{
        this.state.chosen_provs.push(item);
    }
    console.log(this.state.chosen_provs);
    this.get_filter();
  }


  async chosen_langs(item){
    //console.log(item);
    var index = this.state.chosen_langs.indexOf(item);
    if (index > -1) {
        this.state.chosen_langs.splice(index, 1);
    }else{
        this.state.chosen_langs.push(item);
    }
    this.get_filter();
  }

  async chosen_genre(item){
    //console.log(item);
    var index = this.state.chosen_genre.indexOf(item);
    if (index > -1) {
        this.state.chosen_genre.splice(index, 1);
    }else{
        this.state.chosen_genre.push(item);
    }
    this.get_filter();
  }

  async chosen_rated(item){
    this.setState({chosen_rated:item});
  }

  async get_filter(){
    var tott=this.state.tot+1;
    this.setState({tot:tott})
    //console.log("asdfas")
  }

  multiSliderValuesChange = values => {
    this.setState({rating_start:values[0]})
    this.setState({rating_end:values[1]})
  }

  multiSliderValuesChange1 = values => {
    this.setState({yr_start:values[0]})
    this.setState({yr_end:values[1]})
  }

  async applyFilter(){
    //alert("asdfsaf")
    var categories=this.state.chosen_cats.join();
    var genres=this.state.chosen_genre.join();
    var langs=this.state.chosen_langs.join();
    //console.log(categories)
    var yrs=this.state.yr_start+'-'+this.state.yr_end;
    var ratings=this.state.rating_start+'-'+this.state.rating_end;
    //var filters=[{'categories':categories,'genres':genres,'langs':langs,'yrs':yrs,'ratings':ratings,'rated':this.state.chosen_rated}]
    //
    var filter='categories='+categories+'&genre='+genres+'&lang='+langs+'&rated='+this.state.chosen_rated+'&rating='+ratings
    +'&maxyear='+this.state.yr_end+'&minyear='+this.state.yr_start;
    console.log(filter)
    AsyncStorage.setItem("filters",filter);
    //this.props.navigation.navigate("Dashboard",{inc:this.state.inc+1});
    this.props.navigation.goBack(null);return false;
  }

  async clearFilter(){
    this.setState({chosen_cats:[],chosen_genre:[],chosen_langs:[]})
    await AsyncStorage.removeItem('filters');
    alert("All Filters Cleared");
    this.props.navigation.goBack(null);return false;
  }

  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ScrollView style={{flex:1,backgroundColor:'#1e1e1e'}}>
          <StatusBar barStyle = "light-content"  backgroundColor = "#000"/>
          <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
        animationStyle={{width: 100,height: 100}}speed={1}/>
          <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
            <Text style={{color:'#fff',fontFamily:customfonts,fontSize:20}}>FILTER</Text>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{justifyContent:'center'}}>
              <Ionicons  name="md-notifications" color="#fff" size={26}/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10,justifyContent:'center'}}>
              <Image style={{width:28, height:28,borderRadius:50}} source={require(".././assets/user.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={()=>this.setState({cats_show:!this.state.cats_show})} 
          style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#161616'}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Category</Text>
              {this.state.cats_show==true &&
              <Ionicons name="md-arrow-dropdown" color="#fff" size={26}/>}
              {this.state.cats_show==false &&
              <Ionicons name="md-arrow-dropright" color="#fff" size={26}/>}
          </TouchableOpacity>
          {this.state.cats_show==true && 
          <View style={{backgroundColor:'#2c2c2c'}}>
          {this.state.cats.map((item,i) => {
                return <TouchableOpacity onPress={()=>this.chosen_cats(item)}
                style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,margin:5}}>
                            <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14}}>{item}</Text>
                            <Ionicons name="md-checkmark-circle" 
                            style={this.state.chosen_cats.includes(item)?{color:'green'}:{color:'grey'}} size={20}/>
                        </TouchableOpacity>
                })}
          </View>}
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#000'}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Release Year</Text>
              <Ionicons name="md-arrow-dropdown" color="#fff" size={20}/>
          </View>
          <View style={{backgroundColor:'#2c2c2c',paddingHorizontal:25}}>
          <MultiSlider trackStyle={{backgroundColor:'#bdc3c7'}} selectedStyle={{backgroundColor:"green"}} values={[1994,2020]}  snapped={true}
           onValuesChange={this.multiSliderValuesChange1} sliderLength={slen} min={1994} max={2020} step={1} allowOverlap={false}/>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{color:'#fff',fontFamily:customfonts}}>{this.state.yr_start}</Text>
             <Text style={{color:'#fff',fontFamily:customfonts}}>{this.state.yr_end}</Text>
           </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#161616',marginTop:10}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Rating</Text>
              <Ionicons name="md-arrow-dropright" color="#fff" size={20}/>
          </View>
          <View style={{backgroundColor:'#2c2c2c',paddingHorizontal:25}}>
          <MultiSlider trackStyle={{backgroundColor:'#bdc3c7'}} selectedStyle={{backgroundColor:"green"}} values={[1,10]}  snapped={true}
           onValuesChange={this.multiSliderValuesChange} sliderLength={slen} min={1} max={10} step={1} allowOverlap={false}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
             <Text style={{color:'#fff',fontFamily:customfonts}}>{this.state.rating_start}</Text>
             <Text style={{color:'#fff',fontFamily:customfonts}}>{this.state.rating_end}</Text>
           </View>
          </View>
          <TouchableOpacity onPress={()=>this.setState({genre_show:!this.state.genre_show})} 
             style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#161616',marginTop:10}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Genre</Text>
              {this.state.genre_show==true &&
              <Ionicons name="md-arrow-dropdown" color="#fff" size={26}/>}
              {this.state.genre_show==false &&
              <Ionicons name="md-arrow-dropright" color="#fff" size={26}/>}
          </TouchableOpacity>
          {this.state.genre_show==true && 
          <View style={{backgroundColor:'#2c2c2c'}}>
          {this.state.genres.map((item,i) => {
                return <TouchableOpacity onPress={()=>this.chosen_genre(item.genre_id)}
                style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,margin:5}}>
                            <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14}}>{item.title}</Text>
                            <Ionicons name="md-checkmark-circle" 
                            style={this.state.chosen_genre.includes(item.genre_id)?{color:'green'}:{color:'grey'}} size={20}/>
                        </TouchableOpacity>
                })}
          </View>}

          <TouchableOpacity onPress={()=>this.setState({rated_show:!this.state.rated_show})} 
           style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#161616',marginTop:10}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Rated</Text>
              {this.state.rated_show==true &&
              <Ionicons name="md-arrow-dropdown" color="#fff" size={26}/>}
              {this.state.rated_show==false &&
              <Ionicons name="md-arrow-dropright" color="#fff" size={26}/>}
          </TouchableOpacity>
          {this.state.rated_show==true && 
          <View style={{backgroundColor:'#2c2c2c'}}>
          {this.state.rated.map((item,i) => {
                return <TouchableOpacity onPress={()=>this.chosen_rated(item)}
                style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,margin:5}}>
                            <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14}}>{item}</Text>
                            <Ionicons name="md-checkmark-circle" 
                            style={this.state.chosen_rated==item?{color:'green'}:{color:'grey'}} size={20}/>
                        </TouchableOpacity>
                })}
          </View>}    


          <TouchableOpacity onPress={()=>this.setState({langs_show:!this.state.langs_show})} 
           style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#161616',marginTop:10}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Language</Text>
              {this.state.langs_show==true &&
              <Ionicons name="md-arrow-dropdown" color="#fff" size={26}/>}
              {this.state.langs_show==false &&
              <Ionicons name="md-arrow-dropright" color="#fff" size={26}/>}
          </TouchableOpacity>
          {this.state.langs_show==true && 
          <View style={{backgroundColor:'#2c2c2c'}}>
          {this.state.langs.map((item,i) => {
                return <TouchableOpacity onPress={()=>this.chosen_langs(item.english_name)}
                style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,margin:5}}>
                            <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14}}>{item.english_name}</Text>
                            <Ionicons name="md-checkmark-circle" 
                            style={this.state.chosen_langs.includes(item.english_name)?{color:'green'}:{color:'grey'}} size={20}/>
                        </TouchableOpacity>
                })}
          </View>} 

          <TouchableOpacity onPress={()=>this.setState({show_provider:!this.state.show_provider})} 
           style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#161616',marginTop:10}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:14}}>Providers</Text>
              {this.state.show_provider==true &&
              <Ionicons name="md-arrow-dropdown" color="#fff" size={26}/>}
              {this.state.show_provider==false &&
              <Ionicons name="md-arrow-dropright" color="#fff" size={26}/>}
          </TouchableOpacity>
          {this.state.show_provider==true && 
          <View style={{backgroundColor:'#2c2c2c',alignItems:'center'}}>
          <FlatList numColumns={6} keyExtractor={(item, index) => index.toString()} 
                    data={this.state.providers} renderItem={({item}) => 
                 <TouchableOpacity 
                  onPress={()=>this.chosen_provs(item.provider_id)}
                  style={this.state.chosen_provs.includes(item.provider_id)?{alignItems:'center',justifyContent:'center',margin:5}:
                 {width:50, height:50,alignItems:'center',justifyContent:'center',margin:5}} >

                      <Image style={this.state.chosen_provs.includes(item.provider_id)?{width:50, height:50,borderRadius:5, opacity:1,elevation: 10,borderColor:'green',borderWidth:2,}:
                 {width:50, height:50,borderRadius:5,opacity:0.3}}
              resizeMode="contain"  source={{uri:'https://khojapp.com/asset/'+item.icon_url}}/>
                        </TouchableOpacity>}/>
          </View>} 
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=>this.applyFilter()} style={styles.btn}>
                  <Text style={styles.btnText}>Filter</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>this.clearFilter()} style={styles.btnc}>
                  <Text style={styles.btnText}>Clear Filter</Text></TouchableOpacity>
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
  },btn:{width:'45%', padding:5, backgroundColor:'green',marginTop:10,marginBottom:10},
  btnc:{width:'45%', padding:5, backgroundColor:'grey',marginTop:10,marginBottom:10,marginLeft:5},
  btn2:{width:'45%', padding:10, backgroundColor:'#161616'},
  btnText:{fontSize:14, textAlign:'center', color:'#fff',fontFamily:customfonts}
});
