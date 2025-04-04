export const getUser = async (req, res, next) => {
    try {
        res.status(200).json({
            message: 'Get user details',
            data: {
                user: req.user
            }
        })
    } catch (e) {
        next(e);
    }
}

