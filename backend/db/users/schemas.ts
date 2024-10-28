import { pgTable, serial, text } from 'drizzle-orm/pg-core'

// just for example
export const userSchema = pgTable('User', {
    id: serial('id').primaryKey(),
    name: text('name').notNull()
})