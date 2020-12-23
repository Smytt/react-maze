import React from 'react';
import '../css/cell.css'
import { Cell as CellType } from '../types';

const Cell: React.FC<{ cell: CellType }> = ({ cell }) => {

  const borderStyle: React.CSSProperties = {
    borderLeftStyle: cell.border.left ? 'solid' : 'none',
    borderRightStyle: cell.border.right ? 'solid' : 'none',
    borderTopStyle: cell.border.up ? 'solid' : 'none',
    borderBottomStyle: cell.border.down ? 'solid' : 'none',
 }

  return (
    <div className="cell" style={borderStyle}>
    </div>
  )
}

export default Cell;