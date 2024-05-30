import { createBatch1 } from "../repositories/batch1";
async function controllerBatch1(req, res, next) {}
let message;
let data;
let rc;
try {
  data = await createBatch1(req.body.name, res.body.jeni_kelamin);
  rc = 200;
  message = "success";
} catch (error) {
  rc = 500;
  message = "error";
}

export { controllerBatch1 };
