import gozeal from "../../sequelize/models/gozeal";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await gozeal.findAll();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { name, description } = req.body;

    try {
      const gozeal = await gozeal.create({
        name,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res.status(200).json(gozeal);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(405).end();
  }
}
