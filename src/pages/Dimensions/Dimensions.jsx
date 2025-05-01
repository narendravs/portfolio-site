import React, { useEffect, useState } from "react";

// --- The Custom Hook ---
// Export it as the default export

// 1. Helper function to get current dimensions
function getWindowDimensions() {
  // Check if window exists (important for SSR or environments without a window)
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  // Return default values if window is not available
  return {
    width: 0,
    height: 0,
  };
}
export default function useWindowDimensions() {
  // 2. State to store the dimensions
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions() // Initialize state with current dimensions
  );

  // 3. Effect to handle resizing
  useEffect(() => {
    // Function to update state when resize happens
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup function: Remove event listener when the component unmounts
    // This prevents memory leaks!
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  // Destructure width for easier use (optional)
  // --- Return the value(s) you want to share ---
  return windowDimensions; // Return the object containing width and height
}
