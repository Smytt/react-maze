export interface Cell extends Point {
  // isCorrectPath: boolean;
  border: {
    [key in Direction]: boolean
  }
}

export interface Point {
  x: number,
  y: number,
  openDirection?: Direction
}

export interface Dimensions {
  width: number,
  height: number
}

export enum Direction { 
  Up = 'up', 
  Right = 'right', 
  Down = 'down', 
  Left = 'left' 
}

export enum PickerCell { 
  Opening = 'opening',
  Corner = 'corner', 
  Filler = 'filler' 
}