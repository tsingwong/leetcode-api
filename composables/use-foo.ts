export function useA() {
  return "a"
}

function useB() {
  return "b"
}

function _useC() {
  return "c"
}

export const useD = () => {
  return "d"
}

export { useB, _useC as useC }

export default () => useState("foo", () => "bar")
