import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import SvgPurse from './images/Purse';
import SvgUparrow from './images/uparrow';
import SvgDownarrow from './images/Downarrow';
import SvgHome from './images/Home';
import SvgStockmarkt from './images/Stockmarket';
import SvgPlus from './images/Plus';
import SvgPiggyBank from './images/PiggyBank';
import SvgProfile from './images/Profile';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.HeaderBar}>
            <View>
              <Text style={styles.Expenses}>Expenses</Text>
            </View>
            <View>
              <SvgPurse/>
            </View>
          </View>
          <View style={styles.CardBalance}>
            <View>
              <Text style={styles.CardBalanceText}>Card Balanace</Text>
              <Text style={styles.CardBalanceNumber}>$ 6,020</Text>
            </View>
            <View style={styles.RaisingFallingview}>
                <View style={styles.RaisingFallingsubView}>
                  <View style={styles.RaisingSvgView}>
                    <SvgUparrow/>
                  </View>
                  <Text style={styles.RaisingText}>$2,200</Text>
                </View>
                <View style={styles.RaisingFallingsubView}>
                  <View style={styles.FallingSvgView}>
                    <SvgDownarrow/>
                  </View>
                  <Text style={styles.FallingText}>$2,200</Text>
                </View>
            </View>
          </View>
          <View style={{flex:1,backgroundColor:"#FF0000"}}>

          </View>
          <View style={{height:60,flexDirection:"row"}}>
            <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <SvgHome/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <SvgStockmarkt/>
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity style={{position:"absolute",top:-10,left:0,right:0,alignItems:"center"}}>
                   <SvgPlus/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <SvgPiggyBank/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <SvgProfile/>
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9f9',
    paddingTop:30
  },
  HeaderBar:{
    paddingVertical:20,
    paddingHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  Expenses:{
    fontSize:20,
    color:"#042c5c"
  },
  CardBalance:{
    paddingHorizontal:20,
    paddingVertical:10,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  CardBalanceText:{
    color:"#77869e"
  },
  CardBalanceNumber:{
    fontSize:30,
    color:"#042c5c"
  },
  RaisingFallingview:{
    justifyContent:"space-between"
  },
  RaisingFallingsubView:{
    flexDirection:"row",
    alignItems:"center"
  },
  RaisingSvgView:{
    width:20,
    height:20,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#e2f2eb"
  },
  RaisingText:{
    color:"#1bc773",
    marginLeft:5
  },
  FallingSvgView:{
    width:20,
    height:20,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f6e6e7"
  },
  FallingText:{
    color:"#f24750",
    marginLeft:5
  },
});
