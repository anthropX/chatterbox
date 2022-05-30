let store = null

export default function $store(recevedStore) {
  if (recevedStore) {
    store = recevedStore
  }
  return store
}
