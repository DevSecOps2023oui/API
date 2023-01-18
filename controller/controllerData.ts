import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class ControlerData{
  public async GetAll(req,res) {
    const all = await prisma.sensors_data.findMany({})
    res.send(all);
  }

  public async GetAllDay(req,res) {
    const all = await prisma.sensors_data.findMany({
      where: {
        datetime: {
          gte: new Date()
        },
      },
    })
    res.send(all);
  }

  public async GetTemp(req,res) {
    const temp = await prisma.sensors_data.findMany({
      select: {
        temperature:true,
        datetime:true
      }
    })
    res.send(temp);
  }

  public async GetHydro(req,res) {
    const hydro = await prisma.sensors_data.findMany({
      select: {
        hydrometry:true,
        datetime:true
      }
    })
    res.send(hydro);
  }

  public async GetVent(req,res) {
    const vent = await prisma.sensors_data.findMany({
      select: {
        wind_power:true,
        datetime:true
      }
    })
    res.send(vent);
  }

   // console.log(all);
  // console.log(temp);
  // console.log(hydro);
  // console.log(vent);
}

 