import { useMaze } from "../hooks/useMaze";
import { Dimensions } from "../types";
import { useEffect, useState } from "react";
import { generateEmptyMaze } from "../utils";
import PickerCell from "./PickerCell";
import { PickerCell as PickerCellType } from "../types"

const MazePicker: React.FC<Props> = ({ mazeDimensions }) => {

  // const [maze] = useMaze(
  //   width,
  //   height,
  //   { x: 0, y: 0, openDirection: Direction.Left },
  //   { x: width - 1, y: height - 1, openDirection: Direction.Right }
  // )
  const [outerMaze, setOuterMaze] = useState<any[][]>([])

  useEffect(() => {
    setOuterMaze(generateEmptyMaze(mazeDimensions.width + 2, mazeDimensions.height + 2))
  }, [mazeDimensions])

  return (
    <div>
      {
        outerMaze.map((row, i) => {
          if (i === 0) {
            return (
              <div>
                {
                  row.map((cell, i) => {
                    if (i === 0) {
                      return <PickerCell type={PickerCellType.Corner} />
                    }
                    else if (i === mazeDimensions.width + 2 - 1) {
                      return <PickerCell type={PickerCellType.Corner} />
                    }
                    else {
                      return (
                        <PickerCell type={PickerCellType.Opening} />
                      )
                    }
                  })
                }
              </div>
            )
          }
          else if (i === mazeDimensions.height + 2 - 1) {
            return (
              <div>
                {
                  row.map((cell, i) => {
                    if (i === 0) {
                      return <PickerCell type={PickerCellType.Corner} />
                    }
                    else if (i === mazeDimensions.width + 2 - 1) {
                      return <PickerCell type={PickerCellType.Corner} />
                    }
                    else {
                      return (
                        <PickerCell type={PickerCellType.Opening} />
                      )
                    }
                  })
                }
              </div>
            )
          }
          else
            return (
              <div>
                {
                  row.map((cell, i) => {
                    if (i === 0) {
                      return <PickerCell type={PickerCellType.Opening} />
                    }
                    else if (i === mazeDimensions.width + 2 - 1) {
                      return <PickerCell type={PickerCellType.Opening} />
                    }
                    else {
                      return (
                        <PickerCell type={PickerCellType.Filler} />
                      )
                    }
                  })
                }
              </div>
            )
        })
      }

    </div>
    // <div>
    //   {
    //     maze.map(row =>
    //       <div style={{ clear: 'both' }}>
    //         {
    //           row.map(cell => <Cell {...{ cell }} />)
    //         }
    //       </div>
    //     )
    //   }
    // </div>
  )
}

interface Props {
  mazeDimensions: Dimensions
}

export default MazePicker;