export default function printList(list: any): string[] {
  let newArray: string[] = [];
  function linkList(list: any) {
    if (list !== null) {
      newArray.push(list.value);
      list = list.next;
      linkList(list);
    }
  }
  linkList(list);
  return newArray;
}
