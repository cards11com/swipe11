import { NextRequest, NextResponse } from "next/server";

// Substack API endpoint format: https://[publication].substack.com/api/v1/free
// You can also use their direct API with an API key

export async function POST(request: NextRequest) {
  console.log("[Subscribe API] Received request");
  
  try {
    const body = await request.json();
    const { email } = body;
    
    console.log("[Subscribe API] Email:", email);

    // Validate email
    if (!email || !isValidEmail(email)) {
      console.log("[Subscribe API] Invalid email");
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get Substack configuration from environment variables
    const substackUrl = process.env.SUBSTACK_PUBLICATION_URL;
    const substackApiKey = process.env.SUBSTACK_API_KEY;

    console.log("[Subscribe API] Substack URL:", substackUrl);

    if (!substackUrl) {
      console.error("[Subscribe API] SUBSTACK_PUBLICATION_URL is not configured");
      return NextResponse.json(
        { success: false, error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    // Substack API endpoint for adding free subscribers
    // Format: https://[publication].substack.com/api/v1/free
    const subscribeEndpoint = `${substackUrl}/api/v1/free`;
    
    console.log("[Subscribe API] Calling:", subscribeEndpoint);

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "Swipe11-Website/1.0",
    };

    // If API key is provided, use authenticated API
    // Substack's authenticated API uses Bearer token
    if (substackApiKey) {
      headers["Authorization"] = `Bearer ${substackApiKey}`;
    }

    const requestBody = {
      email,
      first_url: request.headers.get("referer") || "https://swipe11.com",
      first_referrer: "",
      current_url: request.headers.get("referer") || "https://swipe11.com",
      current_referrer: "",
    };

    console.log("[Subscribe API] Request body:", JSON.stringify(requestBody));

    const response = await fetch(subscribeEndpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    const responseText = await response.text();
    console.log("[Subscribe API] Response status:", response.status);
    console.log("[Subscribe API] Response body:", responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { raw: responseText };
    }

    // Substack returns 200 for success, 400 for already subscribed
    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Successfully subscribed! Please check your email to confirm.",
      });
    }

    // Handle specific Substack error responses
    if (response.status === 400) {
      // Could be already subscribed or invalid email
      const errorMessage =
        responseData?.error || responseData?.message || "This email may already be subscribed";
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 400 }
      );
    }

    // Log error for debugging
    console.error("[Subscribe API] Substack API error:", {
      status: response.status,
      data: responseData,
    });

    return NextResponse.json(
      { success: false, error: "Failed to subscribe. Please try again later." },
      { status: response.status }
    );
  } catch (error) {
    console.error("[Subscribe API] Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
