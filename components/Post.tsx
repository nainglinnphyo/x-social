// import { Image } from "react-native";
// import React from "react";
// import { View, Text } from "./Themed";
// import PostBottomBar from "./PostBottomBar";

// const Post = ({ item }: any) => {
//   return (
//     <View
//       style={{ borderBottomColor: "#f2f2f2", borderBottomWidth: 1 }}
//       onLayout={(event) => {
//         const width = event.nativeEvent.layout.width;
//         setItemWidths((prevWidths:any) => [...prevWidths, width]);
//       }}
//     >
//       <View
//         darkColor="#0d0d0d"
//         style={{
//           paddingVertical: 10,
//           paddingHorizontal: 12,
//           position: "relative",
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             width: "100%",
//             paddingVertical: 10,
//           }}
//         >
//           <View style={{ width: "12%" }}>
//             <Image source={require("../assets/images/avatar.png")} />
//           </View>
//           <View style={{ width: "88%", paddingHorizontal: 8 }}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Text
//                 lightColor="#000"
//                 darkColor="#fff"
//                 style={{ fontWeight: "800" }}
//               >
//                 {item.username}
//               </Text>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   width: "20%",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Text darkColor="#fff" lightColor="#a0a0a0">
//                   {item.ago}
//                 </Text>
//                 <Image source={require("../assets/images/3dots.png")} />
//               </View>
//             </View>
//             <Text
//               lightColor="#000"
//               darkColor="#fff"
//               style={{
//                 flexWrap: "wrap",
//                 paddingVertical: 6,
//               }}
//             >
//               {item.post}
//             </Text>
//             <View style={{ marginVertical: 5 }}>
//               <PostBottomBar isLike={item.isLike} />
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Post;
