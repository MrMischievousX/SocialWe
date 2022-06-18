import { Image, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { profileBg } from "../assets/images";
import { Text, View } from "../components/Themed";
import Window, { scale, verticalScale } from "../constants/Layout";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Fragment } from "react";

const { width, height } = Window;

export default function ProfileScreen(props: any) {
  const theme = useColorScheme();

  const CText = ({
    title,
    value,
    flex,
  }: {
    title: string;
    value: string;
    flex: number;
  }) => {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          flex,
        }}
      >
        <Text
          style={{
            ...styles.username,
            color: Colors[theme].gray,
            marginTop: 0,
          }}
        >
          {title}
        </Text>
        <Text style={{ ...styles.name, marginTop: verticalScale(8) }}>
          {value}
        </Text>
      </View>
    );
  };

  const data = [
    {
      height: 300,
      id: "1",
    },
    {
      height: 150,
      id: "2",
    },
    {
      height: 152,
      id: "3",
    },
    {
      height: 200,
      id: "4",
    },
    {
      height: 130,
      id: "5",
    },
    {
      height: 100,
      id: "6",
    },
    {
      height: 120,
      id: "7",
    },
    {
      height: 132,
      id: "8",
    },
    {
      height: 151,
      id: "9",
    },
    {
      height: 202,
      id: "10",
    },
    {
      height: 131,
      id: "11",
    },
    {
      height: 101,
      id: "12",
    },
    {
      height: 125,
      id: "13",
    },
    {
      height: 136,
      id: "14",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={profileBg}
          style={styles.imgBackground}
          resizeMode="cover"
        >
          <View
            style={{
              backgroundColor: "transparent",
              //   flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: width * 0.8,
            }}
          >
            <View
              style={{
                ...styles.bgContainer,
                borderColor: Colors[theme].black,
              }}
            >
              <View style={styles.bgSubContainer}>
                <Image
                  resizeMode="cover"
                  style={styles.img}
                  source={{
                    uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
                  }}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.name}>John Doe</Text>
              <Text style={{ ...styles.username, color: Colors[theme].gray }}>
                @johndoe
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: width * 0.78,
              alignSelf: "center",
              backgroundColor: "transparent",
              marginTop: verticalScale(54),
            }}
          >
            <CText title={"Posts"} value={"35"} flex={1} />
            <CText title={"Followers"} value={"1,552"} flex={2} />
            <CText title={"Follows"} value={"128"} flex={1} />
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            width: scale(300),
            backgroundColor: "red",
            alignSelf: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ flex: 1 }}>
            <Ionicons
              name="image-outline"
              size={scale(36)}
              color="black"
              ios="ios-add"
              android="md-albums"
              style={{ flex: 1, alignSelf: "center" }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Ionicons
              name="ios-bookmark-outline"
              size={scale(36)}
              color="black"
              style={{ flex: 1, alignSelf: "center" }}
            />
          </View>
        </View>
        <View
          style={{
            width: scale(300),
            alignSelf: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: scale(8),
          }}
        >
          {Array.from([1, 2], (item, num) => {
            return (
              <View>
                {data.map((item, index) => {
                  if (index % 2 === num) {
                    return (
                      <Fragment key={`${item.id}-${index}`}>
                        {console.log(`${item.id}-${index}`)}
                        <Image
                          style={{
                            width: scale(144),
                            height: scale(item.height),
                            borderRadius: scale(18),
                            marginVertical: scale(8),
                            resizeMode: "cover",
                          }}
                          source={{
                            uri: `https://picsum.photos/${item.height}/144`,
                          }}
                        />
                      </Fragment>
                    );
                  }
                  return null;
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
      {/* <Ionicons
        name="arrow-back"
        size={scale(28)}
        color="black"
        style={{
          position: "absolute",
          top: verticalScale(36),
          left: scale(24),
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scroll: {
    flex: 1,
  },
  imgBackground: {
    width: width,
    height: verticalScale(420),
    justifyContent: "center",
    alignItems: "center",
  },
  bgContainer: {
    width: scale(96),
    height: scale(96),
    borderRadius: scale(35),
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
    backgroundColor: "transparent",
    borderWidth: scale(1),
    marginTop: verticalScale(32),
  },
  bgSubContainer: {
    width: scale(86),
    height: scale(86),
    borderRadius: scale(32),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  img: {
    width: scale(96),
    height: scale(96),
    transform: [{ rotate: "-45deg" }],
  },
  name: {
    fontSize: scale(25),
    fontWeight: "700",
    marginTop: verticalScale(28),
  },
  username: {
    fontSize: scale(16),
    fontWeight: "400",
    marginTop: verticalScale(8),
    letterSpacing: scale(0.4),
    lineHeight: scale(24),
  },
});

// <ScrollView
//   {...propsWithoutStyle}
//   style={[{ flex: 1, alignSelf: "stretch" }]}
//   contentContainerStyle={{ paddingHorizontal: 0, alignSelf: "stretch" }}
//   removeClippedSubviews={true}
//   scrollEventThrottle={16}
// >
//   <View
//     style={[
//       {
//         flex: 1,
//         flexDirection: false ? "column" : "row",
//       },
//       style,
//     ]}
//   >
//     {Array.from(Array(2), (_, num) => {
//       return (
//         <View
//           key={`${1}-${num.toString()}`}
//           style={{
//             flex: 1 / 2,
//             flexDirection: false ? "row" : "column",
//           }}
//         >
//   {data
//     .map((el, index) => {
//       if (index % 2 === num) {
//         return (
//           <Image
//             style={{
//               width: scale(144),
//               height: scale((Math.random() * 20 + 12) * 10),
//               borderRadius: scale(18),
//             }}
//             source={{
//
//             }}
//           />
//         );
//       }
//       return null;
//     })
//             .filter((e) => !!e)}
//         </View>
//       );
//     })}
//   </View>
// </ScrollView>
