# 🛒 React Shopping Cart

A responsive and interactive shopping cart UI built using **React.js**. This project demonstrates React functional components, props, state management with `useState`, dynamic product rendering, and responsive CSS design.

## 📌 Project Overview

The **React Shopping Cart** project is a frontend application that displays a collection of products in reusable product cards. Users can add products to the cart and remove them from the cart. The cart count is updated dynamically based on user actions.

The project is designed to practice fundamental React concepts while creating a simple e-commerce-style interface.

## 🎯 Project Objectives

* Build a shopping cart interface using React.js.
* Create reusable React components.
* Display products dynamically from a data file.
* Manage cart count using React `useState`.
* Implement Add to Cart and Remove from Cart functionality.
* Create a responsive layout using CSS.
* Practice passing data and functions through props.

## ✨ Features

* 🛍️ Dynamic product cards
* ➕ Add to Cart functionality
* ➖ Remove from Cart functionality
* 🔢 Real-time cart count
* 🧩 Reusable `ProductCard` component
* 📌 Header navigation
* 🖼️ Banner section
* 📱 Responsive design
* 🎨 CSS styling and hover effects
* ⚛️ React functional components
* 🔄 Dynamic rendering using `.map()`

## 🛠️ Technologies Used

| Technology  | Purpose                       |
| ----------- | ----------------------------- |
| React.js    | Frontend development          |
| JavaScript  | Application logic             |
| JSX         | UI structure                  |
| CSS         | Styling and responsive design |
| React Hooks | State management              |
| useState    | Cart count and button state   |

## 📂 Project Structure

```text
react-shopping-cart/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Banner.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── data/
│   │   └── productData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

## 🧩 Components

### Header

The Header component contains:

* Logo
* Navigation menu
* Cart button
* Dynamic cart count

The cart count is received from the App component through props.

### Banner

The Banner component displays a promotional image at the top of the page.

### ProductCard

The ProductCard component displays:

* Product image
* Product name
* Product price
* Add to Cart button
* Remove from Cart button

Product information is received through props.

## 🔄 How the Cart Works

The cart count is managed using React's `useState` hook.

```jsx
const [cartCount, setcartCount] = useState(0);
```

When the user clicks **Add to Cart**, the cart count increases:

```jsx
setcartCount(cartCount + 1);
```

When the user clicks **Remove from Cart**, the cart count decreases:

```jsx
setcartCount(cartCount - 1);
```

The updated cart count is passed to the Header component:

```jsx
<Header cartCount={cartCount} />
```

## 📊 Dynamic Product Rendering

Products are stored in a separate data file and rendered dynamically using `.map()`.

```jsx
products.map((data) => (
   <ProductCard
      key={data.id}
      data={data}
      setcartCount={setcartCount}
      cartCount={cartCount}
   />
))
```

This makes it easy to add or remove products without manually creating each product card.

## 🎨 Responsive Design

The project uses CSS Grid and Media Queries to make the product layout responsive.

### Desktop

Displays products in multiple columns.

### Tablet

The number of columns is reduced to fit the screen.

### Mobile

Products are displayed in a single-column layout for better readability and usability.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd react-shopping-cart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🚀 Future Improvements

The project can be extended with:

* Product search
* Product categories
* Quantity controls
* Individual cart page
* Product details page
* Total price calculation
* Local Storage cart persistence
* Checkout page
* React Router navigation
* Backend/API integration
* User authentication

## 📸 Project Preview

Add your project screenshot here:

```markdown
![React Shopping Cart Preview](./screenshots/project-preview.png)
```

## 🌐 Live Demo

🔗 **Live Demo:**
Add your Netlify/Vercel deployment URL here.

## 📦 GitHub Repository

🔗 **Repository:**
Add your GitHub repository URL here.

## 👨‍💻 Author

### Faruk Yazir

Frontend Developer | React.js Developer

🔗 **LinkedIn:**
https://linkedin.com/in/farukyazir/

## 📄 License

This project is created for educational and learning purposes.

---

⭐ If you found this project useful, consider giving the repository a star!
