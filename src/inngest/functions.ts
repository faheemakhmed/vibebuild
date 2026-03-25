import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: [{ event: "test/hello.world" }] },
  async ({ event, step }) => {
    // Simulate a long-running task by sleeping for 20 seconds
    await step.sleep("wait-a-moment", "20s");

    // Simulate a long-running task by sleeping for 30 seconds
    await step.sleep("wait-a-moment", "30s");
    return { message: `Hello ${event.data.email}!` };
  },
);