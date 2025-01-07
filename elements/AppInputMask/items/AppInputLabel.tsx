
import React from 'react'
import { Text } from 'tamagui'

export function AppInputLabel({ label }: { label?: string }) {
  if (!label) return null
  return (
    <Text fos={14} fow={'500'} mb={8}>{label}</Text>
  )
}