import React from 'react';
import ReactFlow from 'react-flow-renderer';
import ReactDOM from "react-dom";

import {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  OnLoadParams,
  FlowElement,
  EdgeTypesType,
  Elements,
  Connection,
  Edge,
  ArrowHeadType,
  Node,
} from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

const graphStyles = { width: "100%", height: "500px" };

const BasicFlow = () => <ReactFlow elements={elements} style={graphStyles}  />;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BasicFlow />
  </React.StrictMode>,
  rootElement
);
