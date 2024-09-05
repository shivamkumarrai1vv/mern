import React, { useState } from 'react';
import ReactFlow, { addEdge, Background, Controls } from 'react-flow-renderer';
import axios from 'axios';

const nodeTypes = {
    // Define custom nodes here (e.g., FilterData, WaitNode, etc.)
};

const WorkflowBuilder = () => {
    const [elements, setElements] = useState([]);

    const onElementsRemove = elementsToRemove => setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = params => setElements(els => addEdge(params, els));

    const saveWorkflow = () => {
        const workflow = {
            name: 'Example Workflow',
            nodes: elements.filter(el => el.type),
            edges: elements.filter(el => el.source),
        };

        axios.post('http://localhost:5000/api/workflows/save', workflow)
            .then(response => console.log('Workflow saved!', response))
            .catch(err => console.log(err));
    };

    return ( <
        div style = {
            { height: 800 } } >
        <
        ReactFlow elements = { elements }
        onElementsRemove = { onElementsRemove }
        onConnect = { onConnect }
        nodeTypes = { nodeTypes }
        snapToGrid >
        <
        Background / >
        <
        Controls / >
        <
        /ReactFlow> <
        button onClick = { saveWorkflow } > Save Workflow < /button> <
        /div>
    );
};

export default WorkflowBuilder;