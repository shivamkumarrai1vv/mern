import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkflowExecutor = () => {
    const [workflows, setWorkflows] = useState([]);
    const [selectedWorkflow, setSelectedWorkflow] = useState('');
    const [csvData, setCsvData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/workflows')
            .then(response => setWorkflows(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleFileUpload = (event) => {
        setCsvData(event.target.files[0]);
    };

    const executeWorkflow = () => {
        const formData = new FormData();
        formData.append('workflowId', selectedWorkflow);
        formData.append('data', csvData);

        axios.post('http://localhost:5000/api/workflows/execute', formData)
            .then(response => console.log('Workflow executed!', response))
            .catch(err => console.log(err));
    };

    return ( <
        div >
        <
        h2 > Execute Workflow < /h2> <
        input type = "file"
        accept = ".csv"
        onChange = { handleFileUpload }
        /> <
        select onChange = {
            (e) => setSelectedWorkflow(e.target.value) } > {
            workflows.map(workflow => ( <
                option key = { workflow._id }
                value = { workflow._id } > { workflow.name } <
                /option>
            ))
        } <
        /select> <
        button onClick = { executeWorkflow } > Execute < /button> <
        /div>
    );
};

export default WorkflowExecutor;