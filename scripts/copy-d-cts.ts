/**
 * Replace this file with tsup's `onSuccess` hook once https://github.com/egoist/tsup/issues/700 is fixed.
 */
import { globby } from "globby"
import { copy } from "fs-extra"

const dtsFiles = await globby("./**/*.d.ts*", {
  ignore: ["**/node_modules/**"],
})
for (const dtsFile of dtsFiles) {
  const dctsFile = dtsFile.replace(/\.d\.ts/, ".d.cts")
  console.info(`Copying ${dtsFile} to ${dctsFile}`)
  await copy(dtsFile, dctsFile)
}
