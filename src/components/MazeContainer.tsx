import { useContext, useEffect } from "react";
import { SelectedCellsContext } from "../providers/SelectedCellsProvider";
import Maze from "./Maze";
import MazePicker from "./MazePicker";

const MazeContainer = ({ mazeDimensions }) => {
  const { points } = useContext(SelectedCellsContext)

  const [start, exit] = points;

  return (
    <>
      {
        points.length !== 2
          ? <MazePicker {...{ mazeDimensions }} />
          // : null
          : <Maze {... { mazeDimensions, start, exit }} />
      }
    </>
  )
}

export default MazeContainer;