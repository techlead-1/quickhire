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

export const updateUser = async (req, res, next) => {
    try {
        let allowedFields = [ 'name', 'location' ]
        if (req.user.role === 'jobseeker') {
            allowedFields = ['name', 'location', 'bio', 'skills', 'resumeUrl'];
        } else if (req.user.role === 'employer') {
            allowedFields = ['name', 'location', 'companyName', 'companyWebsite', 'logoUrl', 'companyDescription'];
        }

        let userData = {}
        for (let field of allowedFields) {
            if (req.body[field] !== undefined) {
                userData[field] = req.body[field];
            }
        }

        let user = req.user;
        Object.assign(user, userData);
        await user.save();

        res.status(200).json({
            success: true,
            message: 'User updated successfully.',
            data: {
                user: user
            }
        })
    } catch (e) {
        next(e);
    }
}

export const uploadUserResume = async (req, res, next) => {
    try {
        const resumeUrl = req.file.path;
        req.user.resumeUrl = resumeUrl;
        await req.user.save();
        res.status(200).json({
            success: true,
            message: 'User resumed uploaded successfully.',
            data: {
                user: req.user
            }
        })
    } catch (e) {
        next(e);
    }
}

export const uploadUserImage = async (req, res, next) => {
    try {
        const imageUrl = req.file.path;
        req.user.imageUrl = imageUrl;
        await req.user.save();
        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully.',
            data: {
                user: req.user
            }
        })
    } catch (e) {
        next(e);
    }
}