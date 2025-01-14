import {
  Box,
  Stack,
  Input,
  Header,
  Image,
  Center,
  Flex,
  Button,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Credit from '../components/buttons/Credit';
import Charstat from '../components/character/CharStat';
import SelectChar from './SelectChar';

function PageOne(props) {
  const [Pop, setPop] = useState(false);
  const OpenPop = () => {
    setPop(true);
  };

  return (
    <Box
      backgroundColor="teal"
      position="fixed"
      width="100%"
      height="100%"
      zIndex="100"
    >
      <Grid
        className="Grid"
        h="10vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
          <Center mt="30px" gap="10px">
            <Text
              borderRadius="50px"
              w="300px"
              textAlign="center"
              padding="1px"
              bgColor="red.500"
              color="white"
              fontSize="40px"
            >
              7 Days of UMN life
            </Text>
          </Center>
        </GridItem>
      </Grid>


      <Grid
        className="Grid"
        h="60vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >
        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
        </GridItem>
      </Grid>
      <Grid
        className="Grid"
        h="20vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={0}
      >

        <GridItem className="gridItems" rowSpan={1} colSpan={3}>
          <Center gap="10px">
            <Button>Setting</Button>
            <Button
              width="100px"
              height="100px"
              borderRadius="50%"
              onClick={() => props.handleClick('selectchar')}
              pointerEvents="all"
              backgroundColor="blue.100"
            >
              Play
            </Button>
            <Credit content="test" />
          </Center>
        </GridItem>
        <GridItem className='gridItems' rowSpan={1} colSpan={3}>
        </GridItem>

      </Grid>
    </Box>
  );
}

export default PageOne;
