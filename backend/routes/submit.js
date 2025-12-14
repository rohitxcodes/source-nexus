import express from "express";
import axios from "axios";
const router = express.Router();
router.post("/", async (req, res) => {
  const { source_code } = req.body;
  if (!source_code) {
    return res.status(400).json({
      sucess: false,
      error: "source_code is rquried",
    });
  }
  //HARD-CODED test case(temporary)
  const input = "5 7";
  const expectedOutput = "12";

  try {
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        source_code,
        language_id: 63,
        stdin: input,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.JUDGE0_API_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      }
    );

    const stdout = (response.data.stdout || "").trim();

    if (stdout === expectedOutput) {
      return res.json({
        success: true,
        message: "Correct Answer",
      });
    }

    return res.json({
      success: false,
      message: "Wrong Answer",
      expected: expectedOutput,
      got: stdout,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Execution failed",
      details: err.message,
    });
  }
});

export default router;
