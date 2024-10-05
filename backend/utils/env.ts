import { config } from "dotenv"; // Load Env
import { expand } from "dotenv-expand"; // Security of env dependencies
import { z, ZodError } from "zod"; // schema validation + error handling

const envSchema = z.object({
    DB_HOST: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASSWORD: z.string().min(1),
    DB_NAME: z.string().min(1),
    DB_PORT: z.coerce.number().min(1)
})

expand(config())

try {
    envSchema.parse(process.env)
} catch (err) {
    if (err instanceof ZodError) {
        console.log("Erro com as variaveis de ambiente:", err.errors)
    }
}
export default envSchema.parse(process.env);