import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();

app.use(cors())
async function fetchData() {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/chat', { /* your data here */ });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error('Error during the API call:', error);
    }
  }
const lyrics = 

function generateRandomValue() {
    return Math.floor(Math.random() * 151) + 150;
  }
app.post('/chat/completions', async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });


    const writeWrap = (content: string) => res.write(`data: ${content}\n\n`)

    writeWrap(JSON.stringify({ "id": "chatcmpl-123", "object": "chat.completion.chunk", "created": 1694268190, "model": "gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices": [{ "index": 0, "delta": { "role": "assistant", "content": "" }, "logprobs": null, "finish_reason": null }] },))

    const simpleW = (c: string) =>
        writeWrap(JSON.stringify({ "id": "chatcmpl-123", "object": "chat.completion.chunk", "created": 1694268190, "model": "gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices": [{ "index": 0, "delta": { "content": c }, "logprobs": null, "finish_reason": null }] }))

    for (const l of lyrics.split('\n')) {
        for (const x of l.split('\b')) {
            simpleW(x)
            await new Promise(resolve => setTimeout(resolve, generateRandomValue()));
        }

        simpleW('\n')
    }

    writeWrap(JSON.stringify({ "id": "chatcmpl-123", "object": "chat.completion.chunk", "created": 1694268190, "model": "gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices": [{ "index": 0, "delta": {}, "logprobs": null, "finish_reason": "stop" }] }))
    res.write(`data: [DONE]\n\n`);
    res.end();
});

const port = 3500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});