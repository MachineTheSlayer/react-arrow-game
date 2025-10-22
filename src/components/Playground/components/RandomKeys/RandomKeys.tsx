// import styles from "./RandomKeys.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import type { IMapArrowCodes } from "../../types"

export type IRandomKeysProps = {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = () => {
  // const { isTimerActive } = props

  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.steps.map((element) => (
        <span key={element.step}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
