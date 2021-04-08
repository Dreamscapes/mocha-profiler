// eslint-disable-next-line node/no-unsupported-features/node-builtins
import * as inspector from 'inspector'
import * as fs from 'fs'
import * as path from 'path'
import * as readpkg from 'read-pkg-up'
import type { RootHookObject } from 'mocha'

const session = new inspector.Session()
const procname = process.argv0
const pkgname = readpkg.sync()?.packageJson.name || null
const pid = process.pid
const filename = `${pkgname ?? procname}.${pid}.cpuprofile`
const destination = path.resolve(process.cwd(), filename)

const mochaHooks: RootHookObject = {
  beforeAll(done) {
    session.connect()

    return void session.post('Profiler.enable', () =>
      void session.post('Profiler.start', done))
  },

  afterAll(done) {
    session.post('Profiler.stop', (sessionErr, data) => {
      if (sessionErr) {
        return void done(sessionErr)
      }

      return void fs.writeFile(destination, JSON.stringify(data.profile), writeErr => {
        if (writeErr) {
          return void done(writeErr)
        }

        session.disconnect()

        return void done()
      })
    })
  },
}

export {
  mochaHooks,
}
