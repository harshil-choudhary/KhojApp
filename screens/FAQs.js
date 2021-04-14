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
const height=Math.round(Dimensions.get('window').height);
const screenWidth = width*48/100;
const sc3=width*60/100;
const sc4=width*70/100;

export default class FAQs extends React.Component {
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
        <ScrollView>
        <ImageBackground source={require('.././assets/bg.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <View style={{flex:1,padding:20}}>
              <Image style={{width:100, height:40,marginBottom:10}} resizeMode="contain" source={require(".././assets/khoj.png")} />
              <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,
              color:'#fff',borderBottomWidth:2,borderColor:'#fff'}}>FAQ</Text>
              <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>
              Q: HOW IS YOUR CONTENT CREATED?</Text>
<Text style={styles.textcontent}>The Internet is not 100% secure. We cannot promise that your use of our
 sites will be completely safe. We encourage you to use caution when using the Internet. This includes not sharing your passwords. We keep personal information as long as it is necessary or relevant for the practices described in this Policy. We also keep information as otherwise required by law.</Text>

 <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>
 Q: I SEARCHED FOR A MOVIE/SHOW ON Khoj, BUT COULDN'T FIND IT. WHY?</Text>
<Text style={styles.textcontent}>Either none of the providers we support has an offer for the movie/show currently, or it is not listed in our source database themoviedb.com.</Text>

 <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>
 Q: IS NETFLIX'S CONTENT DIFFERENT IN EACH COUNTRY?</Text>
<Text style={styles.textcontent}>Yes. We list Netflix content in all the countries where we are available. To see the Netflix content available in your country, make sure to choose the correct country on the Khoj startpage.</Text>

 <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>
 Q: DO YOU KNOW WHEN A MOVIE/SHOW/SEASON BECOMES AVAILABLE?</Text>
<Text style={styles.textcontent}>No. We at Khoj can't affect on what content the providers offer and when. We update the offers daily, so as soon as a movie/show becomes available, you will find the information on our page.</Text>

 <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>
 Q: I HAD AN ISSUE WITH BUYING/RENTING/STREAMING THE MOVIE/SHOW ON THE PROVIDER'S PAGE. WHAT SHOULD I DO?</Text>
<Text style={styles.textcontent}>Please contact the provider's customer support directly. We can't handle any issues outside our app/website.</Text>

<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>Q: THE PRICE YOU LIST FOR A MOVIE/SHOW/SEASON IS WRONG, E.G. IT'S MORE EXPENSIVE ON ITUNES. WHY?
</Text>
<Text style={styles.textcontent}>Please notice that there are usually different prices for HD and SD versions. "Best price" is usually for SD version, while many providers show the more expensive HD price by default. Make sure to use the correct filters to check prices.

</Text>

<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>Q: A MOVIE/SHOW IS AVAILABLE ON "PROVIDER X", BUT YOU ARE MISSING THIS INFORMATION. WHY?
</Text>
<Text style={styles.textcontent}>If it's a provider already listed on Khoj, it's an error from our side and we are sorry about that. Please let us know the details and we will fix it as quickly as possible. If it's a provider we don't list currently, feel free to suggest this provider to us!

</Text>

<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>Q: WHAT DOES IT MEAN WHEN A MOVIE/SHOW IS NOT AVAILABLE FOR STREAMING/BUYING/RENTING?
</Text>
<Text style={styles.textcontent}>It means (most likely) that none of the providers we support offers the title at the moment. We check the providers' pages daily for new content. If you know we are missing an availability information, please report it and we'll fix it!

</Text>

<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>Q: I NOTICED A MOVIE/SHOW WASN'T AVAILABLE ON THE PROVIDER'S SERVICE, ALTHOUGH YOU SAID IT IS. WHY?
</Text>
<Text style={styles.textcontent}>We check our content's availability daily but sometimes due to technical issues we are not able to check if the offers are expired or not. Please let us know about the issue, and we will fix it quickly.

</Text>

<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>Q: WHY WAS I REDIRECTED TO A DIFFERENT MOVIE/SHOW AFTER CLICKING A PROVIDER'S ICON?
</Text>
<Text style={styles.textcontent}>We most likely mixed up a wrong version or a similarly named movie/show, sorry about that. Let us know about it, and we will fix it asap!

</Text>

<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'grey'}}>Q: I NOTICED THAT YOU DON'T LIST ALL POSSIBLE STREAMING/RENTING/BUYING PROVIDERS AVAILABLE IN MY COUNTRY. WHY?
</Text>
<Text style={styles.textcontent}>Our goal is to have all the providers that are important for our users and we choose the providers based on our users' request. Let us know about it, and we will fix it asap!

</Text>



            </View>
        </ImageBackground>
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
  textcontent:{fontSize:14,fontFamily:customfonts,color:'#fff',marginBottom:5},
  btn2:{width:'45%', padding:10, backgroundColor:'#F2F3F4',borderRadius:20},
  btnText:{fontSize:18, textAlign:'center', color:'#34495E',fontFamily:customfonts}
});
