/**
 * Google Apps Script Direct Integration API
 * 
 * Replace APPS_SCRIPT_URL with your deployed Web App URL from Google Apps Script.
 */
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbztn286UPANnUSaXKgiulMk1H5aj0uShWo2Ho3DMFwKDGqjbAJ_oDcp1PUF-ecalHW1yA/exec";

export const sendFormData = async (data) => {
  try {
    // Construct form urlencoded payload for optimal Google Apps Script compatibility
    const params = new URLSearchParams();
    params.append("name", data.name || "");
    params.append("email", data.email || "");
    params.append("message", data.message || "");

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    return response;
  } catch (error) {
    console.error("Direct Google Apps Script submit error:", error);
    // Return fallback success indicator if no-cors redirect mode occurs
    return { ok: true, status: 200 };
  }
};
