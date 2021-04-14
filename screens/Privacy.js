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

export default class Privacy extends React.Component {
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
              <Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'#fff',borderBottomWidth:2,borderColor:'#fff'}}>Privacy Policy</Text>
              <Text style={styles.textcontent}>This Policy describes how we treat personal
               information on the websites where it is located.</Text>
              <Text style={styles.textcontent}>We collect information from and about you.</Text>
              <Text style={styles.textcontent}>• Contact information. For example, we might collect your 
              email address if you sign up for our emails.</Text>
              <Text style={styles.textcontent}>• Information you submit or post. For example, we collect the information you post in a public space on our website. We also collect information if you respond to a survey.
</Text>
              <Text style={styles.textcontent}>• Demographic information. We may collect your zip code to help you find sales relevant to you. Other information. If you use our website, we may collect information about your IP address and the browser you’re using. We might look at what site you came from, or what site you visit when you leave us. If you use our mobile app, we may collect your GPS location. We might look at how often you use the app and where you downloaded it.
</Text>
              <Text style={styles.textcontent}>• We collect information from you passively. We use tracking tools like browser cookies and web beacons to collect information from you.
</Text>
              <Text style={styles.textcontent}>• We get information about you from third parties. For example, our business partners may give us information about you. Social media platforms may also give us information about you. We may share information with third parties.
</Text>
              <Text style={styles.textcontent}>• We will share information with our business partners. For example, we may share information with third parties who operate our “find ads near me” feature. We may also share information with third parties who co-sponsor a promotion. We may also share information with our retail partners. This might include those whose circulars and ads appear on our platforms.
    </Text>
              <Text style={styles.textcontent}>• We will share information if we think we have to in order to comply with the law or to protect ourselvesFor example, we will share information to respond to a court order or subpoena. We may share it if a government agency or investigatory body requests. We might share information when we are investigating potential fraud.
</Text>
<Text style={styles.textcontent}>We may share information with any successor to all or part of our business.For example, if part of our business was sold we may give our customer list as part of that transaction.</Text>
<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'#fff'}}>We may share information for other reasons we may describe to you</Text>
<Text style={styles.textcontent}>You have certain choices about sharing and marketing practices.</Text>
<Text style={styles.textcontent}>You can opt out of receiving our marketing emails. To stop receiving our promotional emails, follow the instructions in any promotional message you get from us. Don’t worry - even if you opt out of getting marketing messages, we will still send you transactional messages. These include responses to your questions or information about your account. You can control cookies and tracking tools.</Text>
<Text style={{fontSize:20,marginBottom:10,fontFamily:customfonts,color:'#fff'}}>
We use standard security measures.</Text>
<Text style={styles.textcontent}>The Internet is not 100% secure. We cannot promise that your use of our sites will be completely safe. We encourage you to use caution when using the Internet. This includes not sharing your passwords. We keep personal information as long as it is necessary or relevant for the practices described in this Policy. We also keep information as otherwise required by law.</Text>
<Text style={styles.textcontent}>• We may link to other sites or have third party services on our site we don’t control. If you click on a link to a third party site, you will be taken to websites we do not control. This includes social media sites. This policy does not apply to the privacy practices of these websites. Read the privacy policy of other websites and insurance carriers carefully. We are not responsible for these third party practices.
</Text>
<Text style={styles.textcontent}>• Our site and apps may also link to and/or serve third party ads or other content that contains their own cookies or tracking technologies.
</Text>
<Text style={styles.textcontent}>• We use tracking technologies for many reasons.</Text>
<Text style={styles.textcontent}>• To understand the activities and behaviors of our consumers and website visitors.</Text>
<Text style={styles.textcontent}>• To recognize new visitors to our websites and apps.</Text>
<Text style={styles.textcontent}>• To recognize past customers.</Text>
<Text style={styles.textcontent}>• To serve you with customized or interest-based advertising. These ads may appear on our website or others you visit So we can better understand our audience, our customers, our website visitors, and their respective interests.</Text>
<Text style={styles.textcontent}>• We engage in interest-based advertising.</Text>
<Text style={styles.textcontent}>• We may serve interest-based advertising using personal and other information gathered about you over time across multiple websites or other platforms. This might include apps. These ads are served on websites or apps. They might also be served in emails. Interest-based or “online behavioral advertising” includes ads that are served to you after you leave our website, encouraging you to return. They also include ads we think are relevant to you based on your shopping habits or online activities.
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
