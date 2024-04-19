import { useQuery } from "react-query";
import axios from "axios";

const fetchLawyerDetails = async () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"; // استبدال YOUR_AUTH_TOKEN بتوكن المصادقة الخاص بك
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    "https://ymtaz.sa/api/client/lawyer/5218",
    config
  );
  console.log(response.data.data);
  if (response.status !== 200) {
    throw new Error("Failed to fetch lawyer details");
  }
  return response.data.data;
};

const useLawyerDetails = () => {
  return useQuery("lawyerDetails", fetchLawyerDetails);
};

export default useLawyerDetails;
