import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {requested: 1});

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: "Rate limit reached" });
            }

            if (decision.reason.isBot()) {
                return res.status(403).json({ error: "Bot detected" });
            }

            return res.status(403).json({ error: "Access Denied" }); // fallback
        }

        next()
    } catch (e) {
        console.error(`Arcjet middleware error: ${e}`);
        next(e);
    }
}

export default arcjetMiddleware;