
import { Colors } from "@/constants"
import { XStackProps } from "tamagui"

type Props = { disabled?: boolean, error?: boolean }
type TStyles = Pick<XStackProps, 'borderColor' | 'backgroundColor'>

export function useIconStyle({ disabled, error }: Props) {
    const iconStyles: TStyles = { backgroundColor: Colors.light.background, borderColor: Colors.light.borderapp }

    if (disabled) iconStyles.borderColor = Colors.light.borderapp

    if (!error) iconStyles.borderColor = Colors.light.borderapp
    if (error) iconStyles.borderColor = Colors.light.red

    return iconStyles
}