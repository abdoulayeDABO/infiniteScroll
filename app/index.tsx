// import fetchProducts from '@/api/productApi'
// import ListItem from '@/components/ListItem'
// import { useInfiniteQuery } from '@tanstack/react-query'
// import { StatusBar } from 'expo-status-bar'
// import React from 'react'
// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import * as Progress from 'react-native-progress'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {

//   const {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     status
//   } = useInfiniteQuery({
//     queryKey: ['products'],
//     queryFn: fetchProducts,
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allPages, lastPageParam) => {
//       if (lastPage.length === 0) {
//         return undefined
//       }
//       return lastPageParam + 1
//     }
//   })

//   // console.log(data);

//   const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize } : any) => {
//   const paddingToBottom = 20;
//   return layoutMeasurement.height + contentOffset.y >=
//     contentSize.height - paddingToBottom;
// };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="dark" />
//       <Text style={styles.title}>Products</Text>
//       {
//         status === 'error' ? (
//           <Text>Error: {(error as Error).message}</Text>
//         ) : (

//           <ScrollView style={{ flex: 1 }}
//               onScroll={({nativeEvent}) => {
//                 if (isCloseToBottom(nativeEvent) && !isFetching && hasNextPage) {
//                   fetchNextPage();
//                 }
//               }}
//               scrollEventThrottle={500}
//               contentContainerStyle={{ paddingBottom: 20 }}
//             >
//             {
//               data && data.pages.map((group, i) =>
//                 group.products.map((product: any) => <ListItem product={product} />))
//             }
//           </ScrollView>
//         )
//       }

//       {isFetching && (
//         <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20, }}>
//           <Progress.Circle size={35} borderWidth={3} indeterminate={true} color='#0C0C0C' />
//         </View>
//       )}
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         padding: 10,
//   },
//     title: {
//         fontSize: 30,
//         textAlign: 'center',
//         marginBottom: 30,
//     },
// })

import fetchProducts from "@/api/productApi";
import ListItem from "@/components/ListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => fetchProducts({ page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage.length === 0) {
          return undefined;
        }
        return lastPageParam + 1;
      },
    });

  const renderItem = ({ item }: any) => <ListItem product={item} />;

  // Function to handle when the user reaches the bottom of the list
  const handleEndReached = () => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>All products</Text>

      {status === "error" ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          style={{ paddingBottom: 20, width: "100%" }}
          data={data?.pages.flatMap((page) => page.data.data)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleEndReached}
        />
      )}

      {isFetching && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Progress.Circle
            size={30}
            borderWidth={3}
            indeterminate={true}
            color="#0C0C0C"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
});
