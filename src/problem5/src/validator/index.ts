import { NextFunction, Request, Response } from "express";
import { ContextRunner, validationResult } from "express-validator";

export const validate = (validations: ContextRunner[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req) as any;
            if (result.errors.length) break;
        }

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};
