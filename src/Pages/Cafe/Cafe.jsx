import { Grid, GridItem, Box, Button, VStack } from "@chakra-ui/react";
import Pause from "../../components/buttons/PauseBtn";
import Phone from "../../components/phone/phoneMain";
import MapPop from "../../components/buttons/MapPop";
import PartTimeCafe from "./partTimeCafe"

import GIF from "../../components/asset/gif/eat.gif"
import PopTemplate from "../../components/template/tempPopUp";
import { AllContext } from "../../components/Value/CoinContext";
import { useContext } from "react";
import Currency from "../../components/buttons/Currency";
import { CreateChar } from "../../components/character/CharacterCard";

function Cafe(props) {
  return (
    <Box className="cafe">
      <Grid className="Grid" h='100vh' templateRows='repeat(5, 1fr)' templateColumns='repeat(3, 1fr)' gap={0}>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Currency/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <MapPop
            home={() => props.handleClick('home')}
            cafe={() => props.handleClick('cafe')}
            mall={() => props.handleClick('mall')}
            uni={() => props.handleClick('uni')}
          />
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <CreateChar/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>

        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <VStack spacing={4} align="end">
            {/* <PopTemplate
              btnName="Part Time"
              image={GIF}
              alt='Kerja part time di cafe'
            /> */}
            <PartTimeCafe />
            <Button onClick={()=>props.handleClick('ngopi')}>Ngopi</Button>
          </VStack>
        </GridItem>
        
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
          <Phone/>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
        <GridItem className="gridItems" rowSpan={1} colSpan={1}>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Cafe;
