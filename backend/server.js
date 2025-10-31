const express = require("express");
const app = express();
const testRoutes = require("./routes/testRoutes");

app.use("/api/test", testRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
