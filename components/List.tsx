import { Product } from '@/types/ProductTypes';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

interface Props {
    products: Product[],
    onEndReached: () => void,
}

const List = ({ products, onEndReached }: Props) => {
  return (
    <FlatList
        onEndReached={onEndReached}
        data={products}
        renderItem={({ item }) => <ListItem key={item.id} product={item} />}
        keyExtractor={(item) => item.title}
        style={{}}
        contentContainerStyle={{}}
    />
  )
}

export default List;


const styles = StyleSheet.create({
  
})