import jwt from "jsonwebtoken";

const generateToken = (user, expire = "1d") => {
  const token = jwt.sign({ userid: user._id }, process.env.JWT_AUTH , {
    expiresIn: expire,
  });
  return token;
};

const validateToken = (token) => {
    try {
      console.log("here in try");
      
      const decoded = jwt.verify(token, process.env.JWT_AUTH);
      return decoded;
    } catch (error) {
      console.log("Error in Token.utils.js: ", error);
      return null;
    }
  };

export { generateToken, validateToken };
