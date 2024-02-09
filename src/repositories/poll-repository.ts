import { type Poll, type Prisma } from '@prisma/client'

export interface PollRepository {
    create: (data: Prisma.PollCreateInput) => Promise<Poll>
}