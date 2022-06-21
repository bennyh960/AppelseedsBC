export const authUser = (req, res, next) => {
  console.log('MiddleWare');
  next();
};
