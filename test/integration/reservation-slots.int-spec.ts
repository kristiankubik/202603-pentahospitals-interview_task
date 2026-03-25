import { describe, it, beforeAll, afterAll, expect } from '@jest/globals';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../../src/prisma/prisma.service.js';
import { ReservationSlotsService } from '../../src/reservation-slots/reservation-slots.service.js';

describe('ReservationSlotsService (integration)', () => {
    let prisma: PrismaService;
    let service: ReservationSlotsService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [PrismaService, ReservationSlotsService],
        }).compile();

        prisma = module.get(PrismaService);
        service = module.get(ReservationSlotsService);

        await prisma.$connect();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it('creates and fetches a slot from DB', async () => {
        const date = new Date('2026-05-26T00:00:00.000Z');

        await service.create(date, 2, new Date());

        const result = await service.findByDate(date.toISOString(), new Date());

        expect(result.length).toBeGreaterThan(0);
    });
});
