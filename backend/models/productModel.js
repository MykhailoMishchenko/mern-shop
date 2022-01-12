import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    frameForGlasses: {
        type: String,
        required: true,
    },
    frameMaterial: {
        type: String,
        required: true,
    },
    lensColor: {
        type: String,
        required: true,
    },
    polarization: {
        type: Boolean,
        required: true,
        default: false
    },
    mirrored: {
        type: Boolean,
        required: true,
        default: false
    },
    gradient: {
        type: Boolean,
        required: true,
        default: false
    },
    lensMaterial: {
        type: String,
        required: true,
    },
    sale: {
        type: Boolean,
        required: true,
        default: false
    },
    percent: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema)

export default Product;