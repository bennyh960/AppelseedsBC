const myDoc = "myDoc.docx";
const myDoc2 = "myDoc.docx";

console.log(myDoc.endsWith(".doc") || myDoc.endsWith(".docx"));

const pattern = /\.(doc|docx)$/;

console.log(myDoc.match(pattern));
console.log(pattern.test(myDoc));

// *multer exxamples - will not work here due to import issue - its just syntax example
// const upload = multer({
//   dest: "avatars",
//   limits: {
//     fileSize: 1e6,
//   },
//   fileFilter(req, file, cb) {
// cb(undefined, false); //reject the upload
//     if (!file.originalname.endsWith(".pdf")) {
// if (!(file.originalname.endsWith(".doc") || file.originalname.endsWith(".docx"))) {
// if (!file.originalname.match(/\.(doc|docx)$/)) {
//       cb(new Error("File must be PDF"));
//     }
//     cb(undefined, true); //accept the upload
//   },
// });
// router.post("/users/me/avatar", upload.single("avatar"), (req, res) => {
//   res.send();
// });

// ? Error handling express example
// const errorMiddleware = (req, res, next) => {
//     throw new Error("From my middleware");
//   };

// router.post("/users/me/avatar", upload.single("avatar"), (req, res) => {
// ? for error handling express func get 3 args where the last is for error handling
//   router.post(
//     "/users/me/avatar",
//     errorMiddleware,
//     (req, res) => {
//       res.send();
//     },
//     (error, req, res, next) => {
//       res.status(400).send({ error: error.message });
//     }
//   );
