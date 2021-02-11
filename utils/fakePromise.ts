export default function fakePromise<T>(delay: number, value: T) {
  return new Promise<T>(function (resolve) {
    setTimeout(resolve, delay, value)
  })
}
