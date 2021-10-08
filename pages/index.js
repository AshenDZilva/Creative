import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import useStyles from '../utils/styles';

import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import data from '../utils/data';

export default function Home() {
  const router = useRouter();

  const classes = useStyles();
  const { state } = useContext(Store);
  const { userInfo } = state;

  const getStartHandler = () => {
    router.push('/login');
  };
  return (
    <Layout>
      <div>
        <Grid>
          <h1 className={classes.backleft}>
            Land your dream job with the perfect resume <br></br> employers are
            looking for!
          </h1>
          <p>
            Forget about mass applications and start being chased by recruiters.
          </p>
          <div>
            {userInfo ? (
              <>
                <Typography component="h3" variant="h3">
                  Hi!..<strong>{userInfo.name}</strong>
                </Typography>
              </>
            ) : (
              <>
                <Button
                  fullWidth
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={getStartHandler}
                  className={classes.button}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </Grid>
      </div>
      <div>
        <div>
          <Grid container spacing={0}>
            <Grid item md={6} xs="none">
              <Image
                src="/images/back.jpg"
                alt="background image"
                width="100%"
                height="60"
                layout="responsive"
              ></Image>
            </Grid>
            <Grid item md={6} xs={12} className={classes.land}>
              <h2 align="center" className={classes.navbarButton}>
                How Creative helps you to land jobs{' '}
              </h2>
              <List>
                <ListItem>
                  <Typography>
                    Professional resume templates with basic, modern, and
                    creative styles
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>Example resume in many fields</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Guidlines to write a prefect resume</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    The ability to download your resume for free in minutes
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <h1 align="center"> Resume Examples </h1>
        <Grid container spacing={3}>
          {data.example.map((example) => (
            <Grid item md={3} xs={6} key={example.name}>
              <Card className={classes.temp} layout="responsive">
                <NextLink href={'/example'} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={example.image}
                      title={example.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography component="h4" variant="h4">
                        {example.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
          ))}
          <Button
            fullWidth
            type="button"
            variant="contained"
            color="primary"
            onClick={() => router.push('/example')}
            className={classes.button}
          >
            View All Templates
          </Button>
        </Grid>
      </div>
      <div>
        <h1 align="center"> Templates </h1>
        <Grid container spacing={3}>
          {data.template.map((template) => (
            <Grid item md={3} xs={6} key={template.name}>
              <Card className={classes.temp} layout="responsive">
                <NextLink href={'/product'} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={template.image}
                      title={template.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography component="h4" variant="h4">
                        {template.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
          ))}
          <Button
            fullWidth
            type="button"
            variant="contained"
            color="primary"
            onClick={() => router.push('/product')}
            className={classes.button}
          >
            View All Templates
          </Button>
        </Grid>
      </div>
    </Layout>
  );
}
