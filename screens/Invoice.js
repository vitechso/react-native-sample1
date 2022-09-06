//import * as React from 'react';
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, CheckBox, TouchableOpacity, ScrollView } from 'react-native';
import Moment from 'moment';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
export default function Invoice({route, navigation}) {
    const styles = StyleSheet.create({
        main_dash_bacs :{
            backgroundColor: '#fff',
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 30,
        },
        hondalogo: {
            width: 120,
            height: 27,
        },
          checkboxContainer: {
            flexDirection: "row",
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
            width: '100%',
            
          },
          listbox: {
            backgroundColor: '#fff',
            width: '100%',
            flex: 1,
          },
          row_one: {
            flexDirection: "row",
            alignItems: "center",
            width: '100%',
            marginBottom: 6,
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
            marginRight: 3,
          },
          label_inner_date: {
            width: '49%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
            marginLeft: 3,
          },
          label_cols2: {
            width: '49%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
          },
          label_cols3: {
            width: '32%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
            //marginRight: 3,
            minHeight: 50,
          },
          label_cols4: {
            width: '24%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
            //marginRight: 3,
            minHeight: 50,
          },
          label_cols1: {
            width: '100%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
            minHeight: 50,
          },
          new_reportsheding:{
              marginTop: 25,
              marginBottom: 10,
              fontSize: 18,
              color: '#000',

          },
          spaces: {
              height: 8,
          },
          text_labels:{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
                fontWeight: '700',
                fontSize: 13, 
          },
          cardview:{
              padding: 10,
              marginTop: 10,
              backgroundColor: '#fff',
          }

    });
    const [isSelected, setSelection] = useState(false);
    const item = route.params.info
    console.log(item)
    const status = (status) =>{
      console.log(status)
      if(status == "N"){
        return "New"
      }
    }
    const handleApprove = async () =>{
      alert("here")
      const value = await AsyncStorage.getItem('approved');
      if(value !== null){
         let arr = value.split(',');
         arr.push(item.Doc_Number);
         await AsyncStorage.setItem('approved', arr.toString())
      }else{
        let arr = [];
        arr.push(item.Doc_Number)
        await AsyncStorage.setItem('approved', arr.toString())
      }
     Toast.show('Approved Successfully', Toast.LONG,Toast.CENTER);
    }
    const handleReject = async()=>{
      const value = await AsyncStorage.getItem('approved');
      if(value !== null){
         let arr = value.split(',');
         arr.push(item.Doc_Number);
         await AsyncStorage.setItem('approved', arr.toString())
      }else{
        let arr = [];
        arr.push(item.Doc_Number)
        await AsyncStorage.setItem('approved', arr.toString())
      }
      Toast.show('Rejected Successfully', Toast.LONG,Toast.CENTER); 
    }
    return (
        <React.Fragment>
          <ScrollView style={styles.scrollView}>
            <View style={styles.main_dash_bacs}>
                <View>
                    <Image style={styles.hondalogo} source={require('./../assets/hondamain_logo.png')} />
                </View>

                <Text style={styles.new_reportsheding}>Invoice Report</Text>

                <View style={styles.checkboxContainer}>
                    <View style={styles.listbox}>
                      <View style={styles.row_one_last}>
                        <View style={styles.label_cols3}>
                            <Text style={styles.text_labels}>Doc Date :</Text>
                            <Text>{Moment(item.Doc_Date).format('DD-MM-YYYY')}</Text> 
                        </View>
                        <View style={styles.label_cols3}>
                            <Text style={styles.text_labels}>Doc Type :</Text> 
                            <Text>{item.Doc_Type}</Text> 
                        </View>
                        <View style={styles.label_cols3}>
                            <Text style={styles.text_labels}>Doc Number :</Text> 
                            <Text>{item.Doc_Number}</Text> 
                        </View>
                      </View>
                      <View style={styles.spaces}></View>
                      <View style={styles.row_one_last}>
                        <View style={styles.label_cols3}>
                            <Text style={styles.text_labels}>Stat :</Text>
    <Text>{status(item.STAT)}</Text>
                        </View>
                        <View style={styles.label_cols3}>
                            <Text style={styles.text_labels}>User ERP Code :</Text> 
                            <Text>{item.user_ERP_code}</Text> 
                        </View>
                        <View style={styles.label_cols3}>
                            <Text style={styles.text_labels}>Amount :</Text> 
                            <Text>Rs. {item.Amount}/-</Text> 
                        </View>
                      </View>
                      <View style={styles.spaces}></View>
                      <View style={styles.row_one_last}>
                          <View style={styles.label_cols1}>
                            <Text style={styles.text_labels}>HDR Desc</Text> 
                            <Text>{item.HDR_Desc}</Text> 
                          </View>
                      </View>
                      <View style={styles.spaces}></View>
                      <View style={styles.row_one_last}>
                      <View style={styles.label_cols1}>
                            <Text style={styles.text_labels}>Remarks</Text> 
                            <Text>{item.Remarks}</Text> 
                          </View> 
                      </View>
                    </View>
                </View>

                {item.lineItems.map(item=>(<Card style={styles.cardview}>
                    <View style={styles.row_one_last}>
                        <View style={styles.label_cols2}>
                        <Text style={styles.text_labels}>Material Number </Text> 
                        <Text>{item.Material_Number}</Text> 
                        </View>

                        <View style={styles.label_cols2}>
                        <Text style={styles.text_labels}>Unit of Measure</Text> 
                        <Text>{item.Unit_of_Measure}</Text> 
                        </View>
                    </View>
                    <View style={styles.spaces}></View>
                    <View style={styles.row_one_last}>
                        <View style={styles.label_cols3}>
                        <Text style={styles.text_labels}>Quantity</Text> 
                        <Text>{item.Quantity}</Text> 
                        </View>

                        <View style={styles.label_cols3}>
                        <Text style={styles.text_labels}>Rate</Text> 
                        <Text>{item.Rate}</Text> 
                        </View>

                        {/* <View style={styles.label_cols4}>
                        <Text style={styles.text_labels}>Amount</Text> 
                        <Text>Rs. {item.Amount}/-</Text> 
                        </View> */}

                        <View style={styles.label_cols3}>
                        <Text style={styles.text_labels}>TAX%</Text> 
                        <Text>{item.TAX}%</Text> 
                        </View>
                    </View>
                    <View style={styles.spaces}></View>
                    <View style={styles.row_one_last}>
                        <View style={styles.label_cols1}>
                            <Text style={styles.text_labels}>Amount</Text> 
                            <Text>Rs. {item.Amount}/-</Text>  
                        </View>
                    </View>
                    <View style={styles.spaces}></View>
                    
                    <View style={styles.row_one_last}>
                        <View style={styles.label_cols1}>
                            <Text style={styles.text_labels}>Material Description</Text> 
                            <Text>{item.Material_Description}</Text> 
                        </View>
                    </View>

                    <View style={styles.spaces}></View>

                    <View style={styles.row_one_last}>
                        <View style={styles.label_cols1}>
                            <Text style={styles.text_labels}>Remarks </Text> 
                            <Text>{item.Remarks}</Text> 
                        </View>
                    </View>
                </Card>))}



                
                
            </View>

            <View style={{ width: '100%', flex: 1, height: 50, alignItems: 'center', justifyContent: 'center', }}>
          <View style={{width: '100%', flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: '50%', color: '#fff',  height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#41D86A' }}>
              <View>
                <Text onPress={handleApprove} style={{color: '#fff', fontSize: 18,}}>
                  Approved
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ color: '#fff', width: '50%',height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E51B2F' }}>
              <View>
                <Text onPress={handleReject} style={{color: '#fff', fontSize: 18,}}>
                  Cancel
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
               
            </ScrollView>

            
        </React.Fragment>
      );

}