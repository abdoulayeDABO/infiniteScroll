# Infinite Scrolling Demo with React Query 🚀

This project demonstrates infinite scrolling implementation using React Query in an Expo application.

## 🎥 Demo

<video width="630" height="300" src="https://github.com/user-attachments/assets/8f9e4efa-6d7b-4365-a224-25123b73545c" controls></video>

## ✨ Features

- Infinite scrolling implementation
- Data fetching with React Query
- Smooth loading states
- Efficient data caching
- Pull-to-refresh functionality (in progress)

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

## 🤝 Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## 📚 Resources

- [React Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
- [Expo Documentation](https://docs.expo.dev/)
- [Infinite Scrolling Guide](https://tanstack.com/query/latest/docs/react/guides/infinite-queries)
