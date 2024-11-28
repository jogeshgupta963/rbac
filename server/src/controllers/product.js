class ProductController {
    async createProduct(req, res, next) {
        try {
            return res.status(201).json({
                success: true,
                data: "Product Created",
            });
        } catch (err) {
            next(err);
        }
    }
    async getProduct(req, res, next) {
        try {
            return res.status(200).json({
                success: true,
                data: "Product Fetched",
            });
        } catch (err) {
            next(err);
        }
    }
    async getProductById(req, res, next) {
        try {
            const id = req.params.userId;
            return res.status(200).json({
                success: true,
                data: "Product Id feetched",
            });
        } catch (err) {
            next(err);
        }
    }
    async updateProduct(req, res, next) {
        try {
            return res.status(200).json({
                success: true,
                data: "Product Updated",
            });
        } catch (err) {
            next(err);
        }
    }

    async deleteProductById(req, res, next) {
        try {
            const id = req.params.userId;
            return res.status(200).json({
                success: true,
                data: "Product Deleted",
            });
        } catch (err) {
            next(err);
        }
    }
}
export const productController = new ProductController();
