import React from 'react'
import { upperFirst } from "lodash";
import { Avatar, Box, Center, Heading, Stack, Text } from "native-base";

export default function PokemonCard({name, imageUrl, evolution, types, abilities}){
    return(
       <Box
        shadow={2}
        rounded="lg"
        width="47%"
        marginTop={5}
        height={300}
       >
         <Stack p={[4, 4, 8]}>
           <Center>
            <Avatar
              size="lg"
              source={{
                uri: imageUrl,
              }}
            />
           </Center>
           <Heading size={["md", "lg", "md"]} noOfLines={1}>
             {upperFirst(name)}
           </Heading>
           {types && 
            <Text noOfLines={3}>
              <Text fontWeight="bold" >
              Tipo:{' '}
              </Text>
              {types.join(', ')}
            </Text>
           }
           {abilities && 
            <Text noOfLines={4}>
              <Text fontWeight="bold" >
              Habilidades:{' '}
              </Text>
              {abilities.join(', ')}
            </Text>
           }
           {evolution && 
            <Text noOfLines={3}>
              <Text fontWeight="bold" >
              Evoluciona a:{' '}
              </Text>
              {upperFirst(evolution)}
            </Text>
           }
         </Stack>
         </Box>
       );
   }