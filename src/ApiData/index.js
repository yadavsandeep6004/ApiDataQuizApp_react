export async function ApiData() {
  try {
    const LIMIT = 10;
    const BASE_URL = "https://opentdb.com/api.php";
    const API_END_POINT = `${BASE_URL}?amount=${LIMIT}`;

    const res = await fetch(API_END_POINT);
    const response = await res.json();
    return response.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}
