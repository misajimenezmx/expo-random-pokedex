import { Icon, IconButton } from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function SuffleButton ({onPress}) {
    return (
      <IconButton
        variant="solid"
        position="absolute"
        bottom={15}
        right={10}
        padding={5}
        borderRadius={100}
        icon={<Icon size="md" as={<AntDesign name="sync" />} color="white" />}
        onPress={onPress}
      />
    )
  }