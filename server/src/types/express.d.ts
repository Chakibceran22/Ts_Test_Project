import { Request, Response } from "express";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name?: string;
            };
            sessionId?: string; // Optional session ID for tracking
        }

        interface Response {
            sendError: (message: string, statusCode?: number) => void;
            sendSuccess: (data: any, message?: string) => void;
        }
    }
}