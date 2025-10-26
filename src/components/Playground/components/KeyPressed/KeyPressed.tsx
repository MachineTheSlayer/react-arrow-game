// import styles from "./KeyPressed.module.css"

import { useEffect, useCallback } from "react"

import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { MAP_ARROW_CODES } from "../../constants"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

export type IKeyPressedProps = {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()

  const KeyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        Object.prototype.hasOwnProperty.call(MAP_ARROW_CODES, e.key) &&
        isTimerActive
      ) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <TypographyText>
        Press the key corresponding to the key in "Random keys"
      </TypographyText>
      <span>{KeyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
