export type Stuff = {
  foo: string
  bar: number
}

export const getStuff = (): Stuff => {
  return {
    foo: "baz",
    bar: 42,
  }
}
