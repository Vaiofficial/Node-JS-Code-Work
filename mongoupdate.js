const dbConnect = require("./mongoconnect");

const update = async () => {
  const db = await dbConnect();
  const result = await db.updateMany(
    { name: "P Vaibhav" },
    { $set: { name: "Porta Vaibhav" } }
  );

  if (result.acknowledged) {
    console.warn("data is updated");
  }
};

update();
