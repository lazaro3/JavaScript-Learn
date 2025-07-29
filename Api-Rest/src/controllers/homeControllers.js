
class homeController {
  async index(req, res) {
    try {
    res.json('index');
    } catch (error) {
      console.log(error);
      res.json(error)
    }

  }
}
export default new homeController();
