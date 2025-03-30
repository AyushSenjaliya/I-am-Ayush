const API_URL = "https://i-am-ayush-be.vercel.app/api/form";

export const sendFormData = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = response;
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};
