const express = require('express');
const router = express.Router();
const Workflow = require('../models/Workflow');

// Save a workflow
router.post('/save', (req, res) => {
  const newWorkflow = new Workflow(req.body);

  newWorkflow.save()
    .then(workflow => res.json(workflow))
    .catch(err => res.status(400).json({ error: err }));
});

// Get all workflows
router.get('/', (req, res) => {
  Workflow.find()
    .then(workflows => res.json(workflows))
    .catch(err => res.status(400).json({ error: err }));
});

// Execute a workflow (simplified for now)
router.post('/execute', (req, res) => {
  const { workflowId, data } = req.body;
  
  // Logic to execute workflow based on its nodes
  // For now, just send back the data
  res.json({ message: 'Workflow executed successfully', data });
});

module.exports = router;
