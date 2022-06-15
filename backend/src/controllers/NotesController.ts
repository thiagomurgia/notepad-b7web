import { Request, Response } from "express";
import { NotesModel } from "../database/models/NotesModel";
import { v4 as uuidv4 } from "uuid";

class NotesController {
  async createNote(req: Request, res: Response) {
    const { note, color } = req.body;

    if (!note || !color) {
      return res.status(400).send();
    }

    try {
      const addnote = await NotesModel.create({
        id: uuidv4(),
        note,
        color,
      });
      return res.status(201).json(addnote);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Note not added!" });
    }
  }

  async listAllNotes(req: Request, res: Response) {
    const notes = await NotesModel.findAll();

    return res.status(201).json(notes);
  }

  async removeNote(req: Request, res: Response) {
    const { id } = req.params;

    // eslint-disable-next-line no-unused-vars
    const note = await NotesModel.destroy({
      where: {
        id,
      },
    });

    return res.status(200).end();
  }

  async editNote(req: Request, res: Response) {
    const { noteId } = req.params;
    const { note, color } = req.body;

    // eslint-disable-next-line no-unused-vars
    const newNote = await NotesModel.update(
      { note, color },
      {
        where: {
          id: noteId,
        },
      }
    );
    return res.status(201).send().redirect("/");
  }
}

export default new NotesController();
