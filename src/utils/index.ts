import _ from 'lodash';
import { Cell, Dimensions, Direction, Point } from "../types"

export const generateEmptyMaze = (width: number, height: number) => {
  const row: Cell[] = []
  while (row.length < width) {
    row.push(null as unknown as Cell)
  }
  const maze: Cell[][] = []
  while (maze.length < height) {
    maze.push([...row])
  }
  return maze as Cell[][]
}

export const generateMaze = (
  width: number,
  height: number,
  start: Point,
  exit: Point
): Cell[][] => {
  const maze = generateEmptyMaze(width, height)
  generateCell(maze, start, start, exit, undefined)
  return maze
}

export const generateCell = (maze: Cell[][], point: Point, start: Point, exit: Point, previousCellDirection?: Direction) => {
  if (maze[point.y][point.x]) {
    return;
  }

  const directions: Direction[] = []
  const border = {
    [Direction.Up]: true,
    [Direction.Right]: true,
    [Direction.Down]: true,
    [Direction.Left]: true
  }

  if (point.x + 1 < maze[0].length && !maze[point.y][point.x + 1]) {
    directions.push(Direction.Right)
  }

  if (point.x > 0 && !maze[point.y][point.x - 1]) {
    directions.push(Direction.Left)
  }

  if (point.y + 1 < maze.length && !maze[point.y + 1][point.x]) {
    directions.push(Direction.Down)
  }

  if (point.y > 0 && !maze[point.y - 1][point.x]) {
    directions.push(Direction.Up)
  }

  directions.forEach(direction => border[direction] = false);
  if (previousCellDirection) border[previousCellDirection] = false;

  if (point.x === start.x && point.y === start.y) {
    border[start.openDirection!] = false;
  }
  if (point.x === exit.x && point.y === exit.y) {
    border[exit.openDirection!] = false;
  }

  maze[point.y][point.x] = {
    border,
    ...point
  }

  const shuffledDirections = _.shuffle(directions)

  shuffledDirections.forEach(direction => {
    switch (direction) {
      case Direction.Up: generateCell(maze, { x: point.x, y: point.y - 1 }, start, exit, Direction.Down); break;
      case Direction.Right: generateCell(maze, { x: point.x + 1, y: point.y }, start, exit, Direction.Left); break;
      case Direction.Down: generateCell(maze, { x: point.x, y: point.y + 1 }, start, exit, Direction.Up); break;
      case Direction.Left: generateCell(maze, { x: point.x - 1, y: point.y }, start, exit, Direction.Right); break;
      default: break;
    }
  })
}