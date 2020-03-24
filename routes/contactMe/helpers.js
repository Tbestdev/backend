const _pick = require("lodash.pick");
const {
  INTERNAL_SERVER_ERROR,
  OK,
  getStatusText
} = require("http-status-codes");

const CONSTANTS = require("./constants");
const models = require("../../db/models");

const { User } = models;
const { USERINFO, SUCCESS, SIGNED_UP } = CONSTANTS;

module.exports = {
  contactMe: async (req, res) => {
    const userData = ({ firstName, lastName, email, message } = req.body);
    // https://lodash.com/docs/4.17.11#pick
    // const userData = _pick(req.body, SIGN_UP_KEYS);
    // const { email, password } = req.body;

    // if (!email || !password) {
    //   return res.status(UNAUTHORIZED).send({
    //     data: { title: NO_EMAIL_PASSWORD },
    //     status: FAIL
    //   });
    // }

    try {
      const user = new User(userData);

      await user.save();

      return res.status(OK).json({
        data: {
          title: SIGNED_UP,
          user: _pick(user, USERINFO)
        },
        status: SUCCESS
      });
    } catch (error) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .json({ error: getStatusText(INTERNAL_SERVER_ERROR), success: false });
    }
  }
};
