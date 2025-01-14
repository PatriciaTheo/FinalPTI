import React, { useContext, useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
//char1
import hairfront1 from './characterAsset/default/nakMukbang/1.png';
import face1 from './characterAsset/default/nakMukbang/2.png';
import lefthand1 from './characterAsset/default/nakMukbang/3.png';
import body1 from './characterAsset/default/nakMukbang/4.png';
import righthand1 from './characterAsset/default/nakMukbang/5.png';
import hairback1 from './characterAsset/default/nakMukbang/6.png';
import feet1 from './characterAsset/default/nakMukbang/7.png';
//char2
import hairfront2 from './characterAsset/default/gamers/1.png';
import face2 from './characterAsset/default/gamers/2.gif';
import lefthand2 from './characterAsset/default/gamers/3.png';
import body2 from './characterAsset/default/gamers/4.png';
import righthand2 from './characterAsset/default/gamers/5.png';
import hairback2 from './characterAsset/default/gamers/6.png';
import feet2 from './characterAsset/default/gamers/7.png';
//char3
import hairfront3 from './characterAsset/default/holkay/1.png';
import face3 from './characterAsset/default/holkay/2.gif';
import lefthand3 from './characterAsset/default/holkay/3.png';
import body3 from './characterAsset/default/holkay/4.png';
import righthand3 from './characterAsset/default/holkay/5.png';
import hairback3 from './characterAsset/default/holkay/6.png';
import feet3 from './characterAsset/default/holkay/7.png';
//char4
import hairfront4 from './characterAsset/default/kutubuku/1.png';
import face4 from './characterAsset/default/kutubuku/2.gif';
import lefthand4 from './characterAsset/default/kutubuku/3.png';
import body4 from './characterAsset/default/kutubuku/4.png';
import righthand4 from './characterAsset/default/kutubuku/5.png';
import hairback4 from './characterAsset/default/kutubuku/6.png';
import feet4 from './characterAsset/default/kutubuku/7.png';
//
import './chara.css';
import { AllContext } from '../Value/CoinContext';


function CharacterModule(props) {
  const { character, setCharacter } = useContext(AllContext);
  const [hairfront, setHairFront] = useState(hairfront1);
  const [face, setFace] = useState(face1);
  const [lefthand, setLefthand] = useState(lefthand1);
  const [body, setBody] = useState(body1);
  const [righthand, setRightHand] = useState(righthand1);
  const [hairback, setHairback] = useState(hairback1);
  const [feet, setFeet] = useState(feet1);

  useEffect(() => {
    if (character == 1) {
      setHairFront(hairfront1);
      setFace(face1);
      setLefthand(lefthand1);
      setBody(body1);
      setRightHand(righthand1);
      setHairback(hairback1);
      setFeet(feet1);
    }
    else if (character == 2) {
      setHairFront(hairfront2);
      setFace(face2);
      setLefthand(lefthand2);
      setBody(body2);
      setRightHand(righthand2);
      setHairback(hairback2);
      setFeet(feet2);
    }
    else if (character == 3) {
      setHairFront(hairfront3);
      setFace(face3);
      setLefthand(lefthand3);
      setBody(body3);
      setRightHand(righthand3);
      setHairback(hairback3);
      setFeet(feet3);
    }
    else if (character == 4) {
      setHairFront(hairfront4);
      setFace(face4);
      setLefthand(lefthand4);
      setBody(body4);
      setRightHand(righthand4);
      setHairback(hairback4);
      setFeet(feet4);
    }
  }, [character]);
  return (
    <>
      <Box>
        <Image
          pointerEvents={'none'}
          className="top"
          objectFit={'cover'}
          filter="drop-shadow(5px 5px #222)"
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={7}
          pos={'absolute'}
          src={hairfront}
          alt={'test'}
        />
        <Image
          pointerEvents={'none'}
          className="top"
          objectFit={'cover'}
          filter="drop-shadow(5px 5px #222)"
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={6}
          pos={'absolute'}
          src={face}
          alt={'test'}
        />
        <Image
          pointerEvents={'none'}
          className="body"
          objectFit={'cover'}
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={5}
          pos={'absolute'}
          src={lefthand}
          alt={'test'}
        />
        <Image
          pointerEvents={'none'}
          className="body"
          objectFit={'cover'}
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={4}
          pos={'absolute'}
          src={body}
          alt={'test'}
        />
        <Image
          pointerEvents={'none'}
          className="body"
          objectFit={'cover'}
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={3}
          pos={'absolute'}
          src={righthand}
          alt={'test'}
        />
        <Image
          pointerEvents={'none'}
          className="top"
          objectFit={'cover'}
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={2}
          pos={'absolute'}
          src={hairback}
          alt={'test'}
        />
        <Image
          pointerEvents={'none'}
          className="bottom"
          objectFit={'cover'}
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="600"
          h={'600px'}
          zIndex={1}
          pos={'absolute'}
          src={feet}
          alt={'test'}
        />
        <Box
          margin={'auto'}
          left="0"
          right={'0'}
          bottom="0"
          w="200px"
          h={'100px'}
          borderRadius="50%"
          zIndex={0}
          bgColor={'black'}
          opacity="0.6"
          pos="absolute"
        />
      </Box>
    </>
  );
}

export default CharacterModule;
