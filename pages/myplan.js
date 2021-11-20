import {
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Card,
  ListItem,
  List,
} from '@material-ui/core';
import React, { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

function MyplanScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    myplan: { myplanItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: 'MYPLAN_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    router.push('/payment');
  };
  return (
    <Layout title="My Plan">
      <Typography component="h1" variant="h1" align="center">
        My Plan
      </Typography>
      {myplanItems.length === 0 ? (
        <div component="h4" variant="h4">
          My Plan is empty.
          <NextLink href="/product"> Go to Resume Templates</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myplanItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={70}
                              height={85}
                            ></Image>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>${item.price}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({myplanItems.reduce((a, c) => a + c.quantity, 0)}
                    {''} items): $
                    {myplanItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={checkoutHandler}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(MyplanScreen), { ssr: false });
