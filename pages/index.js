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
import DoneIcon from '@mui/icons-material/Done';
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
          <p className={classes.para}>
            Forget about mass applications and start being chased by recruiters.
          </p>
          <div>
            {userInfo ? (
              <>
                <Typography align="center">
                  Hi!..<strong>{userInfo.name}</strong>. Let's GO..
                </Typography>
              </>
            ) : (
              <div align="center">
                <Button
                  fullWidth
                  type="button"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={getStartHandler}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </Grid>
      </div>
      <div>
        <div className={classes.helps}>
          <Grid container spacing={0}>
            <Grid item md={6} xs="none">
              <Image
                src="/images/side2.jpg"
                alt="background image"
                width="100%"
                height="100%"
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
                    <DoneIcon /> Professional resume templates with basic,
                    modern, and creative styles
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> Example resumes in many fields
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> Free downdoadable resume examples to get ideas
                    for you
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon />
                    Very fair price ranges
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon />
                    The ability to download your resume for free in minutes
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> Example resume in many fields
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> Guidlines to write a prefect resume
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> Professional resume templates with basic,
                    modern, and creative styles
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> Guidlines to write a prefect resume
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <DoneIcon /> The ability to download your resume for free in
                    minutes
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
