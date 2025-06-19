import {Request, Response, NextFunction} from "express";

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
     console.error("Error occurred:", error);
      if (error.code === 'P2002') {
        res.status(400).json({
            success: false,
            message: "Duplicate entry"
        });
    } else if (error.name === 'ValidationError') {
        res.status(400).json({
            success: false,
            message: error.message
        });
    } else if (error.name === 'JsonWebTokenError') {
        res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}