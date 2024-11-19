import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

let problems = [
  {
    id: 0,
    title: "Pollyfill of Array.map()",
    description: "learn more about array of map polyfill",
  },
  {
    id: 1,
    title: "Pollyfill of Array.filter()",
    description: "learn more about array of filter polyfill",
  },
  {
    id: 2,
    title: "Pollyfill of Promise.all()",
    description: "learn more about polyfill of promise.all",
  },
];

app.get("/api/problems", (req, res) => {
  res.json(problems);
});

app.post("/api/problems", (req, res) => {
  const body = req.body;
  problems = [
    ...problems, //using spread operator we can add more data
    body,
  ];
  res.json(problems);
});

app.put("/api/problems/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  problems = problems.map((p) => {
    if (p.id == id) {
      return {
        id,
        ...body,
      };
    }
    return p;
  });
  res.json(problems);
});

app.delete("/api/problems/:id", (req, res) => {
  const id = req.params.id;
  problems = problems.filter((p) => p.id != id);
  res.json(problems);
});

app.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
