import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation}) {
    const openMenu =()=>{
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            { /*  icone here later    */ }
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
         <View>
             <Text style={styles.headerText}>
                 
             </Text>
         </View>
        </View>
    )
}


const styles = StyleSheet.create({
     header :{
        width:'100%' ,
        height:'100%' ,
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor:'#38ada9'
     },
     headerText : {
         fontWeight : 'bold',
         fontSize:20,
         color:'#333',
     },
     icon : {
         position:'absolute',
         left:14
     }


})
