import { createContext, useState } from "react";
import { Point } from "../types";

export const SelectedCellsContext = createContext<any>({})

const SelectedCellsProvider = ({ children }) => {
  const [points, setPoints] = useState<Point[]>([])

  const addPoint = (point: Point) => {
    let newPoints; 
    if (points.length < 2) {
      newPoints = [...points, point]
    }
    else {
      newPoints = [points[1], point]
    }
    setPoints(newPoints)
  }

  return (
    <SelectedCellsContext.Provider value={{ points, addPoint }} >
      {children}
    </SelectedCellsContext.Provider>
  )
}

export default SelectedCellsProvider