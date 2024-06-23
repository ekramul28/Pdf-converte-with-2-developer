const username = process.env.UserDb
const password = process.env.PASSWORD
// console.log("Username:", username);
// console.log("Password:", password);





export const connectionToDb=`mongodb+srv://${username}:${password}@cluster0.pu45iww.mongodb.net/PdfMagicDB?retryWrites=true&w=majority`

