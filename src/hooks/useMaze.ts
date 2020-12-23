import { useEffect, useState } from "react"
import { Cell, Point } from "../types";
import { generateMaze } from "../utils";

export const useMaze = (
  width: number,
  height: number,
  start: Point,
  exit: Point,
) => {
  const [maze, setMaze] = useState<Cell[][]>([]);

  useEffect(() => {
    const maze = generateMaze(width, height, start, exit)
    setMaze(maze)
  }, [width, height, start, exit])

  return [maze]
}