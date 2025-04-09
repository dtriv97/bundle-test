## Project Submission: File Upload & Task Status Tracker

---

### 1. What did you choose to mock the API and why?

I decided to go for a simple approach to mock the APIs, I created an upload service, which was accessible via a global hook and that would be used to return a
spoofed upload happening in situ. However, I failed to realise that hooks won't be useable, and unfortunately are not accesible from the api call functions. The
spoofing nature is largely based on simple `setTimeout` and `setInterval` functions that are returned in a Promise, which simulate a real-life API call behaviour.

I also added some random number generator checks to mimic a network drop during an upload service that could happen.

---

### 2. If you used an AI tool, what parts did it help with?

I used CoPilot primarily, as part of the VS Code IDE. It mainly helps with quick setup and formatting of components such as, generating a quick progress bar function, basic enough that it has all essentials and then you can build custom on top of it. Also to setup boilerplate code for API call functions etc.

---

### 3. What tradeoffs or shortcuts did you take?

Ideally, I'd use some more established libraries etc. to do the mocking service, in this instance I initially thought it'd be easier to try doing this without them. Some of the naming procedures and prop drilling that's happened isn't ideal too, and I'd likely refactor the components to make them into more focused functions with simpler responsibilities, not just a bunch of handler functions.

---

### 4. What would you improve or add with more time?

Firstly, make it work! Ideally, re-work the hook to instead just return different random numbers for the task Id as part of the initial API call, and then create another API call (for status check) which just returns randomly a percentage and a status code. Most likely, I'd need some way to ensure we aren't getting backwards progress, but that should be simple enough. After that, I would style the input fields a lot better, and most likely wrap it in a form so it's more appropriate for a production use-case.

---

### 5. What was the trickiest part and how did you debug it?

I had some trouble simplifying the task, and perhaps overthought the spoofed upload service, which wasn't the main intention I can now understand. Starting with simpler verbose functions and calls would've been easier, allowing me to complete the task. Oh well, next time hopefully...

---
