# ETEC - Modern E-Commerce Store

A modern e-commerce frontend built with React and Vite, featuring product browsing, category filtering, cart management, and a complete checkout experience.

## Preview

ETEC is a responsive online electronics store that allows users to:

- Browse products by category
- Search for products
- View detailed product information
- Add and manage items in the cart
- Complete a validated checkout form
- Explore related products
- Enjoy a responsive experience across devices

---

## Features

### Product Catalog

- Dynamic product listing
- Category-based filtering
- Product detail pages
- Related products section

### Shopping Cart

- Add products to cart
- Update quantities
- Remove products
- Persistent cart using Local Storage

### Checkout System

- Form validation with Zod
- Customer information collection
- Credit card field formatting
- Order summary calculation

### User Experience

- Responsive design
- Product search
- Scroll-based navigation behavior
- Custom hooks for reusable logic
- 404 page handling

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM

### Styling

- Tailwind CSS
- Shadcn UI
- Radix UI

### Validation

- Zod

### State Management

- React Context API
- Custom Hooks

---

## Project Structure

```bash
src
│
├── components
│   ├── Cart
│   ├── ProductPage
│   ├── Shop
│   ├── Header
│   ├── Footer
│   └── ui
│
├── context
│   ├── CartContext
│   ├── ProductsContext
│   └── CategoryContext
│
├── hooks
│
├── data
│   ├── products.json
│   └── customers.json
│
├── utils
│
└── App.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/imaginary-1374/Etec/tree/react-spa
```

Move into the project directory:

```bash
cd etec
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

---

## Learning Goals

This project was built to practice:

- Component architecture in React
- Context API state management
- Custom React hooks
- Form validation with Zod
- Responsive UI development
- E-commerce application structure
- Reusable UI component design

---

## Future Improvements

- User authentication
- Real payment gateway integration
- Product management dashboard
- Order history
- Wishlist functionality
- Backend API integration

---

## Author

Built by AbdElrhman Mohamed as part of the journey toward becoming a full-stack developer.
