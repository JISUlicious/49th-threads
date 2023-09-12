const express = require("express");
const threadController = require("../controllers/thread.controller");

const threadRouter = express.Router();

threadRouter.get("/:id", threadController.getThread);
threadRouter.get("/check", threadController.threadCheck);
threadRouter.post("/post", threadController.threadPost);
threadRouter.put("/update", threadController.threadUpdate);
threadRouter.delete("/delete", threadController.threadDelete);
module.exports = { threadRouter };
