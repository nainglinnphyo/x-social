import { StyleSheet } from "react-native";
import { Input, SafeAreaView, Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import SearchCard from "../../components/SearchCard";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 30 }}>
      <View style={{ width: "100%"}}>
        <Text style={{ fontWeight: "500", fontSize: 28 }}>Search</Text>
        <View
          style={{
            backgroundColor: "#f2f2f2",
            flexDirection: "row",
            padding: 8,
            borderRadius: 8,
            alignItems: "center",
            marginTop: 4,
            marginBottom:10
            
          }}
        >
          <Ionicons name="search" size={20} />
          <Input
            style={{ paddingHorizontal: 10, width: "90%" }}
            lightColor="#f2f2f2"
            lightTextColor="#000"
            darkTextColor={""}
            placeholder="search"
            lightPlaceholderTextColor="#a0a0a0"
          />
        </View>
        <View>
          <ScrollView>
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
