import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const retrieveAnouncementService = async (id: string) => {
  const anouncement = await prisma.anouncement.findUnique({
    where: { id: Number(id) },
  });

  return anouncement;
};

export default retrieveAnouncementService;
