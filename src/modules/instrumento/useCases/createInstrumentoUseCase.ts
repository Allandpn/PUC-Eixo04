import { Instrumento, Prisma } from "@prisma/client";
import { CreateInstrumentoDTO } from "../dtos/createInstrumentoDTO";
import { prisma } from "../../../prisma/client";

export class CreateInstrumentoUseCase {
    async execute({nomeInstrumento, marcaInstrumento, estadoConservacaoDoInstrumento} : CreateInstrumentoDTO) :Promise<Instrumento>{
        //verificar instrumento já existe
    

    let instrumento: Prisma.InstrumentoCreateInput

        instrumento = {
            nomeInstrumento,
            marcaInstrumento,
            estadoConservacaoDoInstrumento,
            
        }

    const createInstrumento = await prisma.instrumento.create({
        data: instrumento
    });

    return createInstrumento;
    }

}