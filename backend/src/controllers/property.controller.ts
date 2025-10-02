import type { NextFunction, Request, Response } from 'express';
import { Property } from '../models/property.ts';

export const createProperty = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { title, price, description, type, placeId, placeDescription, typeDescription } = req.body;
    const property = await Property.create({ title, price, description, type, placeDescription, typeDescription, placeId });
    res.json(property);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getProperties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ads = await Property.findAll();
    res.json(ads);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getPropertyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const property = await Property.findOne({ where: { id } });
    
    if(property == null){
      res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
    next(err);
  }
};

export const updateProperty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { title, price, description, type, placeDescription, typeDescription, placeId } = req.body;
    const response = await Property.update({ title, price, description, type, placeDescription, typeDescription, placeId }, { where: { id } });
    
    if(response == null || response[0] === 0) {
      res.status(404).json({ error: "Property not found or no changes made" });
      return;
    }
    res.json({
      title, price, description, type, placeDescription, typeDescription, placeId, id
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProperty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await Property.destroy({ where: { id } });
    res.json({ message: "Property deleted" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};