import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/subscriptions", async (req, res) => {
    const subscription = await prisma.user.create({
        data: {
            name: req.body.serviceName,
            email: req.body.accountEmail,
            age: req.body.monthlyPrice
        }
    });

    res.status(201).json(subscription);
});

app.get("/subscriptions", async (req, res) => {
    const subscriptions = await prisma.user.findMany();

    const formattedSubscriptions = subscriptions.map((subscription) => ({
        id: subscription.id,
        serviceName: subscription.name,
        accountEmail: subscription.email,
        monthlyPrice: subscription.age
    }));

    res.status(200).json(formattedSubscriptions);
});

app.put("/subscriptions/:id", async (req, res) => {
    const subscription = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.serviceName,
            email: req.body.accountEmail,
            age: req.body.monthlyPrice
        }
    });

    res.status(200).json(subscription);
});

app.delete("/subscriptions/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({ message: "Subscription deleted successfully!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});