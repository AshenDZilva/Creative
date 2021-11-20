import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 180 },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 140,
  },
  {
    field: 'dateCreated',
    headerName: 'Created on',
    width: 180,
    type: 'date',
  },
  {
    field: 'isAdmin',
    headerName: 'Is admin?',
    width: 180,
    type: 'boolean',
  },
];

export default function FilterOperators() {
  const { product } = props;

  const addToMyPlanHandler = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);

    dispatch({ type: 'MYPLAN_ADD_ITEM', payload: { ...product, quantity: 1 } });
    router.push('/myplan');
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={slug.rows} columns={columns} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
