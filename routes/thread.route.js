const express = require("express");

const threadRouter = express.Router();
const { threadController } = require("../controllers");
const { validateToken } = require("../middleware/auth"); // 위에서 만든 미들웨어 로직을 임포트 합니다.

threadRouter.use(validateToken); 

threadRouter.get("/check", threadController.threadCheck);
//아래 post put delte는 권한 확인이 필요하다
threadRouter.post("/post", threadController.threadPost);
threadRouter.put("/update", threadController.threadUpdate);
threadRouter.delete("/delete", threadController.threadDelete);
threadRouter.get("/:id", threadController.getThread);

module.exports = { threadRouter };
