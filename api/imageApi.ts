// GET https://boringapi.com/api/v1/photos
// Fetch a list of photos with optional search, pagination, and sorting.

// Query Parameters:

// search (string, optional): Search for photos by title or description.
// page (integer, optional): The page number of photos to return (default: 1).
// limit (integer, optional): The number of photos to return per page (default: 10, min: 1, max: 100).
// sort_by (string, optional): The field to sort photos by (default: 'id'). Possible values: 'id', 'title', 'file_size', 'width', 'height', 'created_at', 'updated_at'.
// sort_order (string, optional): The order to sort photos by (default: 'desc'). Possible values: 'asc', 'desc'.

async function listImages(
  search,
  page = 1,
  limit = 10,
  sortBy = 'id',
  sortOrder = 'desc'
) {
  const params = new URLSearchParams({
    search,
    page,
    limit,
    sort_by: sortBy,
    sort_order: sortOrder,
  });
  const response = await fetch(
    `https://boringapi.com/api/v1/photos/?${params.toString()}`
  );
  return response.json();
}

// {
//   "success": true,
//   "message": "Here are 2 random photos!",
//   "photos": [
//     {
//       "id": 3,
//       "title": "Random Photo Title 1",
//       "description": "Random Photo Description 1",
//       "url": "full photo URL 1",
//       "file_size": 130.2,
//       "width": 1024,
//       "height": 768,
//       "created_at": "2023-01-01T00:00:00",
//       "updated_at": "2023-01-01T00:00:00"
//     },
//     {
//       "id": 7,
//       "title": "Random Photo Title 2",
//       "description": "Random Photo Description 2",
//       "url": "full photo URL 2",
//       "file_size": 150.3,
//       "width": 800,
//       "height": 600,
//       "created_at": "2023-01-01T00:00:00",
//       "updated_at": "2023-01-01T00:00:00"
//     }
//   ]
// }
