import {
    ImageBackground,
    StyleSheet,
    Text,
    // TouchableOpacity,    
    View,
  } from "react-native";
  import React from "react";
  import { useRouter } from "expo-router";
  import Animated, { FadeInRight } from "react-native-reanimated";
  import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
  
  const Page = () => {
    const router = useRouter();
  
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <View style={styles.wrapper}>
            <Animated.Text
              style={styles.title}
              entering={FadeInRight.delay(500).duration(500)}
            >
              Stay Updated
            </Animated.Text>
            <Animated.Text
              style={styles.description}
              entering={FadeInRight.delay(700).duration(500)}
            >
              Get update news and make update your knowledge also make personilize
              your test. So get update and update yours self.
            </Animated.Text>
  
            <Animated.View entering={FadeInRight.delay(1000).duration(500)}>
             
              <Button 
                mode="contained"
                onPress={() => router.replace("/(tabs)")}
              >
                <Text style={styles.btnText}>Get Start</Text>
              </Button>

            </Animated.View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Page;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      justifyContent: "flex-end",
      paddingBottom: 50,
      paddingHorizontal: 30,
      gap: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 24,
      fontWeight: "600",
      letterSpacing: 1.5,
      lineHeight: 36,
      textAlign: "center",
    },
    description: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "500",
      letterSpacing: 1.2,
      lineHeight: 22,
      textAlign: "center",
    },
    btn: {
      backgroundColor: "#9c93c9",
      paddingVertical: 15,
      marginVertical: 20,
      alignItems: "center",
    },
    btnText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "500",
    },
  });