import * as React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import db from '../../utils/db';
import Product from '../../models/Product';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Store } from '../../utils/Store';

export default function Home(props) {
  const router = useRouter();
  const { products } = props;
  const classes = useStyles();
  const { state } = useContext(Store);

  return (
    <Layout>
      <div>
        <h1 align="center"> Resume Templates </h1>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={3} xs={6} key={product.name}>
              <Card className={classes.temp}>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <>
                      <CardContent>
                        <Typography component="h4" variant="h4">
                          {product.name}
                        </Typography>
                        <Typography component="h3" variant="h3">
                          Use This Template
                        </Typography>
                      </CardContent>
                    </>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
