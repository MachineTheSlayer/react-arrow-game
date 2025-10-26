// import styles from "./Button.module.css"

import type {
  ButtonProps as MaterialButtonProps} from "@mui/material";
import {
  Button as MaterialButton
} from "@mui/material"

export type IButtonProps = {
  //
} & MaterialButtonProps

const Button: React.FC<IButtonProps> = (props) => {
  const { children } = props

  return (
    <MaterialButton variant="contained" size="small" {...props}>
      {children}
    </MaterialButton>
  )
}

export default Button
