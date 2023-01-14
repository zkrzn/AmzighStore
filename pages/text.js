import React, { useRef, useState } from "react";
import { Resizable } from 're-resizable';
import { useDrag } from 'react-dnd'

const Container = () => {
const containerRef = useRef(null);
const [oneWidth, setOneWidth] = useState(0);
const [twoWidth, setTwoWidth] = useState(0);
const [lbotHeight, setLbotHeight] = useState(0);

const handleResize = (event, direction, ref) => {
setOneWidth(ref.style.width);
setTwoWidth(containerRef.current.offsetWidth - ref.style.width);
setLbotHeight(containerRef.current.offsetHeight - ref.style.height);
};

const [{ isDragging }, drag] = useDrag({
item: { type: 'box' },
collect: monitor => ({
isDragging: monitor.isDragging(),
}),
})

return (
<div id="container" ref={containerRef}>
<div id="one" className="">
<Resizable
ref={drag}
className="ltop bg-red-500"
defaultSize={{ width: 100, height: 100 }}
minWidth={100}
maxWidth={400}
onResizeStop={handleResize}
handleClasses={{ bottomRight: 'resizable-se-handle' }}
>
</Resizable>
</div>
</div>
);
};

export default Container;