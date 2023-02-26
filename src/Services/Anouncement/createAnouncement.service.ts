import {
  AnouncementRequest,
  AnouncementResponse,
} from '../../interfaces/anouncement';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createAnouncementService = async (data: AnouncementRequest) => {
  const {
    title,
    year,
    km,
    price,
    description,
    vehicle_type,
    ad_type,
    published,
    sold,
    cover_img,
  } = data;

  const newAnouncement: AnouncementResponse = await prisma.anouncement.create({
    data: {
      //id,
      title,
      year,
      km,
      price,
      description,
      vehicle_type,
      ad_type,
      published,
      sold,
      cover_img,
      //created
    },
  });
  return newAnouncement;
};

export default createAnouncementService;
