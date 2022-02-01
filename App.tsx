import FeedScreen from "./src/screens/FeedScreen"
import { QueryClient, QueryClientProvider } from 'react-query'
import { useStarships } from "./src/hooks/useStarships"
import React from "react"
import { View, Text, SafeAreaViewBase, StyleSheet, SafeAreaView } from "react-native"



const App = () => {
  const queryClient = new QueryClient()


  return (
  <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container}>
    <View>
    <FeedScreen/>
    </View>
    </SafeAreaView>
  </QueryClientProvider>);
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
