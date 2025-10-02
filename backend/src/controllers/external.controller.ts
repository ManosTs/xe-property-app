import type { NextFunction, Request, Response } from 'express';
import axios from 'axios';

export const getExternalAreas = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { area } = req.query;
    if(!area || typeof area !== 'string') {
      return res.status(400).json({ error: 'Area query parameter is required' });
    }
    const response = await axios.get(
      `https://oapaiqtgkr6wfbum252tswprwa0ausnb.lambda-url.eu-central-1.on.aws/?input=${area}`,
    );
    
    res.json(response.data); // send the API result to the client
  } catch (error) {
    res.status(500).json(error);
  }
};