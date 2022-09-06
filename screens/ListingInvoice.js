//import * as React from 'react';
import React, { useState,useEffect } from "react";
import { View, Text, Image, StyleSheet, CheckBox, TouchableOpacity, ScrollView } from 'react-native';

export default function ListingInvoice({navigation}) {
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
          },
          row_one_last: {
            flexDirection: "row",
            alignItems: "center",
            width: '100%',
            marginBottom: 0,
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
            width: '50%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
          },
          label_cols8: {
            width: '79%',
            backgroundColor: '#F8F8F8',
            borderRadius: 6,
            padding: 6,
            fontSize: 13,
            marginRight: 3,
          },
          view_doc: {
            width: '19%',
            backgroundColor: '#F8B538',
            borderRadius: 30,
            padding: 6,
            marginLeft: 3,
          },
          view_label: {
            color: '#fff',
            fontSize: 13,
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
          new_reportsheding:{
              marginTop: 25,
              marginBottom: 10,
              fontSize: 18,
              color: '#000',

          }

    });
    useEffect(() => {
      fetch('https://wishinteractiveinc.com/honda-erp/Rep_line.json')
        .then((response) => response.json())
        .then((json) => setHeader(json))
        .catch((error) => console.error(error))
    }, []);
    const [listHeader, setHeader] = useState([]);
    const [isSelected, setSelection] = useState(false);
    return (
        <React.Fragment>
          <ScrollView style={styles.scrollView}>
            <View style={styles.main_dash_bacs}>
                <View>
                    <Image style={styles.hondalogo} source={require('./../assets/hondamain_logo.png')} />
                </View>

                <Text style={styles.new_reportsheding}>New Reports</Text>

                {listHeader.map(item=>(<View style={styles.checkboxContainer}>
                    <View style={styles.listbox}>
                      <View style={styles.row_one_last}>
                        <Text style={styles.label_cols8}>Report Name : {item.Report_Name}</Text>
                        <TouchableOpacity style={styles.view_doc}>
                          <Text style={styles.view_label} >View</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>))}
                
            </View>
               
            </ScrollView>

            
        </React.Fragment>
      );

}