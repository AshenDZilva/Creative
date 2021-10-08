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
import Example from '../../models/Example';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Store } from '../../utils/Store';

export default function Home(props) {
  const router = useRouter();
  const { examples } = props;
  const classes = useStyles();
  const { state } = useContext(Store);

  return (
    <Layout>
      <div>
        <h1 align="center"> Resume Examples </h1>

        <Grid container spacing={3}>
          {examples.map((example) => (
            <Grid item md={3} xs={6} key={example.name}>
              <Card className={classes.temp}>
                <NextLink href={`/example/${example.field}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={example.image}
                      title={example.name}
                    ></CardMedia>
                    <>
                      <CardContent>
                        <Typography component="h4" variant="h4">
                          {example.name}
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
  const examples = await Example.find({}).lean();
  await db.disconnect();
  return {
    props: {
      examples: examples.map(db.convertDocToObj),
    },
  };
}
