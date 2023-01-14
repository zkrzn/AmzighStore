import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const test = () => {
  return (
    <DragDropContext backend={HTML5Backend}>
      <text />
    </DragDropContext>
  )
}

export default test;
