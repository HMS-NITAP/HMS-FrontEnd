/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, TouchableOpacity, Linking, ScrollView, Platform } from 'react-native';

const HostelBlockCard = ({ data }) => {
    const [isTextActive, setIsTextActive] = useState(false);
    const animatedValue = useState(new Animated.Value(0))[0];

    const handleAnimationView = async() => {
        setIsTextActive(!isTextActive);
        Animated.timing(animatedValue,{
          toValue : isTextActive ? 0 : 1,
          duration : 500,
          useNativeDriver : true,
      }).start();
    }

    const styles = StyleSheet.create({
        card: {
            width: "100%",
            height: 400, 
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#fff",
            ...Platform.select({
                ios: {
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 20,
                },
                android: {
                    elevation: 10,
                },
            }),
            overflow:'hidden',
        },
        image: {
            width: "100%",
            height: 220,
            borderRadius: 10,
            resizeMode: 'cover',
            zIndex: 1,
        },
        textContainer1: {
            width : "100%",
            paddingHorizontal: 15,
            paddingVertical: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 1,
            alignItems: 'start',
            gap: 25,
        },
        textContainer2: {
            position: 'absolute',
            backgroundColor: "white",
            width: '100%',
            // height: 380,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 30,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            zIndex: 10,
            gap: 30,
            minHeight : 380,
        },
        name:{
            color: 'black',
            fontSize: 20,
            fontWeight: "800",
        },
        scrollView: {
          flex: 1,
        },
        caption: {
            color: "#343a40",
            fontSize: 14,
            fontWeight: "500",
        },
        values: {
            color: "#4361ee",
            fontSize: 14,
            fontWeight: "500",
        }
    });

    let cardAnimation = {
        transform : [
            {
                translateY : animatedValue.interpolate({
                    inputRange : [0,1],
                    outputRange : [380,0]
                })
            }
        ]
    }

    return (
        <Animated.View style={styles.card}>
            <Image style={styles.image} source={data?.image} />
            <View style={styles.textContainer1}>
                <View style={{gap:1}}>
                    <Text style={styles.name}>{data?.blockName}</Text>
                    <Text style={{color:"black",fontWeight:"400"}}>Room Type : <Text style={{color:"black",fontWeight:"400"}}>{data?.roomType}</Text></Text>
                    <Text style={{color:"black",fontWeight:"400"}}>Capacity : <Text style={{color:"black",fontWeight:"400"}}>{data?.capacity}</Text></Text>
                </View>
                <TouchableOpacity onPress={handleAnimationView}><Text style={{ textAlign: 'right', fontWeight: '700' }}>Know More...</Text></TouchableOpacity>
            </View>
            <Animated.View style={[styles.textContainer2,cardAnimation]}>
                <ScrollView style={styles.scrollView}>
                    <View style={{gap:50}}>
                        <View style={{gap:1}}>
                            <Text style={styles.name}>{data?.blockName}</Text>
                            <Text style={{color:"black",fontWeight:"400"}}>Room Type : <Text style={{color:"black",fontWeight:"400"}}>{data?.roomType}</Text></Text>
                            <Text style={{color:"black",fontWeight:"400"}}>Capacity : <Text style={{color:"black",fontWeight:"400"}}>{data?.capacity}</Text></Text>
                        </View>
                        <View style={{gap:15, width : "100%"}}>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>Warden Contact :</Text>
                            <View style={{gap:5,width : "100%"}}>
                                <Text style={styles.caption}>{data?.wardenName}</Text>
                                <Text style={{color:"black",fontWeight:"400"}}>Phone : <Text style={styles.values} onPress={() => (Linking.openURL(`tel:${data?.wardenPhone}`))}>{data?.wardenPhone}</Text></Text>
                                <Text style={{color:"black",fontWeight:"400"}}>Email : <Text style={styles.values} onPress={() => (Linking.openURL(`mailto:${data?.wardenEmail}`))}>{data?.wardenEmail}</Text></Text>
                                {
                                    data?.linkedIn ? (<Text style={{color:"black",fontWeight:"400"}}>LinkedIn : <Text style={styles.values} onPress={() => (Linking.openURL(`${data?.linkedIn}`))}>{data?.linkedIn}</Text></Text>) : (<Text />)
                                }
                            </View>
                        </View>
                    </View>
                    {/* <View style={{gap:50}}>
                        <View style={{gap:1}}>
                            <Text style={styles.name}>{data?.blockName}</Text>
                            <Text style={{color:"black",fontWeight:"400"}}>Room Type : <Text style={{color:"black",fontWeight:"400"}}>{data?.roomType}</Text></Text>
                            <Text style={{color:"black",fontWeight:"400"}}>Capacity : <Text style={{color:"black",fontWeight:"400"}}>{data?.capacity}</Text></Text>
                        </View>
                        <View style={{gap:15, width : "100%"}}>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>Warden Contact :</Text>
                            <View style={{gap:5,width : "100%"}}>
                                <Text style={styles.caption}>{data?.wardenName}</Text>
                                <Text style={{color:"black",fontWeight:"400"}}>Phone : <Text style={styles.values} onPress={() => (Linking.openURL(`tel:${data?.wardenPhone}`))}>{data?.wardenPhone}</Text></Text>
                                <Text style={{color:"black",fontWeight:"400"}}>Email : <Text style={styles.values} onPress={() => (Linking.openURL(`mailto:${data?.wardenEmail}`))}>{data?.wardenEmail}</Text></Text>
                                {
                                    data?.linkedIn ? (<Text style={{color:"black",fontWeight:"400"}}>LinkedIn : <Text style={styles.values} onPress={() => (Linking.openURL(`${data?.linkedIn}`))}>{data?.linkedIn}</Text></Text>) : (<Text />)
                                }
                            </View>
                        </View>
                    </View> */}
                </ScrollView>
                <TouchableOpacity style={{ textAlign: 'right', fontWeight: '700' }} onPress={handleAnimationView} ><Text>Know Less...</Text></TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
}

export default HostelBlockCard;
