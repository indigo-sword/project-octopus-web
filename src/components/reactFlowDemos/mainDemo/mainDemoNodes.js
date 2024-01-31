
 
export const mainDemoNodes = [
    { 
        id: '1', 
        type: 'input', 
        position: { x: 100, y: 100 }, 
        data: { 
            label: 'Start' 
        }, 
        sourcePosition: 'right', 
    },
    { 
        id: '2', 
        position: { x: 400, y: 0 }, 
        data: { 
            label: 'Node' 
        }, 
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: '3', 
        position: { x: 400, y: 100 }, 
        data: { 
            label: 'Node' 
        }, 
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: '4', 
        position: { x: 400, y: 200 }, 
        data: { 
            label: 'Node' 
        }, 
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    { 
        id: '5', 
        position: { x: 700, y: 50 }, 
        data: { 
            label: 'Node' 
        }, 
        sourcePosition: 'right',
        targetPosition: 'left',
    },
    
    { 
        id: '6', 
        type: 'output', 
        position: { x: 1000, y: 50 }, 
        data: { 
            label: 'End1' 
        }, 
        targetPosition: 'left',
    },
    { 
        id: '7', 
        position: { x: 1000, y: 200 }, 
        data: { 
            label: 'End2' 
        }, 
        type: 'output', 
        targetPosition: 'left',
    },
];

export const mainDemoEdges = [
    { 
        id: 'e1-2', 
        source: '1', 
        target: '2', 
        animated: true,
    },
    { 
        id: 'e1-3', 
        source: '1', 
        target: '3', 
        animated: true,
    },
    { 
        id: 'e1-4', 
        source: '1', 
        target: '4', 
        animated: true,
    },
    { 
        id: 'e2-5', 
        source: '2', 
        target: '5', 
        animated: true,
    },
    { 
        id: 'e3-5', 
        source: '3', 
        target: '5', 
        animated: true,
    },
    { 
        id: '5-6', 
        source: '5', 
        target: '6', 
        animated: true,
    },
    { 
        id: '4-7', 
        source: '4', 
        target: '7', 
        animated: true,
    },
];