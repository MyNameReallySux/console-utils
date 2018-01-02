// Node Packages
let path = global.imports.path

// Imported Packages
let { runTest, makeDescribeClass, makeDescribeFunc } = global.imports.TestUtils

let { isFunction } = global.imports.TypeUtils

let { assert, expect } = global.imports.Chai
let colors = global.imports.colors

import { print, info, debug, warn, error, supressConsole, restoreConsole } from '../dist/ConsoleUtils'

const describeClass = makeDescribeClass(describe)
const describeFunc = makeDescribeFunc(describe)