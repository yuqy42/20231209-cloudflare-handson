export const config = {
  runtime: 'edge',
}

export default async function (req) {
  const kvvalue = await process.env.KV.get('test')
  return new Response(kvvalue)
}
