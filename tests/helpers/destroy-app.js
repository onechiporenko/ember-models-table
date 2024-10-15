import { runTask } from 'ember-lifeline';

export default function destroyApp(application) {
  runTask(application, 'destroy', 1);
  if (window.server) {
    window.server.shutdown();
  }
}
