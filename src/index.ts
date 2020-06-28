import 'source-map-support/register'
import 'module-alias/register'
import 'reflect-metadata'
import { startServer } from './Server'
import { defaultIfNaN } from './utils/Number'

const serverPort: number = defaultIfNaN(process.env.SERVER_PORT, 3000)

main().catch(console.error)

async function main(): Promise<void> {
    const app = await startServer()

    app.listen(serverPort, function serverListener() {
        console.log(`Listening on port ${serverPort}`)
    })
}
