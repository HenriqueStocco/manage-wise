import Fastify from 'fastify'
import envSchema from './utils/env'

const fastify = Fastify({ logger: true })

const start = async () => {
    try {
        await fastify.listen({port: Number.parseInt(envSchema.PORT)})
        console.log(`Server rodandos na porta: http://localhost:${envSchema.PORT}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()

// Use drizzle-kit to make the migrations