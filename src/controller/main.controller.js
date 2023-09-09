import MainModel from "../model/main.model.js";

export const createUser = async (req, res) => {
  try {
    const { user_name, user_age } = req.body;

    const data = await MainModel.create({ user_name, user_age });

    return res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const data = await MainModel.findAll();
    console.log(data);
    return res.send(data);
  } catch (error) {
    console.log(error);
  }
};

export const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const data = await MainModel.update(newData, { where: { id } });
    return res.send({
      data,
      msg: "update",
    });
  } catch (error) {
    console.log(error);
  }
};

export const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await MainModel.destroy({
      where: {
        id,
      },
    });

    return res.send("delete");
  } catch (error) {
    console.log(error);
  }
};
