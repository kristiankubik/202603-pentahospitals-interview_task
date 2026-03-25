import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const file = fileURLToPath(import.meta.url);
const dir = path.dirname(file);
const projectRoot = path.resolve(dir, '../..');
const dbPath = path.resolve(dir, './test.db');
const schemaPath = path.resolve(projectRoot, 'src/prisma/schema.prisma');

if (existsSync(dbPath)) {
    unlinkSync(dbPath);
}

process.env.DATABASE_URL = `file:${dbPath}`;

const result = spawnSync('npx', ['prisma', 'db', 'push', '--schema', schemaPath], {
    cwd: projectRoot,
    stdio: 'inherit',
    env: {
        ...process.env,
        DATABASE_URL: `file:${dbPath}`,
    },
});

if (result.status !== 0) {
    throw new Error(`prisma db push failed with status ${result.status ?? 'unknown'}`);
}
