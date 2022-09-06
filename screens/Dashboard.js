import * as React from 'react';
import {useEffect,useState} from 'react'
import { View, Text, Image, StyleSheet  } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({navigation}) {
  
  const styles = StyleSheet.create({
    main_dash_bacs :{
      backgroundColor: '#fff',
      height: '100%',
      paddingHorizontal: 20,
      paddingTop: 20,
  },
  main_dash: {
    margin: 20,
    backgroundColor: '#fff',
},
hondalogo_width: {
  height: 87,
  width: 139,
},
hondalogo: {
  height: 87,
  width: 139,
  margin: 'auto',
  marginTop: 40,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
},
title_text: {
  fontSize: 25,
  textAlign: 'center',
  marginTop: 40,
  marginBottom: 40,
},
social_btns: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
},
new_approw: {
  backgroundColor: '#ff5722',
  minWidth: 110,
  marginTop: 20,
  borderRadius: 50, 
  height: 50,
  marginRight: 8,
  marginLeft: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff'
},
new_record: {
  backgroundColor: '#4caf50',
  minWidth: 110,
  marginTop: 20,
  borderRadius: 50, 
  height: 50,
  marginRight: 8,
  marginLeft: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff'
}
  })
  const [listHeader, setHeader] = useState([]);
  const [listReport, setReport] = useState([]);
  
  useEffect(() => {
    //alert("called");
    const unSubs = [

      navigation.addListener('focus', () => {
        //alert('asdas')
        fetch('https://wishinteractiveinc.com/honda-erp/Doc_line.json')
        .then((response) => response.json())
        .then(async (json) => {
          const value = await AsyncStorage.getItem('approved');
          if(value !== null) {
            //setHidden(value.split(','))
              let arr = value.split(',');
              let arr1=[];
              //json.foreach()
              for (let item of json){
                if(arr.includes(item.Doc_Number)){
  
                }else{
                  arr1.push(item)
                }
              }
              setHeader(arr1)
          }else{
            setHeader(json)
          }
          
          
        })
        .catch((error) => console.error(error))
      })
    
    ]
    fetch('https://wishinteractiveinc.com/honda-erp/Doc_line.json')
        .then((response) => response.json())
        .then(async (json) => {
          const value = await AsyncStorage.getItem('approved');
          if(value !== null) {
            //setHidden(value.split(','))
              let arr = value.split(',');
              let arr1=[];
              //json.foreach()
              for (let item of json){
                if(arr.includes(item.Doc_Number)){
  
                }else{
                  arr1.push(item)
                }
              }
              setHeader(arr1)
          }else{
            setHeader(json)
          }
          
          
        })
        .catch((error) => console.error(error))
      
    fetch('https://wishinteractiveinc.com/honda-erp/Rep_line.json')
      .then((response) => response.json())
      .then((json) => setReport(json))
      .catch((error) => console.error(error))
    
      
  },[]);
  // const pageStyle = {
  //   viewStyle:{
  //     alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: '100%', padding: 20
  //   }
  // };
    const [text, setText] = React.useState('');
    return (
      <React.Fragment>
          
          <View style={styles.main_dash_bacs}>
            <View style={styles.main_dash}>

            <View style={styles.hondalogo}>
                <Image style={styles.hondalogo_width} source={require('./../assets/hondalogo.png')} />
            </View>

            <View style={styles.title_hads}>
                <Text style={styles.title_text}>Dashboard</Text>
            </View>

            
            <View style={styles.social_btns}>
    <Button mode="contained" style={styles.new_approw} onPress={() => navigation.navigate('Listing')}>New Approvals {listHeader.length}</Button>
                    <Button mode="contained" style={styles.new_record} onPress={() => navigation.navigate('ListingInvoice')}>New Reports {listReport.length}</Button>
                </View>
            

            </View>
          </View>
      

      </React.Fragment>
    );
  }