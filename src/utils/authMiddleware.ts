import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (
  req: any,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
 
    if (!token) {
      res.status(401).json({ error: "Authentication failed" });
      return;
    }

    const decodedToken: any = jwt.verify(token, "your-secret-key");

    req["userData"] = { userId: decodedToken.userId };

    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};
