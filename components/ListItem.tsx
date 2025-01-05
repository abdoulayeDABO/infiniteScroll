import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ListItem = ({ product }: { product: Product }) => {
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={product.thumbnail}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <View style={styles.priceContainer}>
            {product.discountPercentage > 0 && (
              <Text style={styles.originalPrice}>${product.price}</Text>
            )}
            <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>

        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {product.rating}</Text>
            <Text style={styles.stock}>Stock: {product.stock}</Text>
          </View>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: "row",
    padding: 12,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  headerContainer: {
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E7D32",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#FFA000",
    fontWeight: "600",
    marginRight: 8,
  },
  stock: {
    fontSize: 12,
    color: "#666",
  },
  categoryBadge: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    color: "#1976D2",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#1976D2",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ListItem;
