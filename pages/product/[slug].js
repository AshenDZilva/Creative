import React, { useContext } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Store } from '../../utils/Store';

import {
  Grid,
  Link,
  List,
  Typography,
  ListItem,
  Card,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import db from '../../utils/db';
import Product from '../../models/Product';
import { useRouter } from 'next/router';
import Rating from '@mui/material/Rating';

export default function ProductScreen(props) {
  const router = useRouter();
  const { dispatch } = useContext(Store);
  const { product } = props;
  const classes = useStyles();
  if (!product) {
    return <div>product Not Found</div>;
  }

  const addToMyPlanHandler = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);

    dispatch({ type: 'MYPLAN_ADD_ITEM', payload: { ...product, quantity: 1 } });
    router.push('/myplan');
  };
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/product" passHref>
          <Link>
            <Typography>Back to templates</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12} className={classes.form}>
          <Image
            src={product.image}
            alt={product.name}
            width={410}
            height={550}
          ></Image>
        </Grid>
        <Grid item md={6} xs={12} className={classes.form}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category : {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Ratings :{' '}
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
                ({product.numReviews}) reviwes
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description : {product.description}</Typography>
            </ListItem>

            <ListItem>
              <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid>
                        <Typography>Price : </Typography>
                      </Grid>
                      <Grid>
                        <Typography>${product.price}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>

                  <ListItem>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={addToMyPlanHandler}
                    >
                      <Typography>Add to my plan</Typography>
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
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
