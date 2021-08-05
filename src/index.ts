const express = require("express");
const Student = require("./models/student");

require("./db/conn");
const app = express();

app.use(express.json());
// app.get("/students", (req, res) => {
//     res.send("hello from mayuri chavan");
// })



app.post("/students", (req:any, res:any) => {
    console.log(req.body);
    const student = new Student(req.body);
    student.save().then(() => {
        res.status(201).send(student);
    }).catch((e:any) => {
        res.status(400).send(e);
    });
})

app.get("/students", async(req:any, res:any) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

app.get("/students/:id", async(req:any, res:any) => {
    try {
        const id = req.params.id;
        const studentData = await Student.findById({ _id: id });
        if (!studentData) {
            res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.send(e);
    }
})

app.delete("/students/:id", async(req:any, res:any) => {
    try {

        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})

app.patch("/students/:id", async(req:any, res:any) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body);
        res.send(updateStudent);
    } catch (e) {
        res.status(404).send(e);
    }
})
app.listen(3000, () => {
    console.log("server is running");
})