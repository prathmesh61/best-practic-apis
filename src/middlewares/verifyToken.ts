import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export interface ExtendedRequest extends Request {
  user?: {
    // Optional user object based on your token payload
    email: string;
  };
}
export const verifyToken = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;

  // Check for missing token
  if (!token) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Missing access token" }); // Use a more specific error message
  }

  try {
    // Verify the token using JWT_SECRET from environment variable
    jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
      if (err) {
        // Handle invalid token errors gracefully
        if (err.name === "JsonWebTokenError") {
          return res
            .status(401)
            .json({ error: "Unauthorized: Invalid token format" });
        } else if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Unauthorized: Token expired" });
        } else {
          // Handle other unexpected errors (e.g., signature verification failed)
          console.error("Unexpected error during token verification:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
      }

      // Attach decoded user data to the request object
      if (user) {
        // If token is valid, attach user data to the request
        req.user = user;
      }
      next(); // Proceed to the protected route handler
    });
  } catch (error) {
    // Handle other potential errors during verification
    console.error("Error in verifyToken middleware:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
