// import React from 'react'
// import { StyleSheet, Dimensions,Text, View ,SafeAreaView} from 'react-native'
// const { height, width } = Dimensions.get("window");
// import { MaterialIcons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons'; 
// import { LinearGradient } from 'expo-linear-gradient';
// // import CarouselCardItem from './screens/CarouselCardItem'
// import CarouselCards from './screens/CarouselCards';

// const App = () => {
  
//   return (
//     <View style={styles.container}>
//         <View style={styles.navrow}>
//              <Text style={styles.navBtn}><FontAwesome name="bars" size={24} color="black" /></Text>
//              <Text style={styles.navBtn}><MaterialIcons name="settings" size={28} color="black" /></Text>
             
//            </View>
//            {/* <View style={styles.carousel}> */}
//            <SafeAreaView style={styles.carousel}>
//       <CarouselCards />
//     </SafeAreaView>
//              {/* <Text>carousel</Text> */}
//            {/* </View> */}
//            {/* <Text><Text>carousel</Text></Text> */}
//            <View style={styles.btnContainer}>
//            <LinearGradient
//           colors={['orange' ,'white' ]}
//           start={{ x: 0, y: 0.3 }}
//           style={styles.linearGradient}
//         >
//           <Text>Vertical Gradient</Text>
//         </LinearGradient>
//         <LinearGradient
//           colors={['#E6FFE6' ,'white' ]}
//           start={{ x: 0.1, y: 0.3 }}
//           style={styles.linearGradient}
//         >
//           <Text>Vertical Gradient</Text>
//         </LinearGradient>
//         <LinearGradient
//           colors={['pink' ,'white' ]}
//           start={{ x: 0.1,  y: 0.3 }}
//           style={styles.linearGradient}
//         >
//           <Text>Vertical Gradient</Text>
//         </LinearGradient>
//         <LinearGradient
//           colors={['blue' ,'white' ]}
//           start={{ x: 0.1,  y: 0.3  }}
//           style={styles.linearGradient}
//         >
//           <Text>Vertical Gradient</Text>
//         </LinearGradient>
//            {/* style={[styles.card, ]} */}
//            {/* <View style={[styles.btn,{backgroundColor:"blue"},styles.elevation]}>
//              <Text>journals</Text>
//            </View>
//            <View style={[styles.btn,{backgroundColor:"pink"},styles.elevation]}>
//              <Text>feedback</Text>
//            </View>
//            <View style={[styles.btn,{backgroundColor:"yellow"},styles.elevation]}>
//              <Text>notification</Text>
//            </View> */}

//            {/* <View style={[styles.btn,{backgroundColor:"white"},styles.elevation]}>
//            <LinearGradient
//           colors={['blue' ,'white' ]}
//           style={styles.linearGradient}
//         >
//           <Text>Vertical Gradient</Text>
//         </LinearGradient> */}
//            {/* </View> */}
//            </View>
    
//            {/* <StatusBar style="auto" /> */}
//          </View>
//   )
// }

// export default App


// const styles = StyleSheet.create({
//   navBtn:{
//    color:"white"
//   },
//   container: {
//     // flex: 1,
//     // backgroundColor: "orange",
//     height: height * 1,
//     alignItems: "center",

