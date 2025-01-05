# Infinite Scrolling Demo with React Query 🚀

This project demonstrates infinite scrolling implementation using React Query in an Expo application.

## 🎥 Demo

<video src="https://drive.google.com/file/d/1LRKOA0nJ4TmYptqVO-cw5WgxZhqfBNW3/view?usp=sharing" width="320" height="240" controls></video>

## ✨ Features

- Infinite scrolling implementation
- Data fetching with React Query
- Smooth loading states
- Efficient data caching
- Pull-to-refresh functionality

## 🛠 Technical Implementation

This project uses:

- [React Query](https://tanstack.com/query/latest) for efficient data fetching and caching
- [Expo](https://expo.dev) as the development platform
- File-based routing with Expo Router

### Key Features Implementation

```typescript
// Example of infinite scroll implementation
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchPageItems,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
```

## 📱 Running the App

You can run the app in:

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## 🤝 Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## 📚 Resources

- [React Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
- [Expo Documentation](https://docs.expo.dev/)
- [Infinite Scrolling Guide](https://tanstack.com/query/latest/docs/react/guides/infinite-queries)

## 💬 Community

- [Discord community](https://chat.expo.dev)
- [GitHub repository](https://github.com/expo/expo)
