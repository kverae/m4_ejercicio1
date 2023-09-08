import data from "../data/postList.json";

export function getPosts() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([...data.postList]);
    }, 3000);
  });
}