//     marginTop: 20,
//     justifyContent: "flex-start",
//     // padding:"10px 10px 10px 10px"
//   },
//   navrow: {
//     flexDirection: "row",
//     // height: "200px",
//     width: "100%",
//     padding: 20,
//     justifyContent:'space-between',
//     color:"white",
//     backgroundColor: "white",
//     color:"white"
//   },
//   carousel: {
//     width: width*1,
//     height: height*0.4,
//     paddingTop:20,
//     // backgroundColor:
//     // display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },btnContainer:{
//     height:height*0.6,
//     // backgroundColor:"purple",
//     width: width*1,
//     // margin:10,
//     flexDirection:"row",
//     flexWrap:'wrap'
//   },btn:{
//     width:width * 0.448,
//     height:height * 0.2,
//     borderRadius:10,
//     padding:30,
//     margin:10,
//     // justifyContent:'space-between',
//     // alignContent:"space-between",
//     // flex:1,
//     // margin:10,
//     flexWrap:'wrap'
//   } ,elevation: {
//     elevation: 20,
//     shadowColor: '#52006A',
//   },
//   linearGradient: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     width:width * 0.448,
//     height:height * 0.2,
//     padding:30,
//     margin:10,
//     elevation: 20,
//     shadowColor: '#52006A',
//     flexWrap:'wrap'
//   },
// });
import React from 'react';
import { StyleSheet, Dimensions,Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import CarouselCards from './screens/CarouselCards';
// import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
const { height, width } = Dimensions.get("window");
import { LinearGradient } from 'expo-linear-gradient';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Drawer2" component={Drawer2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <View style={styles.container}>
             {/* <View style={styles.navrow}>
                  <Text style={styles.navBtn}><FontAwesome name="bars" size={24} color="black" /></Text>
                  <Text style={styles.navBtn}><MaterialIcons name="settings" size={28} color="black" /></Text>
                 
                </View> */}
                {/* <View style={styles.carousel}> */}
                <SafeAreaView style={styles.carousel}>
           <CarouselCards />
         </SafeAreaView>
                  {/* <Text>carousel</Text> */}
                {/* </View> */}
                {/* <Text><Text>carousel</Text></Text> */}
                <View style={styles.btnContainer}>
                <LinearGradient
               colors={['orange' ,'white' ]}
               start={{ x: 0, y: 0.3 }}
               style={styles.linearGradient}
             >
              <Entypo name="open-book" size={24} color="black" />
               <Text>Vertical Gradient</Text>
             </LinearGradient>
             <LinearGradient
               colors={['#E6FFE6' ,'white' ]}
               start={{ x: 0.1, y: 0.3 }}
               style={styles.linearGradient}
             >
              <MaterialIcons name="feedback" size={24} color="black" />
               <Text>Vertical Gradient</Text>
             </LinearGradient>
             <LinearGradient
               colors={['pink' ,'white' ]}
               start={{ x: 0.1,  y: 0.3 }}
               style={styles.linearGradient}
             ><Ionicons name="notifications" size={24} color="black" />
               <Text>Vertical Gradient</Text>
             </LinearGradient>
             <LinearGradient
               colors={['blue' ,'white' ]}
               start={{ x: 0.1,  y: 0.3  }}
               style={styles.linearGradient}
             ><FontAwesome5 name="user-clock" size={24} color="black" />
               <Text>Vertical Gradient</Text>
             </LinearGradient>
                {/* style={[styles.card, ]} */}
                {/* <View style={[styles.btn,{backgroundColor:"blue"},styles.elevation]}>
                  <Text>journals</Text>
                </View>
                <View style={[styles.btn,{backgroundColor:"pink"},styles.elevation]}>
                  <Text>feedback</Text>
                </View>
                <View style={[styles.btn,{backgroundColor:"yellow"},styles.elevation]}>
                  <Text>notification</Text>
                </View> */}
    
                {/* <View style={[styles.btn,{backgroundColor:"white"},styles.elevation]}>
                <LinearGradient
               colors={['blue' ,'white' ]}
               style={styles.linearGradient}
             >
               <Text>Vertical Gradient</Text>
             </LinearGradient> */}
                {/* </View> */}
                </View>
        
                {/* <StatusBar style="auto" /> */}
              </View>
  );
}

function Drawer2() {
  return (
    <View style={styles.container}>
      <Text>Drawer 2</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  navBtn:{
   color:"white"
  },
  container: {
    // flex: 1,
    // backgroundColor: "orange",
    height: height * 1,
    alignItems: "center",

    marginTop: 20,
    justifyContent: "flex-start",
    // padding:"10px 10px 10px 10px"
  },
  navrow: {
    flexDirection: "row",
    // height: "200px",
    width: "100%",
    padding: 20,
    justifyContent:'space-between',
    color:"white",
    backgroundColor: "white",
    color:"white"
  },
  carousel: {
    width: width*1,
    height: height*0.4,
    paddingTop:20,
    // backgroundColor:
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },btnContainer:{
    height:height*0.6,
    // backgroundColor:"purple",
    width: width*1,
    // margin:10,
    flexDirection:"row",
    flexWrap:'wrap'
  },btn:{
    width:width * 0.448,
    height:height * 0.2,
    borderRadius:10,
    padding:30,
    margin:10,
    // justifyContent:'space-between',
    // alignContent:"space-between",
    // flex:1,
    // margin:10,
    flexWrap:'wrap'
  } ,elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width:width * 0.448,
    height:height * 0.2,
    padding:30,
    margin:10,
    elevation: 20,
    shadowColor: '#52006A',
    flexWrap:'wrap'
  },
});