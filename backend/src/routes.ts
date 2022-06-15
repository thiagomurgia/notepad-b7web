import express from "express";

import UserController from "./controllers/NotesController";

const Routes = express.Router();

// Routes Users
Routes.get("/", UserController.listAllNotes);
Routes.post("/", UserController.createNote);
Routes.delete("/:id", UserController.removeNote);
Routes.put("/:noteId", UserController.editNote);

export { Routes };
