const API_URL = 'http://localhost:5000';

// Function to fetch data
export async function fetchData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

// Function to create data
export async function createData(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const createdData = await response.json();
  return createdData;
}

// Function to update data
export async function updateData(endpoint, id, data) {
  const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const updatedData = await response.json();
  return updatedData;
}

// Function to delete data
export async function deleteData(endpoint, id) {
  const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return;
}
