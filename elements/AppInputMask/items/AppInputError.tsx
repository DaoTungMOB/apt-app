
import React from 'react'
import { Text } from 'tamagui'

export function AppInputError({ message }: { message?: string }) {
    if (!message) return null
    return (
        <Text color={'$red900'}>{message}</Text>
    )
}