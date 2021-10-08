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
import Example from '../../models/Example';
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ExampleScreen(props) {
  const router = useRouter();
  const { dispatch } = useContext(Store);
  const { example } = props;
  const classes = useStyles();
  if (!example) {
    return <div>Example Not Found</div>;
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/example"
      onClick={handleClick}
    >
      Resume Examples
    </Link>,
    <Typography key="3" color="text.primary">
      {example.name}
    </Typography>,
  ];

  const { data } = axios.get(`/api/examples/${example._id}`);

  return (
    <Layout title={example.name}>
      <div align="center">
        <div className={classes.section}>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="field name">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>

        <h1 component="h2" variant="h2">
          {example.name} Resume Example{' '}
        </h1>
        <p>
          Construct the perfect {example.name} resume with the materials below.{' '}
        </p>
      </div>
      <div align="center">
        <Image
          src={example.image}
          alt={example.name}
          width={800}
          height={1100}
        ></Image>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { field } = params;

  await db.connect();
  const example = await Example.findOne({ field }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      example: db.convertDocToObj(example),
    },
  };
}
