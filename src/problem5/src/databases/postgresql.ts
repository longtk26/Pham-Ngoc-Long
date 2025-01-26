import prismaClient from "../config/prisma";

export const initPostgresql = async () => {
    try {
        await prismaClient.$connect();
        console.log('Postgresql is connected');
    } catch (error) {
        console.error('Postgresql failed to initialize');
        throw new Error('Postgresql failed to initialize');
    }
}