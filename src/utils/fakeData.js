import productImgOne from "../assets/Rectangle 1 (1).png";
import productImgTwo from "../assets/Rectangle 1 (2).png";
import productImgThree from "../assets/Rectangle 1 (3).png";
import productImgFour from "../assets/Rectangle 1 (4).png";
import productImgFive from "../assets/Rectangle 1 (5).png";
import productImgSix from "../assets/Rectangle 1 (6).png";

import topSellProductOne from "../assets/topseller/headphone-removebg-preview.png";
import topSellProductTwo from "../assets/topseller/lipbam.jpg";
import topSellProductThree from "../assets/topseller/shoes-removebg-preview.png";
import topSellProductFour from "../assets/topseller/snakears.jpg";

const products = [
    {
        id: 1,
        title: "Stylish Sneakers",
        price: 79.99,
        image: productImgOne
    },
    {
        id: 2,
        title: "Classic Leather Jacket",
        price: 159.99,
        image: productImgTwo
    },
    {
        id: 3,
        title: "Modern Backpack",
        price: 49.99,
        image: productImgThree
    },
    {
        id: 4,
        title: "Elegant Wristwatch",
        price: 129.99,
        image: productImgFour
    },
    {
        id: 5,
        title: "Comfy Hoodie",
        price: 59.99,
        image: productImgFive
    },
    {
        id: 6,
        title: "Casual T-Shirt",
        price: 29.99,
        image: productImgSix
    },
    {
        id: 7,
        title: "Stylish Sneakers",
        price: 79.99,
        image: productImgOne
    },
    {
        id: 8,
        title: "Modern Backpack",
        price: 49.99,
        image: productImgThree
    },
];

const topSellers = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 99.99,
        image: topSellProductOne
    },
    {
        id: 2,
        title: "Organic Lip Balm",
        price: 14.99,
        image: topSellProductTwo
    },
    {
        id: 3,
        title: "Running Shoes",
        price: 89.99,
        image: topSellProductThree
    },
    {
        id: 4,
        title: "Silver Snake Earrings",
        price: 19.99,
        image: topSellProductFour
    }
];

const Founder = [
    {
        id: 1,
        name: "HM Jawad",
        image: "https://i.ibb.co/0nfmySZ/Rectangle-8-3.png"
    },
    {
        id: 2,
        name: "Furqan Abid",
        image: "https://i.ibb.co/QbffGTn/Rectangle-8.png"
    },
    {
        id: 3,
        name: "Abdullah Ah",
        image: "https://i.ibb.co/DfM5Q1Q/Rectangle-8-2.png"
    },
    {
        id: 4,
        name: "Abrar Khan",
        image: "https://i.ibb.co/1GfXRKt/Rectangle-8-1.png"
    }
]

const reviews = [
    {
        id: 1,
        name: "Stacy",
        image: "https://i.ibb.co/JQZnGfm/unsplash-6-W4-F62s-N-y-I.png",
        review: "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
        rating: 5
    },
    {
        id: 2,
        name: "Tiffany",
        image: "https://i.ibb.co/dLPLqP2/unsplash-6-W4-F62s-N-y-I-1.png",
        review: "I ordered a few items from your website and I received them on time. I am very satisfied with the quality of products.",
        rating: 4
    },
    {
        id: 3,
        name: "James",
        image: "https://i.ibb.co/Pxxrn13/unsplash-6-W4-F62s-N-y-I-2.png",
        review: "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
        rating: 3
    }
]

const fakeData = {
    products,
    topSellers,
    Founder,
    reviews
};

export default fakeData;
