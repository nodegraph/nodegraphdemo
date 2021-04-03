import React, { useState, MouseEvent } from 'react';

import ReactDOM from "react-dom";

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  OnLoadParams,
  FlowElement,
  EdgeTypesType,
  //Elements,
  Connection,
  Edge,
  ArrowHeadType,
  Node,
} from 'react-flow-renderer';




import CustomEdge from './CustomEdge';

const onLoad = (reactFlowInstance: OnLoadParams) => reactFlowInstance.fitView();
const onNodeDragStop = (_: MouseEvent, node: Node) => console.log('drag stop', node);
const onElementClick = (_: MouseEvent, element: FlowElement) => console.log('click', element);


const initialElements = [
  { id: '1', type: 'input', data: { label: 'Input 1' }, position: { x: 250, y: 0 },
  style: {
      background: "#45AA52",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '2', data: { label: 'Node 2' }, position: { x: 150, y: 100 },
  style: {
      background: "#454052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '2a', data: { label: 'Node 2a' }, position: { x: 0, y: 180 },
  style: {
      background: "#454052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '3', data: { label: 'Node 3' }, position: { x: 250, y: 200 },
  style: {
      background: "#454052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 300 },
  style: {
      background: "#454052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '3a', data: { label: 'Node 3a' }, position: { x: 150, y: 300 },
  style: {
      background: "#454052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '5', data: { label: 'Node 5' }, position: { x: 250, y: 400 },
  style: {
      background: "#454052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '6', type: 'output', data: { label: 'Output 6' }, position: { x: 50, y: 550 },
  style: {
      background: "#CC4052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '7', type: 'output', data: { label: 'Output 7' }, position: { x: 250, y: 550 },
  style: {
      background: "#CC4052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: '8', type: 'output', data: { label: 'Output 8' }, position: { x: 525, y: 600 },
  style: {
      background: "#CC4052",
      width: 150,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "Helvetica",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
    }
  },
  { id: 'e1-2', source: '1', target: '2',
    data: { text: 'edge' }, animated: true, arrowHeadType: ArrowHeadType.ArrowClosed,  style:{ stroke: 'red' },
    label: 'params', labelBgPadding: [8, 4], labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    },
  { id: 'e2-2a', source: '2', target: '2a', 
    data: { text: 'edge' }, animated: true, arrowHeadType: ArrowHeadType.ArrowClosed,  style:{ stroke: 'red' },
    label: 'params', labelBgPadding: [8, 4], labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    },
  { id: 'e2-3', source: '2', target: '3',
    data: { text: 'edge' }, animated: true, arrowHeadType: ArrowHeadType.ArrowClosed,  style:{ stroke: 'red' },
    label: 'params', labelBgPadding: [8, 4], labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 }
    },
  { id: 'e3-4', source: '3', target: '4',
    data: { text: 'edge' }, animated: true, arrowHeadType: ArrowHeadType.ArrowClosed,  style:{ stroke: 'red' },
    label: 'params', labelBgPadding: [8, 4], labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 }
    },
  { id: 'e3-3a', source: '3', target: '3a',
    data: { text: 'edge' }, animated: true, arrowHeadType: ArrowHeadType.ArrowClosed,  style:{ stroke: 'red' },
    label: 'params', labelBgPadding: [8, 4], labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 }
    },
  { id: 'e3-5', source: '4', target: '5',
    data: { text: 'edge' }, animated: true, arrowHeadType: ArrowHeadType.ArrowClosed,  style:{ stroke: 'red' },
    label: 'params', labelBgPadding: [8, 4], labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 }
    },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    label: (
      <>
        <tspan>alpha, beta</tspan>
        <tspan dy={10} x={0}>
          {'gamma, theta'}
        </tspan>
      </>
    ),
    labelStyle: { fill: 'red', fontWeight: 700 },
    arrowHeadType: ArrowHeadType.Arrow,
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    label: 'some hyper params',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e5-8',
    source: '5',
    target: '8',
    type: 'custom',
    data: { text: 'regularization params' },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
];


const edgeTypes: EdgeTypesType = {
  custom: CustomEdge,
};


const graphStyles = { width: "100%", height: "450px" };

const EdgesFlow = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: Connection | Edge) => setElements((els) => addEdge(params, els));

  return (
    <ReactFlow
      elements={elements}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      onLoad={onLoad}
      snapToGrid={true}
      edgeTypes={edgeTypes}
      style={graphStyles}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default EdgesFlow;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <EdgesFlow />
  </React.StrictMode>,
  rootElement
);
