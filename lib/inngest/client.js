// This client will be used in different parts of the project to handle event-driven actions.

import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "nextstep-ai", name: "NextStep AI" });
