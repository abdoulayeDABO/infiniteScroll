import { Product } from '@/types/ProductTypes';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const ListItem = ({ product }: { product: Product }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.details}>Brand: {product.brand}</Text>
        <Text style={styles.details}>Model: {product.model}</Text>
        <Text style={styles.details}>Color: {product.color}</Text>
        {product.discount > 0 && (
          <Text style={styles.discount}>Discount: {product.discount}%</Text>
        )}
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.category}>{product.category}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5, // For Android
    marginBottom: 20,
    padding: 15,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardBody: {
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  details: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  discount: {
    fontSize: 14,
    color: '#E91E63',
    marginTop: 10,
  },
  cardFooter: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    fontSize: 14,
    color: '#777',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListItem;
