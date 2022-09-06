//import * as React from 'react';
import React from "react";
import {useEffect,useState} from 'react'
import Moment from 'moment';
import { View, Text, Image, StyleSheet, CheckBox, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export default function Listing({navigation}) {
    const styles = StyleSheet.create({
        main_dash_bacs :{
            backgroundColor: '#fff',
            // height: '100%',
            paddingHorizontal: 15,
            paddingTop: 50,
            paddingBottom: 30,
        },
        hondalogo: {
            width: 120,
            height: 27,
        },
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
          checkboxContainer: {
            flexDirection: "row",
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
            width: '100%',
            
          },
          checkbox: {
            alignSelf: "center",
          },
          label: {
            margin: 8,
          },
          listbox: {
            backgroundColor: '#EDEDED',
            borderRadius: 15,
            padding: 10,
            width: '100%',
            flex: 1,
          },
          row_one: {
            flexDirection: "row",
            alignItems: "center",
            width: '100%',
            marginBottom: 6,
            justifyContent: 'space-between'
          },
          row_one_last: {
            flexDirection: "row",
            alignItems: "center",
            width: '100%',
            marginBottom: 0,
            justifyContent: 'space-between'
          },
          label_inner_name: {
            width: '49%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
          },
          label_inner_date: {
            width: '49%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
          },
          label_cols2: {
            width: '50%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
          },
          label_cols8: {
            width: '59%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
            marginRight: 3,
          },
          view_doc: {
            width: '32%',
            backgroundColor: '#F8B538',
            borderRadius: 30,
            padding: 6,
            marginLeft: 3,
            fontSize: 12,
          },
          approve: {
            width: '32%',
            backgroundColor: '#41D86A',
            borderRadius: 30,
            padding: 6,
            marginLeft: 3,
            fontSize: 12,
          },
          cancel: {
            width: '32%',
            backgroundColor: '#999999',
            borderRadius: 30,
            padding: 6,
            marginLeft: 3,
            fontSize: 12,
          },
          view_label: {
            color: '#fff',
            fontSize: 12,
            textAlign: 'center',
          },
          bottomView:{
            width: '100%', 
            height: 50, 
            backgroundColor: '#FF9800', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            bottom: 0
          },
          add_css:{
            marginBottom: 0,
          }

    });
    const [hidden, setHidden] = useState([]);
    const [listHeader, setHeader] = useState([]);
    useEffect(() => {
      fetch('https://wishinteractiveinc.com/honda-erp/Doc_line.json')
        .then((response) => response.json())
        .then(async (json) => {
          const value = await AsyncStorage.getItem('approved')
          
          if(value !== null){
            setHidden(value.split(','))
            let arr = value.split(',');
            let arr1=[];
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
    },[]);
    const handleApprove = async (doc_no,index) => {
      console.log(doc_no,index);
      hidden.push(doc_no)
      await AsyncStorage.setItem('approved', hidden.toString())
       listHeader.splice(index,1);
      setHeader([...listHeader])
      Toast.show('Approved Successfully', Toast.LONG,Toast.CENTER);
    //  setHeader()
    }
    const handleReject = async (doc_no,index) => {
      console.log(doc_no,index);
      hidden.push(doc_no)
      await AsyncStorage.setItem('approved', hidden.toString())
       listHeader.splice(index,1);
      setHeader([...listHeader])
     Toast.show('Rejected Successfully', Toast.LONG,Toast.CENTER);
    }
    return (
        <React.Fragment>
          <ScrollView style={styles.scrollView}>
            <View style={styles.main_dash_bacs}>
                <View>
                    <Image style={styles.hondalogo} source={require('./../assets/hondamain_logo.png')} />
                </View>

                {listHeader.map((item,index)=>(<View key={item.Doc_Number} style={styles.checkboxContainer}>
                    
                    <View style={styles.listbox}>
                      <View style={styles.row_one}>
                        <Text style={styles.label_inner_name}>Doc Type: {item.Doc_Type}</Text>
                        <Text style={styles.label_inner_date}>Doc Date:{Moment(item.Doc_Date).format('DD-MM-YYYY')}</Text>
                      </View>

                      <View style={styles.row_one}>
                        <Text style={styles.label_inner_name}>Doc. No : {item.Doc_Number}</Text>
                        <Text style={styles.label_inner_date}>Amount : {item.Amount}/-</Text>
                      </View>

                      <View style={styles.row_one_last}>
                        
                        <TouchableOpacity style={styles.view_doc}>
                          <Text style={styles.view_label} onPress={()=>navigation.navigate('Invoice',{info:item})}>View Documents</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleApprove(item.Doc_Number,index)} style={styles.approve}>
                          <Text style={styles.view_label}>Approved</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleReject(item.Doc_Number,index)} style={styles.cancel}>
                          <Text style={styles.view_label}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>))}

                
                
            </View>
            {/* <View style={{flex: 1}}>
                <View style={ styles.bottomView} >
 
                  <Text style={styles.textStyle}>This is Bottom View.</Text>
 
               </View>
               </View> */}
               
            </ScrollView>

            
        </React.Fragment>
      );

}