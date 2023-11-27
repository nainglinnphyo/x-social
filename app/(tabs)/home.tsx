import React, { useRef, useState } from "react";
import { FlatList, Image } from "react-native";
import { posts } from "../../assets/mockPost";
import { View, Text } from "../../components/Themed";
import PostBottomBar from "../../components/PostBottomBar";

const App = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemHeights, setItemHeights] = useState<any>([]);


  const handleScroll = (event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    let index = 0;

    for (let i = 0; i < itemHeights.length; i++) {
      if (
        contentOffsetY >=
        itemHeights
          .slice(0, i + 1)
          .reduce((sum: any, height: any) => sum + height, 0)
      ) {
        index = i + 1;
      }
    }

    if (currentIndex !== index) {
      setCurrentIndex(index);
      if(currentIndex >= posts.length / 2){
        console.log(currentIndex)
        console.log('data to fetch')
      }
    }
  };

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{ borderBottomColor: "#f2f2f2", borderBottomWidth: 1 }}
        onLayout={(event) => {
          const height = event.nativeEvent.layout.height;
          setItemHeights((prevHeights: any) => [...prevHeights, height]);
        }}
      >
        <View
          darkColor="#0d0d0d"
          style={{
            paddingVertical: 10,
            paddingHorizontal: 12,
            position: "relative",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingVertical: 10,
            }}
          >
            <View style={{ width: "12%" }}>
              <Image source={require("../../assets/images/avatar.png")} />
            </View>
            <View style={{ width: "88%", paddingHorizontal: 8 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  lightColor="#000"
                  darkColor="#fff"
                  style={{ fontWeight: "800" }}
                >
                  {item.username}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "20%",
                    justifyContent: "space-between",
                  }}
                >
                  <Text darkColor="#fff" lightColor="#a0a0a0">
                    {item.ago}
                  </Text>
                  <Image source={require("../../assets/images/3dots.png")} />
                </View>
              </View>
              <Text
                lightColor="#000"
                darkColor="#fff"
                style={{
                  flexWrap: "wrap",
                  paddingVertical: 6,
                }}
              >
                {item.post}
              </Text>
              <View style={{ marginVertical: 5 }}>
                <PostBottomBar isLike={item.isLike} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onScroll={handleScroll}
        // pagingEnabled
        // decelerationRate="fast"
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text>Current Index: {currentIndex}</Text>
      </View>
    </View>
  );
};

export default App;
