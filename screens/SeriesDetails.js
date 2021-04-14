import React from 'react';
import { StatusBar,Linking,StyleSheet,KeyboardAvoidingView,AsyncStorage,ImageBackground,Dimensions,FlatList,ScrollView,Share,
   Text,Image, View, TextInput ,TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {customfonts} from '../assets/fonts/fonts.js';
import {customfonts2} from '../assets/fonts/fonts.js';
import {bfont} from '../assets/fonts/fonts.js';
import AnimatedLoader from "react-native-animated-loader";
import { Ionicons } from 'react-native-vector-icons';
import { Container,Content, Header, Left, Card, CardItem,Tab,Tabs,Body,Icon, Right, Title, } from 'native-base';
import {LinearGradient} from 'react-native-linear-gradient';

const width=Math.round(Dimensions.get('window').width);
const screenWidth = width*40/100;
const sc3=width*33/100;
const sc4=width*70/100;

const tabProps = {
  underlineStyle: {borderColor: '#f65857'}
};

export default class SeriesDetails extends React.Component {
    constructor(props){
      super(props);
      this.state={ short_description:'',poster:'',title:'',spinner:false,similar:[],release:'',link:'',monetization_type:'',
      video_quality:'',retail_price:'',currency:'',trailers:[],casts:'',runtime:'',content_type:'',seasons:[],
      total_seasons:'',episode_number:'',providers:[],clips:[],genres:'',movie_id:'',share_url:'',imdb_score:''
      }
    }

    onShare = async (scode) => {
      try {
          const result = await Share.share({
          message:this.state.share_url
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    async pageRefresh(id){
      this.setState({movie_id:id});
      console.log(id)
      this.setState({spinner:true});
      const url='https://khojapp.com/api/movie_details?id='+id;
      fetch(url).then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson)
        this.setState({poster:responseJson.movie.poster,title:responseJson.movie.title,spinner:false,casts:responseJson.movie.casts,
        runtime:responseJson.movie.runtime});
        this.setState({short_description:responseJson.movie.short_description,release:responseJson.movie.original_release_year,
        trailers:responseJson.movie.clips,share_url:responseJson.movie.share_url,imdb_score:responseJson.movie.imdb_score,
        content_type:responseJson.movie.content_type,total_seasons:responseJson.movie.total_seasons,
        episode_number:responseJson.movie.episode_number,providers:responseJson.movie.providers,genres:responseJson.movie.genres,clips:responseJson.movie.clips,
        })
      }).catch((error)=>{
      console.log(error)
      this.setState({spinner:false})
      });
      const urls='https://khojapp.com/api/similar_movie?id='+id;
      fetch(urls).then((response)=>response.json())
      .then((responseJson)=>{
        //console.log(responseJson)
        this.setState({similar_movie:responseJson.similar_movie});
      }).catch((error)=>{
        console.log(error)
      });
      const urlss='https://khojapp.com/api/show_seasons?show_id='+id;
      fetch(urlss).then((response)=>response.json())
      .then((responseJson)=>{
        //console.log(responseJson)
        this.setState({seasons:responseJson.seasons});
      }).catch((error)=>{
      console.log(error)
      });
  }

  async componentDidMount(){
    this.setState({ assetsLoaded: true });
    const { navigation } = this.props;
    const id = navigation.getParam('id', '6145');
    this.focusListener = navigation.addListener('didFocus', () => {
        this.pageRefresh(id);
    });this.pageRefresh(id);
  }

  async addtofav(){
    var token=await AsyncStorage.getItem('token');
    var movie_id=this.state.movie_id;
    if(token==null){
      alert("Please login to add to favourites.");return false;
    }
    this.setState({spinner:true});
    const urls='https://khojapp.com/api/add_to_favourite?token='+token+'&movie_id='+movie_id;
      fetch(urls).then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson)
        alert(responseJson.message)
        this.setState({spinner:false});
      }).catch((error)=>{
      console.log(error)
    });
  }

  async addtowatch(){
    var token=await AsyncStorage.getItem('token');
    if(token==null){
      alert("Please login to add to watchlist.");return false;
    }
    var movie_id=this.state.movie_id;
    this.setState({spinner:true});
    const urls='https://khojapp.com/api/add_to_watchlist?token='+token+'&movie_id='+movie_id;
      fetch(urls).then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson)
        alert(responseJson.message)
        this.setState({spinner:false});
      }).catch((error)=>{
      console.log(error)
    });
  }
  
  render() {
    const {assetsLoaded} = this.state;
      if( assetsLoaded ) {
      return (
        <ScrollView style={{flex:1,backgroundColor:'#1e1e1e'}}>
          <StatusBar barStyle = "light-content" backgroundColor = "#000"/>
          <AnimatedLoader visible={this.state.spinner} overlayColor="rgba(255,255,255,0.75)" source={require(".././assets/loader.json")}
        animationStyle={{width: 100,height: 100}}speed={1}/>
          <Image style={{width:'100%', height:200}} source={{uri:'https://khojapp.com/poster/'+this.state.poster}}/>
          <TouchableOpacity style={{ position: 'absolute', top: 4, right: 8 }}>
              <Ionicons name="md-heart" color="orange" size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{ position: 'absolute', top: 4, left: 8 }}>
              <Ionicons name="md-arrow-back" color="#fff" size={26} />
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
            <Image style={{width:sc3, height:200,flex:2,borderRadius:5,margin:10,marginTop:-80}} 
            source={{uri:'https://khojapp.com/poster/'+this.state.poster}}/>
            <View style={{flex:3,padding:10}}>
             <Text style={{color:'#fff',fontFamily:customfonts,fontSize:18,marginBottom:10}}>{this.state.title}</Text>
             {this.state.content_type=='shows' &&
             <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14,marginBottom:5}}>{this.state.total_seasons} season | 
             {this.state.episode_number} Episodes</Text>}
             {this.state.content_type=='movie' &&
             <Text style={{color:'#fff',fontFamily:customfonts,fontSize:14,marginBottom:5}}>{this.state.runtime} mins | 
             Released {this.state.release}</Text>}
             <Text style={{color:'green',fontFamily:customfonts,fontSize:14}}>{this.state.genres}</Text> 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.addtofav()}>
                <Ionicons name="md-heart" color="grey" size={22} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.addtowatch()} style={{marginLeft:10}}>
                <Ionicons name="md-eye" color="grey" size={22} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onShare()}>
                <Ionicons name="md-share" color="grey" size={22}  style={{marginLeft:10}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <Tabs tabBarUnderlineStyle={{borderBottomWidth:5,borderBottomColor:'#01c72c'}}>
          <Tab heading="OVERVIEW" textStyle={{fontFamily:customfonts}}
          tabStyle={{backgroundColor: '#1e1e1e',fontFamily:customfonts}} 
          activeTabStyle={{backgroundColor: '#000',padding:2}}>
            <View style={{backgroundColor:'#1e1e1e',height:'100%',padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey',fontFamily:customfonts}}>Casts</Text>
                    <Text style={{color:'#F2F3F4',fontFamily:customfonts,marginLeft:5}}>{this.state.casts}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey',fontFamily:customfonts}}>IMDB Rating</Text>
                    <Text style={{color:'#F2F3F4',fontFamily:customfonts,marginLeft:5}}>{this.state.imdb_score}</Text>
                </View>
                {/* <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey',fontFamily:customfonts}}>Director</Text>
                    <Text style={{color:'#F2F3F4',fontFamily:customfonts,marginLeft:5}}>Jinathan Smith</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey',fontFamily:customfonts}}>Writers </Text>
                    <Text style={{color:'#F2F3F4',fontFamily:customfonts,marginLeft:5}}>Tereca Fret, Jordan Pordy</Text>
                </View> */}

                <Text style={{color:'#F2F3F4',fontFamily:customfonts,textAlign:'justify',marginTop:10}}>{this.state.short_description}</Text>
                    <Text style={{color:'grey',fontFamily:customfonts,marginVertical:10}}>Watch Now</Text>
                
                <FlatList numColumns={3} keyExtractor={(item, index) => index.toString()} 
            data={this.state.providers} renderItem={({item}) => 
                <TouchableOpacity 
                 style={{width:sc3,backgroundColor:'grey',flexDirection:'row',borderRadius:5,
                justifyContent:'space-around',padding:2,margin:5}}
                onPress={()=>{Linking.openURL(item.web_url);console.log(item.web_url)}}>
                  
                <Image style={{width:40, height:40,justifyContent:'center'}} 
              resizeMode="contain"  source={{uri:'https://khojapp.com/asset/'+item.icon_url}}/>
                <View style={{flex:2,marginLeft:5,justifyContent:'center'}}>
                <Text style={{fontSize:14,color:'#fff'}}>{item.monetization_type} {item.video_quality}</Text>
                <Text style={{fontSize:12,color:'#fff'}}>{item.currency} {item.retail_price}</Text>
                </View>
                </TouchableOpacity>}/>

                <Text style={{color:'grey',fontFamily:customfonts,marginVertical:10}}>Trailers</Text>
                <FlatList numColumns={2} keyExtractor={(item, index) => index.toString()} 
                    data={this.state.clips} renderItem={({item}) => 
                    <View style={{maxWidth:screenWidth,margin:5}}>
                    <TouchableOpacity onPress={()=>{console.log(item.external_id),this.props.navigation.navigate("ytPlayer",{id:item.external_id})}}>
                    <Image style={{width:screenWidth, height:100,borderRadius:5}} 
                     source={require(".././assets/youtube.jpg")}/>
                     </TouchableOpacity>
                     <Text style={{fontSize:10,color:'#fff'}}>{item.title}</Text></View>}/>

            
                     <Text style={{color:'grey',fontFamily:customfonts,marginVertical:10}}>Similar</Text>
                  <FlatList numColumns={3} keyExtractor={(item, index) => index.toString()} 
                  data={this.state.similar_movie} renderItem={({item}) => 
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("SeriesDetails")}>
                    <Image style={{width:sc3, height:140,borderRadius:5,marginBottom:10}} 
                    resizeMode="contain" source={{uri:'https://khojapp.com/poster/'+item.poster}}/>
                  </TouchableOpacity>}/>
          
            </View>
          </Tab>
          {this.state.content_type!='movie' &&
          <Tab heading="SEASONS" textStyle={{fontFamily:customfonts}} 
          tabStyle={{backgroundColor: '#1e1e1e',fontFamily:customfonts}} 
          activeTabStyle={{backgroundColor: '#000',padding:2}}>
            <View style={{backgroundColor:'#1e1e1e',height:'100%',padding:10}}>
            <FlatList keyExtractor={(item, index) => index.toString()} data={this.state.seasons} renderItem={({item}) => 
            <TouchableOpacity  onPress={()=>this.pageRefresh(item.content_id)}
             style={{marginBottom:10,padding:10,backgroundColor:'#000',borderRadius:5}}>
              <Text style={{color:'grey',fontFamily:customfonts,fontSize:12}}>{item.title}</Text>
            </TouchableOpacity>}/>
                </View>
          </Tab>}
          {this.state.content_type=='movie' &&
          <Tab heading="REVIEWS" textStyle={{fontFamily:customfonts}} 
          tabStyle={{backgroundColor: '#1e1e1e',fontFamily:customfonts}} 
          activeTabStyle={{backgroundColor: '#000',padding:2}}>
            <View style={{backgroundColor:'#1e1e1e',height:'100%',padding:10}}>
                </View>
          </Tab>}
         
          </Tabs>
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
