import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import {mainDemoNodes, mainDemoEdges} from './mainDemoNodes';
 
import 'reactflow/dist/style.css';

const rfStyle = {
  backgroundColor: 'transparent',
};
 
const initialNodes = mainDemoNodes;
const initialEdges = mainDemoEdges;
const defaultViewport = { x: 0, y: 100, zoom: 1.1 };
 
export default function BranchOut() {
  return (
    <div style={{ width: '75vw', height: "60vh", borderRadius: 8 }}>
      <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges} 
        style={rfStyle}
        // zoomOnScroll={false}
        // zoomOnPinch={false}
        // zoomOnDoubleClick={false}
        defaultViewport={defaultViewport}
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}