import { useAppSelector } from "../../../../../../app/hooks"
import type { IPlaygroundStepsState } from "../../../../store/types"
import type { IMapArrowCodes } from "../../../../types"
import { MAP_ARROW_CODES } from "../../../../constants"

import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  /* eslint-disable */
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return (
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
      styles.icon
    )
  }

  return (
    <>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
