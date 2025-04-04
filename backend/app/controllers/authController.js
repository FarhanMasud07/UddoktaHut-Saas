import { getRefreshToken, getUserToken } from "../services/authService.js";
import { setCookieAccessRefreshToken } from "../services/commonService.js";

const loginUser = async (req, res, next) => {
  try {
    const verifiedTokens = await getUserToken(req.body);
    if (!verifiedTokens)
      return res.status(401).json({
        message: "Invalid user",
      });

    setCookieAccessRefreshToken(res, verifiedTokens.tokens);

    return res.status(200).json({
      tokens: verifiedTokens.tokens,
      onboarded: verifiedTokens.onboarded,
    });
  } catch (err) {
    next(err);
  }
};

const refreshToken = (req, res, next) => {
  try {
    const accessToken = getRefreshToken(req.body);
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

export { loginUser, refreshToken };
