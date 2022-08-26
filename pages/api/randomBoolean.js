async function handler(req, res) {
  if (req.method === "GET") {
    const delay = (mSecs) =>
      new Promise((resolve) => setTimeout(resolve, mSecs));

    async function getRandomBoolean() {
      await delay(1000);
      return Math.random() < 0.5;
    }

    await res.status(201).json({ message: await getRandomBoolean() });
  }
}
export default handler;
