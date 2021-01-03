import { useMaze } from "../hooks/useMaze";
import { Dimensions, Direction } from "../types";
import { useEffect, useState } from "react";
import { generateEmptyMaze, generateMaze } from "../utils";
import PickerCell from "./PickerCell";
import { PickerCell as PickerCellType } from "../types";
import Error from './Error';

const MazePicker: React.FC<Props> = ({ mazeDimensions }) => {
  const [outerMaze, setOuterMaze] = useState<any[][]>([])

  useEffect(() => {
    if (mazeDimensions && mazeDimensions.height >= 2 && mazeDimensions.width >= 2) {
      setOuterMaze(generateEmptyMaze(mazeDimensions.width + 2, mazeDimensions.height + 2))
    }
  }, [mazeDimensions])

  const generateMaze = () => {
    return (
      <div style={{ width: `${(mazeDimensions!.width + 2) * 23}px`, margin: '0 auto' }}>
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
                      else if (i === mazeDimensions!.width + 2 - 1) {
                        return <PickerCell type={PickerCellType.Corner} />
                      }
                      else {
                        return (
                          <PickerCell point={{ y: 0, x: i - 1, openDirection: Direction.Up }} type={PickerCellType.Opening} />
                        )
                      }
                    })
                  }
                </div>
              )
            }
            else if (i === mazeDimensions!.height + 2 - 1) {
              return (
                <div>
                  {
                    row.map((cell, i) => {
                      if (i === 0) {
                        return <PickerCell type={PickerCellType.Corner} />
                      }
                      else if (i === mazeDimensions!.width + 2 - 1) {
                        return <PickerCell type={PickerCellType.Corner} />
                      }
                      else {
                        return (
                          <PickerCell point={{ y: mazeDimensions!.height - 1, x: i - 1, openDirection: Direction.Down }} type={PickerCellType.Opening} />
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
                    row.map((cell, j) => {
                      if (j === 0) {
                        return <PickerCell point={{ y: i - 1, x: 0, openDirection: Direction.Left }} type={PickerCellType.Opening} />
                      }
                      else if (j === mazeDimensions!.width + 2 - 1) {
                        return <PickerCell point={{ y: i - 1, x: mazeDimensions!.width - 1, openDirection: Direction.Right }} type={PickerCellType.Opening} />
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
    )
  }

  return (
    <>
      {
        mazeDimensions && mazeDimensions.height >= 2 && mazeDimensions.width >= 2
          ? generateMaze()
          : <Error message="Maze dimensions have to be at least 2x2." />
      }
    </>
  )
}

interface Props {
  mazeDimensions?: Dimensions
}

export default MazePicker;