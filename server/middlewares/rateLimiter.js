const requestCounts = new Map(); 

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const limit = 100;
    const windowMs = 60 * 1000; 

    const now = Date.now();
    
    if (!requestCounts.has(ip)) {
        requestCounts.set(ip, { count: 1, startTime: now });
        return next();
    }

    const userData = requestCounts.get(ip);

    if (now - userData.startTime > windowMs) {
        userData.count = 1;
        userData.startTime = now;
        return next();
    }

    userData.count++;

    if (userData.count > limit) {
        return res.status(429).json({ 
            message: "Too many requests, please try again later." 
        }); 
    }
    next();
};

export default rateLimiter