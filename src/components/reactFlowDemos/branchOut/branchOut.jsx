import React from 'react';
import ReactFlow, {
    Background,
  } from 'reactflow';
 
import 'reactflow/dist/style.css';

const rfStyle = {
  backgroundColor: 'transparent',
};
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function BranchOut() {
  return (
    <div style={{ width: '35vw', minHeight: '100vh', borderRadius: 8 }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} style={rfStyle}>
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}