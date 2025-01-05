// Example: List all employees with parameters
async function listEmployees(
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
    `https://boringapi.com/api/v1/employees/?${params.toString()}`
  );
  return response.json();
}

// {
//     "success": true,
//     "message": "Employee with ID 123 found!",
//     "employee": {
//         "first_name": "Sean",
//         "last_name": "Daugherty",
//         "phone": "457-260-0713x5913",
//         "birth_date": "1979-08-21T00:00:00",
//         "salary": 17500,
//         "department": "Sales",
//         "created_at": "2024-05-19T07:51:11.028065",
//         "email": "sean.daugherty@boringapi.com",
//         "id": 123,
//         "address": "31105 Olivia Spur\nHensonfurt, MP 58681",
//         "gender": "male",
//         "experience": 25,
//         "is_married": true,
//         "updated_at": "2024-05-19T07:51:11.028065"
//     }
// }
