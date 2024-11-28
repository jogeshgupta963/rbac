export const errorHandler = async (err, req, res, next) => {
    console.log(err);
    return res.status(400).json({
        success: false,
        message: err.message,
    });
};
