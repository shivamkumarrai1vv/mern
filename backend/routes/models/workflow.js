const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkflowSchema = new Schema({
  name: { type: String, required: true },
  nodes: { type: Array, required: true },
  edges: { type: Array, required: true },
});

module.exports = Workflow = mongoose.model('Workflow', WorkflowSchema);

