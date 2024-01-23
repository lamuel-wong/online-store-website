/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  // Model Art Products
  {
    id: "ma1",
    title: "Character Design Sheet",
    description:
      "A comprehensive design and reference sheet of your character, essential for illustrations or model creation.",
    price: 15000,
    discontinued: false,
    categories: ["model-art"],
    imageUrl: "images/refSheet.jpg"
  },
  {
    id: "ma2",
    title: "Full Body Live2D Model Art",
    description:
      "Art prepared for a VTuber, a full body illustration of your character, ready for live2D rigging.",
    price: 40000,
    discontinued: false,
    categories: ["model-art"],
    imageUrl: "images/fullBody.jpg"
  },
  {
    id: "ma3",
    title: "Half Body Live2D Model Art",
    description:
      "Art prepared for a VTuber, a half body illustration of your character, ready for live2D rigging.",
    price: 30000,
    discontinued: false,
    categories: ["model-art"],
    imageUrl: "images/halfBody.jpg"
  },
  {
    id: "ma4",
    title: "Chibi Live2D Model Art",
    description:
      "Art prepared for a VTuber, a small cutesy stylized illustration of your character, ready for live2D rigging.",
    price: 15000,
    discontinued: false,
    categories: ["model-art"],
    imageUrl: "images/chibi.png"
  },
  {
    id: "ma5",
    title: "Character Art",
    description: "Art of the character of your choosing with a simple background.",
    price: 15000,
    discontinued: false,
    categories: ["model-art"],
    imageUrl: "images/charArt.jpg"
  },
  {
    id: "ma6",
    title: "Full Illustration",
    description: "Character illustration with a detailed background and composition.",
    price: 30000,
    discontinued: false,
    categories: ["model-art"],
    imageUrl: "images/illustFull.jpg"
  },
  // Model Rigging Products
  {
    id: "mr1",
    title: "Standard Live2D Model Rig",
    description:
      "Standard rigging for Live2D models, suitable for basic facial expressions and simple movements.",
    price: 50000,
    discontinued: false,
    categories: ["model-rigging"],
    imageUrl: "images/standardRig.gif"
  },
  {
    id: "mr2",
    title: "Advanced Live2D Model Rig",
    description:
      "Comprehensive rigging for complex animations and detailed expressions in Live2D models.",
    price: 75000,
    discontinued: false,
    categories: ["model-rigging"],
    imageUrl: "images/fullBodyRig.gif"
  },
  {
    id: "mr3",
    title: "Chibi Live2D Model Rig",
    description:
      "Standard rigging for small cutesy stylized Live2D models, suitable for basic facial expressions and simple movements.",
    price: 25000,
    discontinued: false,
    categories: ["model-rigging"],
    imageUrl: "images/chibiRig.gif"
  },
  {
    id: "mr4",
    title: "Simple VRoid 3D Model Creation and Rigging",
    description:
      "Basic modelling and rigging for VRoid 3D models, perfect for new VTubers. Includes fundamental movement and facial expression capabilities.",
    price: 40000,
    discontinued: false,
    categories: ["model-rigging"],
    imageUrl: "images/vroid.jpg"
  },
  {
    id: "mr5",
    title: "Advanced VRoid 3D Model Creation and Rigging",
    description:
      "Advanced modelling and rigging for VRoid 3D models, offering detailed and fluid animations, complex expressions, and enhanced customization options.",
    price: 120000,
    discontinued: false,
    categories: ["model-rigging"],
    imageUrl: "images/vroid.jpg"
  },
  {
    id: "mr6",
    title: "PNG Model Rig",
    description: "Simple and affordable static avatar",
    price: 10000,
    discontinued: false,
    categories: ["model-rigging"],
    imageUrl: "images/pngtuberRig.gif"
  },
  // Digital Assets Products
  {
    id: "da1",
    title: "Custom Virtual Background",
    description: "High-resolution, virtual room, background, or environment for streams.",
    price: 20000,
    discontinued: false,
    categories: ["digital-assets"],
    imageUrl: "images/background.jpg"
  },
  {
    id: "da2",
    title: "Interactive Digital Props",
    description:
      "Set of animated and interactive digital props for streaming. Includes video game controller, mouse and keyboard, blankets, and food.",
    price: 7500,
    discontinued: false,
    categories: ["digital-assets"],
    imageUrl: "images/props.jpg"
  },
  {
    id: "da8",
    title: "Chat Emotes",
    description:
      "Expressive and engaging custom chat emotes, designed to elevate community interaction on your stream.",
    price: 9000,
    discontinued: false,
    categories: ["digital-assets"],
    imageUrl: "images/chatEmotes.jpg"
  },
  {
    id: "da9",
    title: "Halloween-Themed Chat Emotes",
    description:
      "Exclusive Halloween-themed chat emotes, perfect for adding a spooky touch to your stream.",
    price: 7500,
    discontinued: true,
    categories: ["digital-assets"],
    imageUrl: "images/background.jpg"
  },
  {
    id: "da10",
    title: "Christmas-Themed Overlay Pack",
    description:
      "Festive and cheerful Christmas-themed overlay, perfect for bringing holiday spirit to your streams. Features seasonal motifs and vibrant colors for a warm, welcoming ambiance.",
    price: 6000,
    discontinued: true,
    categories: ["digital-assets"],
    imageUrl: "images/background.jpg"
  }
];
