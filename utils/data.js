import bcrypt from 'bcryptjs';
const data = {
  user: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  example: [
    {
      name: 'Civil Engineer',
      field: 'civil-engineer',
      category: 'Engineer',
      image: '/images/civil.jpg',
    },

    {
      name: 'Staff Accountant',
      field: 'staff-accountant',
      category: 'Accounting',
      image: '/images/acc.jpg',
    },
    {
      name: 'Elementary Teacher',
      field: 'elementary-teacher',
      category: 'Teacher',
      image: '/images/tea.jpg',
    },
    {
      name: 'Public Librarian',
      field: 'public-librarian',
      category: 'Librarian',
      image: '/images/lib.jpg',
    },
  ],
  template: [
    {
      name: 'Classic',
      type: 'classic',
      category: 'Simple Resume',
      image: '/images/1.png',
      price: 20,
      rating: 4.5,
      numReviews: 10,
      description: 'A popular simple resume',
    },
    {
      name: 'Original',
      type: 'original',
      category: 'Professional Resume',
      image: '/images/2.png',
      price: 20,
      rating: 4.0,
      numReviews: 8,
      description: 'A popular simple resume',
    },
    {
      name: 'Windsor',
      type: 'windsor',
      category: 'Creative Resume',
      image: '/images/3.png',
      price: 20,
      rating: 4.0,
      numReviews: 8,
      description: 'A popular creative resume',
    },

    {
      name: 'Advanced',
      type: 'advanced',
      category: 'Moden Resume',
      image: '/images/4.png',
      price: 20,
      rating: 4.0,
      numReviews: 12,
      description: 'A popular moden resume',
    },
  ],
  product: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/1.png',

      featuredImage: '/images/banner1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },

    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/5.png',
      price: 95,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pants',
    },

    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/3.png',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },

    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/4.png',
      price: 90,
      brand: 'Oliver',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
  ],
};

export default data;
