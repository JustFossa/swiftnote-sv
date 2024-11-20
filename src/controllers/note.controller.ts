import { Request, Response } from "express";
import { ResponseHandler } from "../classes/Response";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json(new ResponseHandler(false, 400, "Note ID is required"));
  }

  const note = await prisma.note.findUnique({
    where: {
      id,
    },
  });

  if (!note) {
    return res
      .status(404)
      .json(new ResponseHandler(false, 404, "Note not found"));
  }

  await prisma.note
    .delete({
      where: {
        id,
      },
    })
    .catch((err) => {
      console.log(err);
    });

  return res.status(200).json(new ResponseHandler(true, 200, "Success", note));
};

export const createNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(400)
      .json(new ResponseHandler(false, 400, "Title and content are required"));
  }

  const note = await prisma.note.create({
    data: {
      title,
      content,
    },
  });

  return res
    .status(201)
    .json(new ResponseHandler(true, 201, "Note created", note));
};
