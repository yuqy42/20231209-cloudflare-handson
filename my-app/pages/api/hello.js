export const config = {
  runtime: 'edge',
}

export default async function getServerSideProps() {
  const random = Math.floor(Math.random() * 100);
  return new Response(random);
}
