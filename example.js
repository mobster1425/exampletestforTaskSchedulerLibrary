require('dotenv').config();

//const schedule = require('node-schedule');
const TaskScheduler = require('schedulix');
const mongodbURL=process.env.MONGODB_URI
// Create a new task scheduler
const taskScheduler = new TaskScheduler(mongodbURL);

// Define a task to be scheduled
const myTask = () => {
  console.log('Hello, its an example');
}
//const date=new Date(Date.now() + 1000);
//schedule task to run every 30 seconds
//the cron expression '*/30 * * * * *' means every 30 seconds
const rule='*/30 * * * * *';
const metadata = { name: 'My task', description: 'Prints "Hello, world!" every minute' };
taskScheduler.scheduleTask(myTask, rule, metadata);

// Wait for 5 minutes, then cancel the task
setTimeout(async () => {
  console.log('Cancelling all tasks...');
  await taskScheduler.cancelTask(myTask);
 // await taskScheduler.cancelAllTasks();
}, 5 * 60 * 1000);


