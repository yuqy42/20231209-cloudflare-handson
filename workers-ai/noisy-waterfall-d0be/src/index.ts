import { Ai } from '@cloudflare/ai'

/*

import { AiTextGenerationInput } from '@cloudflare/ai/dist/tasks/text-generation';

export default {
  async fetch(request: any, env: any) {
    const ai = new Ai(env.AI);
    const urlparams = new URLSearchParams(request.url.split('?')[1]);
    const input: AiTextGenerationInput = { prompt: urlparams.get('input') ?? '' };
    const output = await ai.run('@cf/meta/llama-2-7b-chat-int8', input);
    const convertedText = JSON.stringify(output).replace(/\\n/g, "").replace(/\\u/g, "\\u").replace(/\\u/g, "\\u");
    return new Response(convertedText);
  },
};
*/

export default {
  async fetch(_: any, env: any) {
    const ai = new Ai(env.AI);
    const response = await ai.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
      prompt: 'A happy llama running through an orange cloud'
    });
    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
}

