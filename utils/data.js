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
      name: 'Children Librarian',
      field: 'children-librarian',
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
};

export default data;
